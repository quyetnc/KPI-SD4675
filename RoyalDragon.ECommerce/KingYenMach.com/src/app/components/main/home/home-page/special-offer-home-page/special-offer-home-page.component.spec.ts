import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOfferHomePageComponent } from './special-offer-home-page.component';

describe('SpecialOfferHomePageComponent', () => {
  let component: SpecialOfferHomePageComponent;
  let fixture: ComponentFixture<SpecialOfferHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialOfferHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialOfferHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
