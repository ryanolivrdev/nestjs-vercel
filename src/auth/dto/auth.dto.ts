import { IsEmail, MinLength, IsString, IsNotEmpty } from 'class-validator';

export class AuthDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  password: string;
}
