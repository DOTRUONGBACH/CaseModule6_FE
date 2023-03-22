import { TestBed } from '@angular/core/testing';

import { FindroomService } from './findroom.service';

describe('FindroomService', () => {
  let service: FindroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
