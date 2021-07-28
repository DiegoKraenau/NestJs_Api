import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dtos';

@Injectable()
export class PostService {
  getMany() {
    return {
      ok: 'GetMany',
    };
  }
  getOne(id: number) {
    return {
      ok: 'GetOne',
    };
  }
  editOne(id: number) {
    return {
      ok: 'DeleteOne',
    };
  }
  deleteOne(id: number) {
    return {
      ok: 'DeleteOne',
    };
  }

  createOne(dto: CreatePostDto) {
    return {
      ok: 'CreateOne',
    };
  }
}
