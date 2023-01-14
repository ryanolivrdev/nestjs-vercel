import { FavoriteModule } from './../../providers/favorite/favorite.module';
import { AccessibilityEntity } from './../accessibility/entities/accessibility.entity';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SuggestionModule } from '../../providers/suggestion/suggestion.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, AccessibilityEntity]),
    forwardRef(() => SuggestionModule),
    forwardRef(() => FavoriteModule)
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
