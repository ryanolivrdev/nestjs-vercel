import { PartialType } from '@nestjs/mapped-types';
import { CreateAccessibilityDto } from './create-accessibility.dto';

export class UpdateAccessibilityDto extends PartialType(
  CreateAccessibilityDto
) {}
