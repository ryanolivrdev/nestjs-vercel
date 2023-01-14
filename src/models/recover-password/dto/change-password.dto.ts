import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { HttpCustomMessages } from '../../../common/helpers/exceptions/messages/index.messages';

export class ChangePasswordDto {
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.EMAIL.INVALID })
  @IsString({ message: HttpCustomMessages.VALIDATION.EMAIL.INVALID })
  @IsEmail({ message: HttpCustomMessages.VALIDATION.EMAIL.REQUIRED })
  email: string;

  @IsString({ message: HttpCustomMessages.VALIDATION.PASSWORD.INVALID })
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.PASSWORD.REQUIRED })
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
    message: HttpCustomMessages.VALIDATION.PASSWORD.WEAK
  })
  password: string;
}
