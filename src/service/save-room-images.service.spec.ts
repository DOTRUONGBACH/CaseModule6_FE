import { TestBed } from '@angular/core/testing';

import { SaveRoomImagesService } from './save-room-images.service';

describe('SaveRoomImagesService', () => {
  let service: SaveRoomImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveRoomImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
