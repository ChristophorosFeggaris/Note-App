import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: User) {
    return await this.userService.createUser(user);
  }

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) userid: number) {
    return this.userService.getUser(userid);
  }

  @Patch(':id')
  async updateUser(@Param('id') userid: number, @Body() user:User) {
    return await this.userService.updateUser(userid, user);
  }

  @Delete(':id')
  async removeUser(@Param('id') userid: number) {
    return await this.userService.deleteUser(userid);
  }
}
