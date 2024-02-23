import prisma from "@/lib/prisma";

export async function GET({ params }: { params: { email: string } }) {
  const { email } = params;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return Response.json(user, { status: 200 });
}
