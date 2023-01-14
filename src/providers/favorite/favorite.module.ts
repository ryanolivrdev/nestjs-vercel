import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { EstablishmentEntity } from '../../models/establishment/entities/establishment.entity';
import { UserEntity } from '../../models/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, EstablishmentEntity])],
  providers: [FavoriteService],
  exports: [FavoriteService]
})
export class FavoriteModule {}
