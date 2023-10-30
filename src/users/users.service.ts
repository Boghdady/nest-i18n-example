import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { MongoIdDto } from './dtos/mongo-id.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findUsers(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async findUserById(id: MongoIdDto): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException(`Not found user ${id}`);
    }
    return user;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const createUser = await this.userModel.create(createUserDto);
    return createUser;
  }

  async updateUser(
    id: MongoIdDto,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    );

    return updatedUser;
  }

  async deleteUser(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id);
  }
}
