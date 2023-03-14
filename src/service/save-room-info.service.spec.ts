import { TestBed } from '@angular/core/testing';

import { SaveRoomInfoService } from './save-room-info.service';

describe('SaveRoomInfoService', () => {
  let service: SaveRoomInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveRoomInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
