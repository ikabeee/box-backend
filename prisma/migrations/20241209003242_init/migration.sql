/*
  Warnings:

  - Added the required column `totalPrice` to the `Cart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stripePaymentId` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "totalPrice" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "stripePaymentId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "CartItem" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "totalPrice" DOUBLE PRECISION,
    "misteryBoxId" INTEGER NOT NULL,
    "cartId" INTEGER NOT NULL,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_misteryBoxId_fkey" FOREIGN KEY ("misteryBoxId") REFERENCES "MisteryBoxes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
