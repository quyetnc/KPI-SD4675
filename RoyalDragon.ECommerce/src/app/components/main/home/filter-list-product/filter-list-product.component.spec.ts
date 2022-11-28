import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterListProductComponent } from './filter-list-product.component';

describe('FilterListProductComponent', () => {
  let component: FilterListProductComponent;
  let fixture: ComponentFixture<FilterListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterListProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
