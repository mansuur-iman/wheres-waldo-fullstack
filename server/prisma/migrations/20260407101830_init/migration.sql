/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `x` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `y` on the `Character` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,fieldId]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fieldId` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `xMax` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `xMin` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yMax` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yMin` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "createdAt",
DROP COLUMN "x",
DROP COLUMN "y",
ADD COLUMN     "fieldId" TEXT NOT NULL,
ADD COLUMN     "xMax" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "xMin" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "yMax" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "yMin" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "order" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "UserFieldProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,
    "currentImageId" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "foundCharacters" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "UserFieldProgress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserFieldProgress_currentImageId_idx" ON "UserFieldProgress"("currentImageId");

-- CreateIndex
CREATE UNIQUE INDEX "UserFieldProgress_userId_fieldId_key" ON "UserFieldProgress"("userId", "fieldId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_name_fieldId_key" ON "Character"("name", "fieldId");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFieldProgress" ADD CONSTRAINT "UserFieldProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFieldProgress" ADD CONSTRAINT "UserFieldProgress_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFieldProgress" ADD CONSTRAINT "UserFieldProgress_currentImageId_fkey" FOREIGN KEY ("currentImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
