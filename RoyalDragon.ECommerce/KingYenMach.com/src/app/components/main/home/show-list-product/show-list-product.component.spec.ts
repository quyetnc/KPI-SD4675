import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListProductComponent } from './show-list-product.component';

describe('ShowListProductComponent', () => {
  let component: ShowListProductComponent;
  let fixture: ComponentFixture<ShowListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
