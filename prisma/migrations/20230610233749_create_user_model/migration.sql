/*
  Warnings:

  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `departments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_category_name_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_department_name_fkey";

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "departments";

-- DropTable
DROP TABLE "products";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(64) NOT NULL,
    "last_name" VARCHAR(64) NOT NULL,
    "email" VARCHAR(64) NOT NULL,
    "mobile" INTEGER NOT NULL,
    "address" VARCHAR(64) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "department_name" VARCHAR(64) NOT NULL,
    "image" VARCHAR(64) NOT NULL,
    "price" INTEGER NOT NULL,
    "category_name" VARCHAR(64) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "description" VARCHAR(2000) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" INTEGER NOT NULL,
    "label" VARCHAR(64) NOT NULL,
    "department" VARCHAR(64) NOT NULL,
    "image" VARCHAR(64) NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL,
    "label" VARCHAR(64) NOT NULL,
    "category" VARCHAR(64) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Department_department_key" ON "Department"("department");

-- CreateIndex
CREATE UNIQUE INDEX "Category_category_key" ON "Category"("category");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_department_name_fkey" FOREIGN KEY ("department_name") REFERENCES "Department"("department") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_name_fkey" FOREIGN KEY ("category_name") REFERENCES "Category"("category") ON DELETE CASCADE ON UPDATE CASCADE;
