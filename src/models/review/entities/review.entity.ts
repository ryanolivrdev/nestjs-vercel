import { UserEntity } from '../../../models/user/entities/user.entity';
import { IReviewEntity } from '../interfaces/review.interface';
import { BaseEntity } from '../../../models/base/entities/base-entity.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
@Entity({ name: 'review' })
export class ReviewEntity extends BaseEntity implements IReviewEntity {
  @ManyToOne(() => UserEntity, (user) => user.reviews, { onDelete: 'CASCADE' })
  user: UserEntity;

  @Column()
  grade: number;

  @Column()
  comment: string;
}
