import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';

import { AccountSettingsService } from 'app/main/pages/account-settings/account-settings.service';
import { AbstractControl, FormBuilder, UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountSettingsComponent implements OnInit, OnDestroy {
  // public
  public contentHeader: object;
  public data: any;
  public birthDateOptions: FlatpickrOptions = {
    altInput: true
  };
  public passwordTextTypeOld = false;
  public passwordTextTypeNew = false;
  public passwordTextTypeRetype = false;
  public avatarImage: string;

  // private
  private _unsubscribeAll: Subject<any>;
  warningText = 'Xác nhận mật khẩu không trùng khớp!';
  isWarning = false;
  /**
   * Constructor
   *
   * @param {AccountSettingsService} _accountSettingsService
   */
   newPassword = new UntypedFormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
  ]);
  confirmPassword = new UntypedFormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
  ]);
   form: UntypedFormGroup = new UntypedFormGroup({
    oldPassword: new UntypedFormControl(''),
    newPassword: this.newPassword,
    confirmPassword: this.confirmPassword
    });
  constructor(private _accountSettingsService: AccountSettingsService, private formBuilder: FormBuilder) {
    this._unsubscribeAll = new Subject();
  }
  onSubmit(): void {
    console.log(this.form);
      
    if (!this.form?.valid) {
      
      return;
    }
  }
  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle Password Text Type Old
   */
  togglePasswordTextTypeOld() {
    this.passwordTextTypeOld = !this.passwordTextTypeOld;
  }

  /**
   * Toggle Password Text Type New
   */
  togglePasswordTextTypeNew() {
    this.passwordTextTypeNew = !this.passwordTextTypeNew;
  }

  /**
   * Toggle Password Text Type Retype
   */
  togglePasswordTextTypeRetype() {
    this.passwordTextTypeRetype = !this.passwordTextTypeRetype;
  }

  /**
   * Upload Image
   *
   * @param event
   */
  uploadImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: any) => {
        this.avatarImage = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this._accountSettingsService.onSettingsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.data = response;
      this.avatarImage = this.data.accountSetting.general.avatar;
    });

    // content header
    this.contentHeader = {
      headerTitle: 'Chỉnh sửa tài khoản',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Trang chủ',
            isLink: true,
            link: '/'
          },
          {
            name: 'Tài khoản',
            isLink: true,
            link: '/'
          },
          {
            name: 'Chỉnh sửa tài khoản',
            isLink: false
          }
        ]
      }
    };
    this.form = this.formBuilder.group(
      {
        newPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        oldPassword: ['', Validators.required]
        // acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [this.ConfirmedValidator('newPassword', 'confirmPassword')]
      }
    );
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  savePassWord() {
    // if (this.form.controls['newPassword'].value !== this.form.controls['confirmPassword'].value) {
    //   this.isWarning = true;
    // }
    // else {
    //   this.isWarning = false;
    // }
    
  }
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: UntypedFormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
