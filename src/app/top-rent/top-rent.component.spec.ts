import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRentComponent } from './top-rent.component';

describe('TopRentComponent', () => {
  let component: TopRentComponent;
  let fixture: ComponentFixture<TopRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
