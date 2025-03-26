-- CreateTable
CREATE TABLE "recommendations" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "requestId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recommendations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recommendedCrop" (
    "id" TEXT NOT NULL,
    "commodity" TEXT NOT NULL,
    "profitability" INTEGER NOT NULL,
    "fertilizerCost" TEXT NOT NULL,
    "compatibility" TEXT NOT NULL,
    "nitrogen" TEXT NOT NULL,
    "phosphorus" TEXT NOT NULL,
    "potassium" TEXT NOT NULL,
    "magnessium" TEXT NOT NULL,
    "calcium" TEXT NOT NULL,
    "recommendationId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "recommendedCrop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "soilReport" (
    "id" TEXT NOT NULL,
    "n" DOUBLE PRECISION NOT NULL,
    "p" DOUBLE PRECISION NOT NULL,
    "k" DOUBLE PRECISION NOT NULL,
    "mg" DOUBLE PRECISION NOT NULL,
    "calcium" DOUBLE PRECISION NOT NULL,
    "ph" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "soilReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreviousCrop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "soilReportId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PreviousCrop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "recommendations_requestId_key" ON "recommendations"("requestId");

-- AddForeignKey
ALTER TABLE "recommendedCrop" ADD CONSTRAINT "recommendedCrop_recommendationId_fkey" FOREIGN KEY ("recommendationId") REFERENCES "recommendations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PreviousCrop" ADD CONSTRAINT "PreviousCrop_soilReportId_fkey" FOREIGN KEY ("soilReportId") REFERENCES "soilReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
