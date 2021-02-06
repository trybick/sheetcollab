/*
  Warnings:

  - You are about to drop the column `userId` on the `Sheet` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_SheetToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Sheet" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sheet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "artist" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "year" TEXT
);
INSERT INTO "new_Sheet" ("id", "updatedAt", "createdAt", "title", "artist", "year") SELECT "id", "updatedAt", "createdAt", "title", "artist", "year" FROM "Sheet";
DROP TABLE "Sheet";
ALTER TABLE "new_Sheet" RENAME TO "Sheet";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_SheetToUser_AB_unique" ON "_SheetToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_SheetToUser_B_index" ON "_SheetToUser"("B");
