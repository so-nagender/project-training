import { TestBed } from '@angular/core/testing';

import { DateseriveService } from './dateserive.service';

describe('DateseriveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateseriveService = TestBed.get(DateseriveService);
    expect(service).toBeTruthy();
  });
});
