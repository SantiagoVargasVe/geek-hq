import React from "react";

import prisma from "@/lib/prisma";
import { getSession } from "@auth0/nextjs-auth0";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navigation = async () => {
  const session = await getSession();

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user.email,
    },
  });

  return (
    <div className="flex bg-slate-800 h-10 items-center px-5 justify-between">
      <p>Hola, {user?.given_name}</p>
      <Button asChild variant="link">
        <Link href="/api/auth/logout">Cerrar Sesión</Link>
      </Button>
    </div>
  );
};

export default Navigation;
