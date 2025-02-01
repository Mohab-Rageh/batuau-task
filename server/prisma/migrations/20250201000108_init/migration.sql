-- CreateTable

CREATE TABLE "Movie" ("id" SERIAL NOT NULL,
                                  "title" TEXT NOT NULL,
                                               "poster" TEXT , "year" TEXT NOT NULL,
                                                                           "isFave" BOOLEAN NOT NULL DEFAULT true,
                                                                                                             "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                                                                                                                                       "updatedAt" TIMESTAMP(3) NOT NULL,
                                                                                                                                                                                CONSTRAINT "Movie_pkey" PRIMARY KEY ("id"));

