import { TestBed } from '@angular/core/testing';

import { SenatorService } from './senator.service';

describe('SenatorService', () => {
  let service: SenatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SenatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
