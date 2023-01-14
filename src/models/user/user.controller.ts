import { FavoriteService } from './../../providers/favorite/favorite.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  forwardRef,
  Inject
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetCurrentUserId, Public } from '../../common/decorators';
import { SuggestionService } from '../../providers/suggestion/suggestion.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User Routes')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly favoriteService: FavoriteService,
    private readonly suggestionService: SuggestionService
  ) {}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete('/deleteById/:id')
  removeById(@Param('id') id: string) {
    return this.userService.removeById(id);
  }

  @Get('/suggestion')
  async generateSuggestions(@GetCurrentUserId() userId: string) {
    return await this.suggestionService.generateUserSuggestions(userId);
  }

  @Get('/favorites')
  async getFavorites(@GetCurrentUserId() userId: string) {
    return await this.favoriteService.getUserFavorites(userId);
  }

  @Post('/favorites/:id')
  async favorite(
    @GetCurrentUserId() userId: string,
    @Param('id') establishmentId: string
  ) {
    return await this.favoriteService.favorite(userId, establishmentId);
  }

  @Delete('/favorites/:id')
  async unfavorite(
    @GetCurrentUserId() userId: string,
    @Param('id') establishmentId: string
  ) {
    return await this.favoriteService.unfavorite(userId, establishmentId);
  }
}
