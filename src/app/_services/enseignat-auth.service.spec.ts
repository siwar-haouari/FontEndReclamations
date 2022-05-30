import { TestBed } from '@angular/core/testing';

import { EnseignatAuthService } from './enseignat-auth.service';

describe('EnseignatAuthService', () => {
  let service: EnseignatAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnseignatAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
