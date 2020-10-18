import { TestBed } from '@angular/core/testing';

import { MisArtefactosService } from './mis-artefactos.service';

describe('MisArtefactosService', () => {
  let service: MisArtefactosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisArtefactosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
