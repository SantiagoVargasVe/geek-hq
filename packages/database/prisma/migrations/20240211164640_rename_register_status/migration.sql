/*
  Warnings:

  - You are about to drop the column `registerStatus` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "registerStatus",
ADD COLUMN     "register_status" "RegisterStatus" DEFAULT 'UNREGISTERED';
