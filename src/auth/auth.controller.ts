import { CreateUserDto } from './../models/user/dto/create-user.dto';
import { RefreshTokenGuard } from './../common/guards/refresh-token.guard';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards
} from '@nestjs/common';
import { Tokens } from './@types/tokens.type';
import {
  Public,
  GetCurrentUserId,
  GetCurrentUser
} from 'src/common/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth Routes')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('local/signup')
  @HttpCode(HttpStatus.CREATED)
  signup_local(@Body() createUserDto: CreateUserDto): Promise<Tokens> {
    return this.authService.signup_local(createUserDto);
  }

  @Public()
  @Post('local/signin')
  @HttpCode(HttpStatus.OK)
  signin_local(@Body() authDto: AuthDto): Promise<Tokens> {
    return this.authService.signin_local(authDto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentUserId() userId: string) {
    return this.authService.logout(userId);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refresh_token(
    @GetCurrentUserId() userId: string,
    @GetCurrentUser('refreshToken') refreshToken: string
  ) {
    return this.authService.updateRefreshToken(userId, refreshToken);
  }
}
