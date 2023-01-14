import { IBaseEntity } from '../../../models/base/interfaces/base-entity.interface';
import { IUserEntity } from '../../../models/user/interfaces';
import { IAccessibilityEntity } from '../../accessibility/interfaces/accessibility.interface';

export interface IEstablishmentEntity extends IBaseEntity {
  accessibilities: IAccessibilityEntity;
  favoritedBy: IUserEntity[];
  name: string;
  price: number;
  category: string;
  website?: string;
  address?: string;
  ground_floor_room: boolean;
  latitude: number;
  longitude: number;
  cover_photo?: string;
  room_photo?: string[];
  landline: string;
  whatsapp?: string;
}
