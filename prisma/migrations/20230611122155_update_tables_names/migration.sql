/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_Account` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_category_name_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_department_name_fkey";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Department";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "User_Account";

-- CreateTable
CREATE TABLE "user_account" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(64) NOT NULL,
    "last_name" VARCHAR(64) NOT NULL,
    "email" VARCHAR(64) NOT NULL,
    "mobile" INTEGER NOT NULL,
    "address" VARCHAR(64) NOT NULL,

    CONSTRAINT "user_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "department_name" VARCHAR(64) NOT NULL,
    "image" VARCHAR(64) NOT NULL,
    "price" INTEGER NOT NULL,
    "category_name" VARCHAR(64) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "description" VARCHAR(2000) NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "department" (
    "id" INTEGER NOT NULL,
    "label" VARCHAR(64) NOT NULL,
    "department" VARCHAR(64) NOT NULL,
    "image" VARCHAR(64) NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" INTEGER NOT NULL,
    "label" VARCHAR(64) NOT NULL,
    "category" VARCHAR(64) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_account_email_key" ON "user_account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "department_department_key" ON "department"("department");

-- CreateIndex
CREATE UNIQUE INDEX "category_category_key" ON "category"("category");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_department_name_fkey" FOREIGN KEY ("department_name") REFERENCES "department"("department") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_category_name_fkey" FOREIGN KEY ("category_name") REFERENCES "category"("category") ON DELETE CASCADE ON UPDATE CASCADE;
