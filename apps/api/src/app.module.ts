import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user/user.module";
import { PlaygroundModule } from "./modules/playground/playground.module";
import { DiagramModule } from "./modules/diagram/diagram.module";

@Module({
  imports: [UserModule, PlaygroundModule, DiagramModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
