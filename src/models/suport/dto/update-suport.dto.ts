import { PartialType } from '@nestjs/mapped-types';
import { CreateSuportDto } from './create-suport.dto';

export class UpdateSuportDto extends PartialType(CreateSuportDto) {}
