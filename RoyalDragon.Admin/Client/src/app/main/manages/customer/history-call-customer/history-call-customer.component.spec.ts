import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCallCustomerComponent } from './history-call-customer.component';

describe('HistoryCallCustomerComponent', () => {
  let component: HistoryCallCustomerComponent;
  let fixture: ComponentFixture<HistoryCallCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryCallCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryCallCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
