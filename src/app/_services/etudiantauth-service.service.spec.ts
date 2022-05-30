import { TestBed } from '@angular/core/testing';

import { EtudiantauthServiceService } from './etudiantauth-service.service';

describe('EtudiantauthServiceService', () => {
  let service: EtudiantauthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudiantauthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
