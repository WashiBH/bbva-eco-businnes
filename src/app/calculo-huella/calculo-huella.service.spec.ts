import { TestBed } from '@angular/core/testing';

import { CalculoHuellaService } from './calculo-huella.service';

describe('CalculoHuellaService', () => {
  let service: CalculoHuellaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculoHuellaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
