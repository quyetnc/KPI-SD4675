import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOrderOfCustomerComponent } from './info-order-of-customer.component';

describe('InfoOrderOfCustomerComponent', () => {
  let component: InfoOrderOfCustomerComponent;
  let fixture: ComponentFixture<InfoOrderOfCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoOrderOfCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoOrderOfCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
