// src/app.module.ts

import { Module } from "@nestjs/common";
import { MovieModule } from "./modules/movies/movies.module";

@Module({
  imports: [MovieModule],
})
export class AppModule {}
