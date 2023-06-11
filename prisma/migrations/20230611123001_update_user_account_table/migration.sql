/*
  Warnings:

  - Added the required column `password` to the `user_account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_account" ADD COLUMN     "password" VARCHAR(128) NOT NULL;
