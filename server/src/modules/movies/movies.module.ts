// src/prisma/prisma.module.ts

import { Module } from "@nestjs/common";
import { MovieService } from "./movies.service";
import { MovieController } from "./movies.controller";

@Module({
  providers: [MovieService],
  controllers: [MovieController],
  exports: [MovieService],
})
export class MovieModule {}
