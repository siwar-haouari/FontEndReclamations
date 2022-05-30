import { TestBed } from '@angular/core/testing';

import { PedagogiqueService } from './pedagogique.service';

describe('PedagogiqueService', () => {
  let service: PedagogiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedagogiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
