import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MisteryBoxesService } from './mistery-boxes.service';
import { CreateMisteryBoxDto } from './dto/create-mistery-box.dto';
import { UpdateMisteryBoxDto } from './dto/update-mistery-box.dto';

@Controller('mistery-boxes')
export class MisteryBoxesController {
  constructor(private readonly misteryBoxesService: MisteryBoxesService) {}

  @Post()
  create(@Body() createMisteryBoxDto: CreateMisteryBoxDto) {
    return this.misteryBoxesService.create(createMisteryBoxDto);
  }

  @Get()
  findAll() {
    return this.misteryBoxesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.misteryBoxesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMisteryBoxDto: UpdateMisteryBoxDto) {
    return this.misteryBoxesService.update(+id, updateMisteryBoxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.misteryBoxesService.remove(+id);
  }
}
