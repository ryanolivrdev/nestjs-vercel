import { AccessibilityEntity } from '../../../models/accessibility/entities/accessibility.entity';
import { Column, Entity, JoinColumn, ManyToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../../base/entities/base-entity.entity';
import { IEstablishmentEntity } from '../interfaces/establishment.interface';
import { UserEntity } from '../../user/entities/user.entity';

@Entity({ name: 'establishments' })
export class EstablishmentEntity
  extends BaseEntity
  implements IEstablishmentEntity
{
  @OneToOne(
    () => AccessibilityEntity,
    (accessibilities) => accessibilities.establishment,
    {
      cascade: true
    }
  )
  @JoinColumn({ name: 'accessibility_id' })
  accessibilities: AccessibilityEntity;

  @ManyToMany(() => UserEntity, (user) => user.favorites)
  favoritedBy: UserEntity[];

  @Column()
  name: string;

  @Column({ type: 'float' })
  price: number;

  @Column()
  category: string;

  @Column({ default: '' })
  website?: string;

  @Column()
  address: string;

  @Column()
  ground_floor_room: boolean;

  @Column({ nullable: true })
  latitude: number;

  @Column({ nullable: true })
  longitude: number;

  @Column()
  cover_photo: string;

  @Column('text', { array: true, default: [] })
  room_photos?: string[];

  @Column()
  landline: string;

  @Column({ default: '' })
  whatsapp?: string;
}
