// app/api/auth/[auth0]/route.js
import {
  handleAuth,
  handleLogin,
  handleCallback,
  Session,
  AppRouteHandlerFnContext,
} from "@auth0/nextjs-auth0";
import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "database";

const prisma = new PrismaClient();

interface User {
  email: string;
  name: string;
  picture: string;
  nickname: string;
  given_name: string;
  family_name: string;
  sid: string;
}

function getUrls(req: NextRequest) {
  const host = req.headers.get("host");
  const protocol = host?.includes(`localhost:${process.env.PORT}`)
    ? "http"
    : "https";
  const redirectUri = `${protocol}://${host}/api/auth/callback`;
  const returnTo = `${protocol}://${host}`;

  return {
    redirectUri,
    returnTo,
  };
}

const afterCallback = async (req: NextRequest, session: Session) => {
  const { user } = session as { user: User };

  // TODO: If the user comes from not email password, it is already registered
  const userRecord = await prisma.user.upsert({
    where: { email: user.email },
    update: {},
    create: {
      email: user.email,
      name: user.name,
      picture: user.picture,
      given_name: user.given_name,
      family_name: user.family_name,
      id: user.sid,
    },
  });

  session.register_status = userRecord.register_status;

  return session;
};

export const GET = handleAuth({
  login: async (req: NextRequest, ctx: AppRouteHandlerFnContext) => {
    const { searchParams } = req.nextUrl;
    const customReturnTo = searchParams.get("returnTo");
    const loginHint = searchParams.get("login_hint");
    const { redirectUri, returnTo } = getUrls(req);
    const finalReturnTo = customReturnTo ?? returnTo;

    return handleLogin(req, ctx, {
      authorizationParams: {
        redirect_uri: redirectUri,
        login_hint: loginHint ?? undefined,
      },
      returnTo: finalReturnTo,
    });
  },

  callback: async (req: NextRequest, res: AppRouteHandlerFnContext) => {
    return handleCallback(req, res, {
      afterCallback: (req: NextRequest, session: Session) =>
        afterCallback(req, session),
    });
  },
});
