import { IBaseEntity } from '../../base/interfaces/base-entity.interface';
import { IUserEntity } from '../../../models/user/interfaces';

export interface ISuportEntity extends IBaseEntity {
  message: string;
  user: IUserEntity;
}
