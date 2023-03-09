import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRoomForGuestComponent } from './show-room-for-guest.component';

describe('ShowRoomForGuestComponent', () => {
  let component: ShowRoomForGuestComponent;
  let fixture: ComponentFixture<ShowRoomForGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRoomForGuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRoomForGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
