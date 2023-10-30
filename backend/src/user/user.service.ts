import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
) {}

  async createUser(user : User ) {

    await this.userRepository.save(user);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUser(userid: number): Promise<User> {
    return await this.userRepository.findOne({where: {userid}});
  }

  async updateUser(userid: number, user: User): Promise<User> {
    const updatedUser = this.userRepository.findOne({where: {userid}});
        if (!updatedUser) {
            throw new NotFoundException(' is not found');
        }
        (await updatedUser).firstname = user.firstname;
        (await updatedUser).lastname = user.lastname;
        (await updatedUser).username = user.username;
        (await updatedUser).email = user.email;
        (await updatedUser).password = user.password;
        (await updatedUser).phoneNumber = user.phoneNumber;
        await (await updatedUser).save();
        console.log('From service:',updatedUser);
        return updatedUser;
  }

  async deleteUser(userid: number): Promise<void> {
    await this.userRepository.delete(userid);
  }
}