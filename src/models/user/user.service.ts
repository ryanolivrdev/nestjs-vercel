import { AccessibilityEntity } from './../accessibility/entities/accessibility.entity';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { hash } from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(AccessibilityEntity)
    private accessibilityRepository: Repository<AccessibilityEntity>
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      createUserDto.password = await hash(createUserDto.password);
      const user = this.usersRepository.create(createUserDto);
      const accessibility = this.accessibilityRepository.create(
        createUserDto.accessibilities
      );
      user.accessibilities = accessibility;
      accessibility.user = user;
      await this.accessibilityRepository.save(accessibility);
      const saved = await this.usersRepository.save(user);
      delete saved.password;
      return saved;
    } catch (error) {
      throw new UnauthorizedException('E-mail already in use. Try to login');
    }
  }

  async findAll() {
    return await this.usersRepository.find({
      relations: ['reviews', 'accessibilities'],
      select: {
        email: true,
        id: true,
        name: true,
        reviews: {
          comment: true,
          grade: true,
          id: true
        },
        suports: {
          id: true,
          createdAt: true,
          message: true
        }
      }
    });
  }

  async findOneById(id: string) {
    return await this.usersRepository.findOne({
      where: {
        id
      },
      relations: ['reviews', 'accessibilities', 'suports', 'favorites']
    });
  }

  async findOneByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: {
        email
      },
      relations: ['reviews', 'accessibilities', 'suports', 'favorites']
    });
  }

  async findOneOrFail(options: FindOneOptions<UserEntity>) {
    try {
      return await this.usersRepository.findOneOrFail({
        ...options,
        relations: ['reviews', 'accessibilities', 'suports', 'favorites']
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await hash(updateUserDto.password);
    }
    const user = await this.findOneOrFail({ where: { id } });
    this.usersRepository.merge(user, updateUserDto);
    return await this.usersRepository.save(user);
  }

  async removeById(id: string) {
    return await this.usersRepository.delete({ id });
  }

  async removeByEmail(email: string) {
    return await this.usersRepository.delete({ email });
  }
}
