import { TestBed, inject } from '@angular/core/testing';

import { DiarefeicaoService } from './diarefeicao.service';

describe('DiarefeicaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiarefeicaoService]
    });
  });

  it('should be created', inject([DiarefeicaoService], (service: DiarefeicaoService) => {
    expect(service).toBeTruthy();
  }));
});
