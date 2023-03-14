import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTotalBillComponent } from './show-total-bill.component';

describe('ShowTotalBillComponent', () => {
  let component: ShowTotalBillComponent;
  let fixture: ComponentFixture<ShowTotalBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTotalBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTotalBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
