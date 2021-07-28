import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto } from './dtos';

@Controller('post')
export class PostController {
  @Get()
  getMany() {
    return 'Ok';
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      message: id,
    };
  }

  @Post()
  cretaeOne(@Body() dto: CreatePostDto) {
    return dto;
  }

  @Put()
  editOne() {}

  @Delete(':id')
  deleteOne(@Param('id') id: string) {}
}
