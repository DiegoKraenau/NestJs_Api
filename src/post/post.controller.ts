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
import { CreatePostDto, EditPostDto } from './dtos';

@Controller('post')
export class PostController {
  @Get()
  getMany() {
    return 'Ok';
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return {
      message: id,
    };
  }

  @Post()
  cretaeOne(@Body() dto: CreatePostDto) {
    return dto;
  }

  @Put(':id')
  editOne(@Param('id', ParseIntPipe) id: number, @Body() dto: EditPostDto) {
    return dto;
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {}
}
