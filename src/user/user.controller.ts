import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, EditUserDto } from './dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.userService.getOne(id);
    return data;
  }

  @Get()
  async getMany() {
    const data = await this.userService.getMany();
    return {
      data,
    };
  }

  @Post()
  async createOne(@Body() dto: CreateUserDto) {
    const data = await this.userService.createOne(dto);
    return {
      message: ' User created',
      data,
    };
  }

  @Put(':id')
  async editOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: EditUserDto,
  ) {
    const data = await this.userService.editOne(id, dto);
    return {
      message: 'User edited',
      data,
    };
  }

  @Delete(':id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.userService.deleteOne(id);
    return {
      message: 'User deleted',
      data,
    };
  }
}
