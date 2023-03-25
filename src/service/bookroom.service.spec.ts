import { TestBed } from '@angular/core/testing';

import { BookroomService } from './bookroom.service';

describe('BookroomService', () => {
  let service: BookroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
