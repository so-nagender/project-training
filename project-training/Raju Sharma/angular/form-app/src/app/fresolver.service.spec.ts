import { TestBed } from '@angular/core/testing';

import { FresolverService } from './fresolver.service';

describe('FresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FresolverService = TestBed.get(FresolverService);
    expect(service).toBeTruthy();
  });
});
