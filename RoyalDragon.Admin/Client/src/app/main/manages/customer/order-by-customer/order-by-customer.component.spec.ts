import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByCustomerComponent } from './order-by-customer.component';

describe('OrderByCustomerComponent', () => {
  let component: OrderByCustomerComponent;
  let fixture: ComponentFixture<OrderByCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderByCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderByCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
