import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UsersService {
  saltRounds: number = 8;

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.email = createUserDto.email.toLowerCase();
    createUserDto.password = await bcrypt.hash(
      createUserDto.password,
      this.saltRounds,
    );

    const user = await this.usersRepository.save(createUserDto);
    const tokens = await this.authService.signTokens(user.id, user.email);
    await this.authService.refreshToken(user.id, tokens.refreshToken);
    return tokens;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<User | null> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      return null;
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) {
      throw new Error('User not found');
    }
    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    const deleteResult = await this.usersRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new Error('User not found');
    }
    return deleteResult;
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findOneBy({ email });
  }

  async checkExists(email: string) {
    const user = await this.usersRepository.findOneBy({ email });
    return { exists: !!user };
  }

  safeUser(user: User) {
    const safeUser = JSON.parse(JSON.stringify(user));
    delete safeUser.password;
    return safeUser;
  }
}
