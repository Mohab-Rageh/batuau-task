// src/app.module.ts

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config"; // Import ConfigModule
import { MovieModule } from "./modules/movies/movies.module";
import { PrismaModule } from "./modules/prisma/prisma.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MovieModule,
    PrismaModule,
  ],
})
export class AppModule {}
