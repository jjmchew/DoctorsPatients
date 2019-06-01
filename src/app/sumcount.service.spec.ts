import { TestBed } from '@angular/core/testing';

import { SumcountService } from './sumcount.service';

describe('SumcountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SumcountService = TestBed.get(SumcountService);
    expect(service).toBeTruthy();
  });
});
