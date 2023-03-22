import { TestBed } from '@angular/core/testing';

import { SheduleServiceService } from './shedule-service.service';

describe('SheduleServiceService', () => {
  let service: SheduleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheduleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
