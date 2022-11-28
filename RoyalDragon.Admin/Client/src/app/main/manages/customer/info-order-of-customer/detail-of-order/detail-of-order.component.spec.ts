import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOfOrderComponent } from './detail-of-order.component';

describe('DetailOfOrderComponent', () => {
  let component: DetailOfOrderComponent;
  let fixture: ComponentFixture<DetailOfOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOfOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailOfOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
