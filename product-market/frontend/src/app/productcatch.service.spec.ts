import { TestBed } from '@angular/core/testing';

import { ProductcatchService } from './productcatch.service';

describe('ProductcatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductcatchService = TestBed.get(ProductcatchService);
    expect(service).toBeTruthy();
  });
});
