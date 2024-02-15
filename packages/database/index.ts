// export * from "@prisma/client/edge";

import { PrismaClient, User } from "@prisma/client";

import { PrismaClient as EdgePrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const prismaEdge = new EdgePrismaClient().$extends(withAccelerate());

export { PrismaClient };

export { prismaEdge as PrismaClientEdge };

export type { User };
