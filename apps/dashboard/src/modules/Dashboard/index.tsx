import React from "react";
import { getSession } from "@auth0/nextjs-auth0";

import prisma from "@/lib/prisma";

import Debts from "./features/Debts";

const Dashboard = async () => {
  const session = await getSession();

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user.email,
    },
  });

  const debts = await prisma.debt.findMany({
    where: {
      user: {
        every: {
          id: user?.id,
        },
      },
    },
  });

  return (
    <div className="px-5">
      <h2 className="font-bold text-xl"> Centro de Control</h2>

      <h3> Debts</h3>
      <Debts debts={[]} />
    </div>
  );
};

export default Dashboard;
