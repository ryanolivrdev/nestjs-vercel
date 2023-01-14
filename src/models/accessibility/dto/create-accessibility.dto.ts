import { IsBoolean } from 'class-validator';

export class CreateAccessibilityDto {
  @IsBoolean()
  elevator: boolean;
  @IsBoolean()
  bar: boolean;
  @IsBoolean()
  uneeveness: boolean;
  @IsBoolean()
  incompatible_dimensions: boolean;
  @IsBoolean()
  sign_language: boolean;
  @IsBoolean()
  tactile_floor: boolean;
  @IsBoolean()
  braille: boolean;
}
