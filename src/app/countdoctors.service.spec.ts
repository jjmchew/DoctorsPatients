import { TestBed } from '@angular/core/testing';

import { CountdoctorsService } from './countdoctors.service';

describe('CountdoctorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountdoctorsService = TestBed.get(CountdoctorsService);
    expect(service).toBeTruthy();
  });
});
