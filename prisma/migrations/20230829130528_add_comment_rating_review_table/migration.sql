/*
  Warnings:

  - Added the required column `comment` to the `review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE review_id_seq;
ALTER TABLE "review" ADD COLUMN     "comment" VARCHAR(500) NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('review_id_seq');
ALTER SEQUENCE review_id_seq OWNED BY "review"."id";
