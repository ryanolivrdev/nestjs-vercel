import { CreateSuportDto } from './dto/create-suport.dto';
import { SuportService } from './suport.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus
} from '@nestjs/common';
import { GetCurrentUserId } from '../../common/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Support Routes')
@Controller('suport')
export class SuportController {
  constructor(private readonly suportService: SuportService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @GetCurrentUserId() userId: string,
    @Body() createSuportDto: CreateSuportDto
  ) {
    return await this.suportService.create(userId, createSuportDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suportService.findOneOrFail({ where: { id } });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suportService.remove(id);
  }
}
