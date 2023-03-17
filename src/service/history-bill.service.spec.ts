import { TestBed } from '@angular/core/testing';

import { HistoryBillService } from './history-bill.service';

describe('HistoryBillService', () => {
  let service: HistoryBillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryBillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
