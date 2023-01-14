import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min
} from 'class-validator';
import { HttpCustomMessages } from '../../../common/helpers/exceptions/messages/index.messages';

export class ConfirmTokenDto {
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.EMAIL.INVALID })
  @IsString({ message: HttpCustomMessages.VALIDATION.EMAIL.INVALID })
  @IsEmail({ message: HttpCustomMessages.VALIDATION.EMAIL.REQUIRED })
  email: string;

  @IsNumber()
  @Min(0)
  @Max(9999999)
  token: number;
}
