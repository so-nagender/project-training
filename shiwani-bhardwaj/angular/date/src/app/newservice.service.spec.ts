import { TestBed } from '@angular/core/testing';

import { NewserviceService } from './newservice.service';

describe('NewserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewserviceService = TestBed.get(NewserviceService);
    expect(service).toBeTruthy();
  });
});
