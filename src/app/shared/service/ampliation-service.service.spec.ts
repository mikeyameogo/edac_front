import { TestBed } from '@angular/core/testing';

import { AmpliationServiceService } from './ampliation-service.service';

describe('AmpliationServiceService', () => {
  let service: AmpliationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmpliationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
