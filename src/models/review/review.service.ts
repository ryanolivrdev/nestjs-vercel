import { UserService } from '../../models/user/user.service';
import { UserEntity } from '../../models/user/entities/user.entity';
import { ReviewEntity } from './entities/review.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewEntity)
    private reviewsRepository: Repository<ReviewEntity>
  ) {}

  async create(userId: string, createReviewDto: CreateReviewDto) {
    try {
      const review = this.reviewsRepository.create({
        user: userId as unknown as UserEntity, // O proprio typeorm converte o id para a entidade de usuario por causa da configuração da relação la na entidade
        ...createReviewDto
      });
      await this.reviewsRepository.save(review);
      return review;
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    return await this.reviewsRepository.find({
      relations: {
        user: true
      },
      select: {
        user: {
          id: true,
          email: true,
          name: true
        }
      }
    });
  }

  async findOneOrFail(options: FindOneOptions<ReviewEntity>) {
    try {
      return await this.reviewsRepository.findOneOrFail({
        ...options,
        relations: {
          user: true
        },
        select: {
          user: {
            id: true,
            email: true,
            name: true
          }
        }
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async remove(id: string) {
    await this.findOneOrFail({
      where: { id }
    });
    await this.reviewsRepository.delete({ id });
    return;
  }
}
