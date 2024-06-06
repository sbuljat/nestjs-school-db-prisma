import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':username')
  async getUserByUsername(@Param('username') username: string) {
    const user = await this.userService.getByUsername(username);
    if (!user) {
      throw new NotFoundException('Invalid user');
    }
    return user;
  }

  @Post()
  async createUser(
    @Body()
    data: {
      username: string;
      password: string;
      name?: string;
      roles: string[];
    },
  ): Promise<User> {
    return this.userService.create(data);
  }

  @Delete(':username')
  async deleteUser(@Param('username') username: string): Promise<User> {
    return this.userService.delete(username);
  }
}
