import { TestBed, inject } from '@angular/core/testing';

import { EditalService } from './edital.service';

describe('EditalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditalService]
    });
  });

  it('should be created', inject([EditalService], (service: EditalService) => {
    expect(service).toBeTruthy();
  }));
});
