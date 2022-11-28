import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { UserService } from 'app/api/services';
import { AbstractControl, FormBuilder, UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ChangePasswordRequest } from 'app/api/models/change-password-request';
import { UpdateUserRequest, User} from 'app/api/models';
import { CommonService } from 'app/common/common.service';
import { environment } from 'environments/environment';
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
    altInput: true,
    dateFormat: 'm-d-Y',
    altFormat: 'd-m-Y',
    defaultDate: ''
  };
  public passwordTextTypeOld = false;
  public passwordTextTypeNew = false;
  public passwordTextTypeRetype = false;
  public avatarImage: string;
  public changePasswordRequest: ChangePasswordRequest;
  // private
  private _unsubscribeAll: Subject<any>;
  warningText = 'Xác nhận mật khẩu không trùng khớp!';
  isWarning = false;
  public currentUser: User = {};//Single User Selected or Create User
  public currentUserUpdated: User = {};
  randomDateString = '5/14/1998';

  /**
   * Constructor
   *
   * @param {AccountSettingsService} _accountSettingsService
   */
   newPassword = new UntypedFormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
  ]);
  oldPassword = new UntypedFormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
  ]);
  confirmPassword = new UntypedFormControl(null, [
    (c: AbstractControl) => Validators.required(c),
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
  ]);
   form: UntypedFormGroup = new UntypedFormGroup({
    oldPassword: this.oldPassword,
    newPassword: this.newPassword,
    confirmPassword: this.confirmPassword
    });
  constructor(private formBuilder: FormBuilder, private _userService: UserService, private _commonService: CommonService) {
    this._unsubscribeAll = new Subject();
  }
  onSubmit(): void {
    if (!this.form?.valid) {
      return;
    }
    let params = {
      body: {
        UserId: this.currentUser.userId,
        password: this.form.value.oldPassword,
        newPassword: this.form.value.newPassword,
      } as ChangePasswordRequest,
    };
    

    this._userService.apiUserChangePasswordUserPost$Json(params).subscribe(
      (rs) => {
        if (rs.success) {
          
          this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
        } else {
          
          this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
        }
      },
      (err) => {
        
        console.dir(err);
      }
    );
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
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    debugger;
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
