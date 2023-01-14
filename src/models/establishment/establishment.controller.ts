import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { CreateEstablishmentDto } from './dto/create-establishment.dto';
import { UpdateEstablishmentDto } from './dto/update-establishment.dto';
import { Public } from '../../common/decorators/index';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Establishment Routes')
@Public()
@Controller('establishment')
export class EstablishmentController {
  constructor(private readonly establishmentService: EstablishmentService) {}

  @Post()
  async create(@Body() createEstablishmentDto: CreateEstablishmentDto) {
    return await this.establishmentService.create(createEstablishmentDto);
  }

  @Get()
  findAll() {
    return this.establishmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.establishmentService.findOneOrFail({ where: { id } });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEstablishmentDto: UpdateEstablishmentDto
  ) {
    return this.establishmentService.update(id, updateEstablishmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.establishmentService.remove(id);
  }
}
