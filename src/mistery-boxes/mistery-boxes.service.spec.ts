import { Test, TestingModule } from '@nestjs/testing';
import { MisteryBoxesService } from './mistery-boxes.service';

describe('MisteryBoxesService', () => {
  let service: MisteryBoxesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MisteryBoxesService],
    }).compile();

    service = module.get<MisteryBoxesService>(MisteryBoxesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
