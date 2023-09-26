-- CreateTable
CREATE TABLE "Subscription" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nameId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_nameId_key" ON "Subscription"("nameId");
