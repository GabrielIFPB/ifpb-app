import { TestBed, inject } from '@angular/core/testing';

import { DiaRefeicaoService } from './diarefeicao.service';

describe('DiarefeicaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiaRefeicaoService]
    });
  });

  it('should be created', inject([DiaRefeicaoService], (service: DiaRefeicaoService) => {
    expect(service).toBeTruthy();
  }));
});
