import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";

import { UserModule } from "./modules/user/user.module";
import { PlaygroundModule } from "./modules/playground/playground.module";
import { DiagramModule } from "./modules/diagram/diagram.module";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    UserModule,
    PlaygroundModule,
    DiagramModule,
    PrismaModule,
  ],
})
export class AppModule {}
