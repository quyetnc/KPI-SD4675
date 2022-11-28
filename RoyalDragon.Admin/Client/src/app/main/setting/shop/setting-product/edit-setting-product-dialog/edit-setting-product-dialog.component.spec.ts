import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSettingProductDialogComponent } from './edit-setting-product-dialog.component';

describe('EditSettingProductDialogComponent', () => {
  let component: EditSettingProductDialogComponent;
  let fixture: ComponentFixture<EditSettingProductDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSettingProductDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSettingProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
