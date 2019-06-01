import { TestBed } from '@angular/core/testing';

import { CountpatientsService } from './countpatients.service';

describe('CountpatientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountpatientsService = TestBed.get(CountpatientsService);
    expect(service).toBeTruthy();
  });
});
