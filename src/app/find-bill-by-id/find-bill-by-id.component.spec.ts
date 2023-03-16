import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBillByIdComponent } from './find-bill-by-id.component';

describe('FindBillByIdComponent', () => {
  let component: FindBillByIdComponent;
  let fixture: ComponentFixture<FindBillByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindBillByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindBillByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
