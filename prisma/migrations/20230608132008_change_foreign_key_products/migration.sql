/*
  Warnings:

  - You are about to drop the column `category_id` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `department_id` on the `products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[category]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[department]` on the table `departments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category_name` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department_name` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_category_id_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_department_id_fkey";

-- AlterTable
ALTER TABLE "products" DROP COLUMN "category_id",
DROP COLUMN "department_id",
ADD COLUMN     "category_name" VARCHAR(64) NOT NULL,
ADD COLUMN     "department_name" VARCHAR(64) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "categories_category_key" ON "categories"("category");

-- CreateIndex
CREATE UNIQUE INDEX "departments_department_key" ON "departments"("department");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_department_name_fkey" FOREIGN KEY ("department_name") REFERENCES "departments"("department") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_name_fkey" FOREIGN KEY ("category_name") REFERENCES "categories"("category") ON DELETE CASCADE ON UPDATE CASCADE;
