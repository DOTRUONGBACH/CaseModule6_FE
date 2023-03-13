import { TestBed } from '@angular/core/testing';

import { ShowRoomForGuestService } from './show-room-for-guest.service';

describe('ShowRoomForGuestService', () => {
  let service: ShowRoomForGuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowRoomForGuestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
