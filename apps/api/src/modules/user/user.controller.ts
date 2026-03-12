import { Body, Controller, Post, Get, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { JwtAuthGuard } from "../auth/jwt-auth/jwt-auth.guard";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto.email, dto.name);
  }

  @Get("me")
  @UseGuards(JwtAuthGuard)
  me() {
    return { message: "protected route" };
  }
}
