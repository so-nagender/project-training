import { TestBed } from '@angular/core/testing';

import { CatresolverService } from './catresolver.service';

describe('CatresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatresolverService = TestBed.get(CatresolverService);
    expect(service).toBeTruthy();
  });
});
