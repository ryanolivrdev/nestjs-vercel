import { ConfigModule } from '@nestjs/config';
import { AccessTokenStrategy } from './strategies/access-token.strategy';
import { UserModule } from '../models/user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';
import { RecoverController } from './recover.controller';
import { RecoverPasswordModule } from '../providers/recover-password/recover-password.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({}),
    UserModule,
    RecoverPasswordModule
  ],
  controllers: [AuthController, RecoverController],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy]
})
export class AuthModule {}
