import { UserEntity } from '../../models/user/entities/user.entity';
import { ReviewEntity } from './entities/review.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewEntity, UserEntity])],
  controllers: [ReviewController],
  providers: [ReviewService],
  exports: [ReviewService]
})
export class ReviewModule {}
