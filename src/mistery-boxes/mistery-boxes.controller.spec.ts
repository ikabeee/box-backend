import { Test, TestingModule } from '@nestjs/testing';
import { MisteryBoxesController } from './mistery-boxes.controller';
import { MisteryBoxesService } from './mistery-boxes.service';

describe('MisteryBoxesController', () => {
  let controller: MisteryBoxesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MisteryBoxesController],
      providers: [MisteryBoxesService],
    }).compile();

    controller = module.get<MisteryBoxesController>(MisteryBoxesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
