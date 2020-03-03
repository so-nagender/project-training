import { TestBed } from '@angular/core/testing';

import { ResolverWelcomeService } from './resolver-welcome.service';

describe('ResolverWelcomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolverWelcomeService = TestBed.get(ResolverWelcomeService);
    expect(service).toBeTruthy();
  });
});
