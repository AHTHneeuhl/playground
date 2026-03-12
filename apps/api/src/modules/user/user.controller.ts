import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() body: { email: string; name?: string }) {
    return this.userService.createUser(body.email, body.name);
  }
}
