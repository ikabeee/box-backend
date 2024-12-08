import { Injectable } from '@nestjs/common';
import { CreateMisteryBoxDto } from './dto/create-mistery-box.dto';
import { UpdateMisteryBoxDto } from './dto/update-mistery-box.dto';

@Injectable()
export class MisteryBoxesService {
  create(createMisteryBoxDto: CreateMisteryBoxDto) {
    return 'This action adds a new misteryBox';
  }

  findAll() {
    return `This action returns all misteryBoxes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} misteryBox`;
  }

  update(id: number, updateMisteryBoxDto: UpdateMisteryBoxDto) {
    return `This action updates a #${id} misteryBox`;
  }

  remove(id: number) {
    return `This action removes a #${id} misteryBox`;
  }
}
