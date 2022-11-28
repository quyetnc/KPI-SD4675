import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialDealsHomePageComponent } from './special-deals-home-page.component';

describe('SpecialDealsHomePageComponent', () => {
  let component: SpecialDealsHomePageComponent;
  let fixture: ComponentFixture<SpecialDealsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialDealsHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialDealsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
