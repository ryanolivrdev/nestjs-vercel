import { IUserEntity } from '../../../models/user/interfaces';
import { IBaseEntity } from './../../base/interfaces/base-entity.interface';

export interface IReviewEntity extends IBaseEntity {
  user: IUserEntity;
  grade: number;
  comment: string;
  // TODO: establishmentId: string
}
