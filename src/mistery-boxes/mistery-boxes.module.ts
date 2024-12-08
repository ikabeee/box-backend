import { Module } from '@nestjs/common';
import { MisteryBoxesService } from './mistery-boxes.service';
import { MisteryBoxesController } from './mistery-boxes.controller';

@Module({
  controllers: [MisteryBoxesController],
  providers: [MisteryBoxesService],
})
export class MisteryBoxesModule {}
