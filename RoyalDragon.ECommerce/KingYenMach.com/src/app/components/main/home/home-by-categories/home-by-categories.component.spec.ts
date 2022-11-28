import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeByCategoriesComponent } from './home-by-categories.component';

describe('HomeByCategoriesComponent', () => {
  let component: HomeByCategoriesComponent;
  let fixture: ComponentFixture<HomeByCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeByCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeByCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
