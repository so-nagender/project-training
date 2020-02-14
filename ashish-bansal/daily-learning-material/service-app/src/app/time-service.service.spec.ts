import { TestBed } from '@angular/core/testing';

import { TimeServiceService } from './time-service.service';

describe('TimeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeServiceService = TestBed.get(TimeServiceService);
    expect(service).toBeTruthy();
  });
});
