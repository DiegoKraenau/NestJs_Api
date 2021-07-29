import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos';
import { User } from './entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getMany() {
    return await this.userRepository.find();
  }

  async getOne(id: number) {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async createOne(dto: CreateUserDto) {
    const newUser = this.userRepository.create(dto);
    return await this.userRepository.save(newUser);
  }

  async editOne(id: number) {
    // const user = await this.userRepository.findOne(id);
  }

  async deleteOne() {}
}
