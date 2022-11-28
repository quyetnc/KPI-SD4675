import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularHomePageComponent } from './popular-home-page.component';

describe('PopularHomePageComponent', () => {
  let component: PopularHomePageComponent;
  let fixture: ComponentFixture<PopularHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
