import { TestBed } from '@angular/core/testing';

import { MovieserviceService } from './movieservice.service';

describe('MovieserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieserviceService = TestBed.get(MovieserviceService);
    expect(service).toBeTruthy();
  });
});
