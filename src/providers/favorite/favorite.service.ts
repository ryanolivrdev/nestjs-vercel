import { Injectable } from '@nestjs/common';
import { FavoriteException } from '../../common/exceptions/favorite.exception';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../models/user/entities/user.entity';
import { EstablishmentEntity } from '../../models/establishment/entities/establishment.entity';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(EstablishmentEntity)
    private readonly establishmentRepository: Repository<EstablishmentEntity>
  ) {}

  async getUserFavorites(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['favorites']
    });

    return user.favorites;
  }

  async favorite(id: string, establishmentId: string) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['favorites']
    });

    const establishment = await this.establishmentRepository.findOne({
      where: {
        id: establishmentId
      }
    });
    if (user.favorites.indexOf(establishment) !== -1)
      throw new FavoriteException('Estabelecimento já foi favoritado.');

    this.userRepository.merge(user, {
      favorites: [...user.favorites, establishment]
    });
    return await this.userRepository.save(user);
  }

  async unfavorite(id: string, establishmentId: string) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['favorites']
    });

    const establishment = await this.establishmentRepository.findOne({
      where: {
        id: establishmentId
      }
    });
    user.favorites.splice(user.favorites.indexOf(establishment), 1);
    await this.establishmentRepository.save(establishment);
    return await this.userRepository.save(user);
  }
}
