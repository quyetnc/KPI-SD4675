import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedHomePageComponent } from './featured-home-page.component';

describe('FeaturedHomePageComponent', () => {
  let component: FeaturedHomePageComponent;
  let fixture: ComponentFixture<FeaturedHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
