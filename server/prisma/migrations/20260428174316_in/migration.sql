/*
  Warnings:

  - A unique constraint covering the columns `[userId,fieldId]` on the table `LeaderBoard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LeaderBoard_userId_fieldId_key" ON "LeaderBoard"("userId", "fieldId");
