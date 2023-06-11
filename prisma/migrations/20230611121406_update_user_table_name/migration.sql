/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "User_Account" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(64) NOT NULL,
    "last_name" VARCHAR(64) NOT NULL,
    "email" VARCHAR(64) NOT NULL,
    "mobile" INTEGER NOT NULL,
    "address" VARCHAR(64) NOT NULL,

    CONSTRAINT "User_Account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Account_email_key" ON "User_Account"("email");
