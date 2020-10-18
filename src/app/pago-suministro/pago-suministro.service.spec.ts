import { TestBed } from '@angular/core/testing';

import { PagoSuministroService } from './pago-suministro.service';

describe('PagoSuministroService', () => {
  let service: PagoSuministroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoSuministroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
