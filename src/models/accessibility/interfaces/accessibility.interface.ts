import { IBaseEntity } from '../../../models/base/interfaces/base-entity.interface';
import { IEstablishmentEntity } from '../../../models/establishment/interfaces/establishment.interface';
import { IUserEntity } from '../../../models/user/interfaces';

export interface IAccessibilityEntity extends IBaseEntity {
  user: IUserEntity | null;
  establishment: IEstablishmentEntity | null;
  elevator: boolean;
  bar: boolean;
  uneeveness: boolean;
  incompatible_dimensions: boolean;
  sign_language: boolean;
  tactile_floor: boolean;
  braille: boolean;
}
