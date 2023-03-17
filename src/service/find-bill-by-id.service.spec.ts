import { TestBed } from '@angular/core/testing';

import { FindBillByIdService } from './find-bill-by-id.service';

describe('FindBillByIdService', () => {
  let service: FindBillByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindBillByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
