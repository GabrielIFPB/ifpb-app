import { TestBed, inject } from '@angular/core/testing';

import { RefeicaoService } from './refeicao.service';

describe('RefeicaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefeicaoService]
    });
  });

  it('should be created', inject([RefeicaoService], (service: RefeicaoService) => {
    expect(service).toBeTruthy();
  }));
});
