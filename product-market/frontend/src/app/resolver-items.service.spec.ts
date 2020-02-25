import { TestBed } from '@angular/core/testing';

import { ResolverItemsService } from './resolver-items.service';

describe('ResolverItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolverItemsService = TestBed.get(ResolverItemsService);
    expect(service).toBeTruthy();
  });
});
