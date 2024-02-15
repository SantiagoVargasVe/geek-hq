-- CreateEnum
CREATE TYPE "RegisterStatus" AS ENUM ('REGISTERED', 'UNREGISTERED');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "registerStatus" "RegisterStatus" NOT NULL DEFAULT 'UNREGISTERED';
