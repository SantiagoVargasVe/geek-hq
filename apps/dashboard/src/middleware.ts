import {
  withMiddlewareAuthRequired,
  getSession,
} from "@auth0/nextjs-auth0/edge";
import { NextResponse } from "next/server";

import { PrismaClientEdge as prismaEdge } from "database";

export default withMiddlewareAuthRequired(async (req) => {
  const res = NextResponse.next();

  const sessionData = await getSession(req, res);

  if (!sessionData) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const user = await prismaEdge.user.findUnique({
    where: {
      email: sessionData?.user.email,
    },
    cacheStrategy: {
      ttl: 60,
    },
  });

  if (
    user?.register_status === "UNREGISTERED" &&
    req.nextUrl.pathname !== "/register"
  ) {
    return NextResponse.redirect(new URL("/register", req.url));
  }

  return res;
});

export const config = {
  matcher: ["/register", "/dashboard"],
};
