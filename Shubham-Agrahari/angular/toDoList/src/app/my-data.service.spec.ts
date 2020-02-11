import { TestBed } from '@angular/core/testing';

import { MyDataService } from './my-data.service';

describe('MyDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyDataService = TestBed.get(MyDataService);
    expect(service).toBeTruthy();
  });
});
