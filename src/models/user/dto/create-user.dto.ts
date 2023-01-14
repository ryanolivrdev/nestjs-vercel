import { HttpCustomMessages } from './../../../common/helpers/exceptions/messages/index.messages';
import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  Matches,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAccessibilityDto } from '../../../models/accessibility/dto/create-accessibility.dto';
import { EstablishmentEntity } from '../../../models/establishment/entities/establishment.entity';

export class CreateUserDto {
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

  @IsString({ message: HttpCustomMessages.VALIDATION.NAME.INVALID })
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.NAME.REQUIRED })
  name: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateAccessibilityDto)
  accessibilities: CreateAccessibilityDto;

  hashedRefreshToken: string | null;
  favorites: null | EstablishmentEntity[];
}
