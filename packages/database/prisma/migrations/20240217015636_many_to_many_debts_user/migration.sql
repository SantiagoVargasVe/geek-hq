/*
  Warnings:

  - You are about to drop the column `user_id` on the `debts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "debts" DROP CONSTRAINT "debts_user_id_fkey";

-- AlterTable
ALTER TABLE "debts" DROP COLUMN "user_id";

-- CreateTable
CREATE TABLE "_DebtToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DebtToUser_AB_unique" ON "_DebtToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DebtToUser_B_index" ON "_DebtToUser"("B");

-- AddForeignKey
ALTER TABLE "_DebtToUser" ADD CONSTRAINT "_DebtToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "debts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DebtToUser" ADD CONSTRAINT "_DebtToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
