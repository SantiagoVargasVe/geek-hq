import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { email: string } }
) {
  const { email } = params;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  // console.log("user data", user);

  return Response.json(user, { status: 200 });
}
