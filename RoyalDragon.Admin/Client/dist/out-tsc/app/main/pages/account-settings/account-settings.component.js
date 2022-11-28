import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { environment } from 'environments/environment';
let AccountSettingsComponent = class AccountSettingsComponent {
    constructor(_accountSettingsService, formBuilder, _userService, _commonService) {
        this._accountSettingsService = _accountSettingsService;
        this.formBuilder = formBuilder;
        this._userService = _userService;
        this._commonService = _commonService;
        this.birthDateOptions = {
            altInput: true,
            dateFormat: 'd-m-Y',
            altFormat: 'd-m-Y',
            defaultDate: ''
        };
        this.passwordTextTypeOld = false;
        this.passwordTextTypeNew = false;
        this.passwordTextTypeRetype = false;
        this.warningText = 'Xác nhận mật khẩu không trùng khớp!';
        this.isWarning = false;
        this.currentUser = {}; //Single User Selected or Create User
        this.currentUserUpdated = {};
        this.randomDateString = '1988-09-19';
        /**
         * Constructor
         *
         * @param {AccountSettingsService} _accountSettingsService
         */
        this.newPassword = new UntypedFormControl(null, [
            (c) => Validators.required(c),
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]);
        this.oldPassword = new UntypedFormControl(null, [
            (c) => Validators.required(c),
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]);
        this.confirmPassword = new UntypedFormControl(null, [
            (c) => Validators.required(c),
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]);
        this.form = new UntypedFormGroup({
            oldPassword: this.oldPassword,
            newPassword: this.newPassword,
            confirmPassword: this.confirmPassword
        });
        this._unsubscribeAll = new Subject();
    }
    onSubmit() {
        console.log(this.form);
        
        if (!this.form?.valid) {
            
            return;
        }
        
        let params = {
            body: {
                UserId: this.currentUser.userId,
                password: this.form.value.oldPassword,
                newPassword: this.form.value.newPassword,
            },
        };
        
        this._userService.apiUserChangePasswordUserPost$Json(params).subscribe((rs) => {
            if (rs.success) {
                
                this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
            }
            else {
                
                this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
            }
        }, (err) => {
            
            console.dir(err);
        });
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
    uploadImage(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (event) => {
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
        
        let params = {
            UserId: this.currentUser.userId,
        };
        this._accountSettingsService.onSettingsChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.data = response;
            this._userService.apiUserGetUserGet$Json(params).subscribe((result) => {
                this.currentUserUpdated = result.data;
                
                this.avatarImage = `${environment.apiUrl}` + '/' + this.currentUserUpdated.avatar;
                this.data.accountSetting.general.username = this.currentUserUpdated.username;
                this.data.accountSetting.general.fullName = this.currentUserUpdated.fullname;
                this.data.accountSetting.general.email = this.currentUserUpdated.email;
                this.data.accountSetting.general.company = this.currentUserUpdated.email;
                // this.data.accountSetting.info.dob = new Date();
                this.birthDateOptions.defaultDate = new Date(Date.now());
                
                this.data.accountSetting.general.country = this.currentUserUpdated.address;
                this.data.accountSetting.general.website = this.currentUserUpdated.phone;
                this.data.accountSetting.general.phone = this.currentUserUpdated.phone;
                
            });
            // this.avatarImage = this.data.accountSetting.general.avatar;
            // this.avatarImage = this.currentUserUpdated.avatar
            
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
        this.form = this.formBuilder.group({
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
        }, {
            validators: [this.ConfirmedValidator('newPassword', 'confirmPassword')]
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    saveInformation() {
        let user = {
            UserId: this.currentUserUpdated.userId,
            Avatar: this.currentUserUpdated.avatar,
            Password: this.currentUserUpdated.password,
            UserRole: this.currentUserUpdated.userRole,
            Username: this.currentUserUpdated.username,
            IsActive: this.currentUserUpdated.isActive,
            Address: this.data.accountSetting.general.address,
            Birthday: new Date(this.data.accountSetting.general.dob).toLocaleDateString(),
            Email: this.data.accountSetting.general.email,
            Fullname: this.data.accountSetting.general.fullName,
            Phone: this.data.accountSetting.general.phone,
            CreateOn: this.currentUserUpdated.createOn
        };
        //   let params = {
        //     body: {
        //         product: user,
        //         userId: 0
        //     },
        // };
        let params = {
            body: {
                product: user,
                userId: 0
            },
        };
        
        this._userService.apiUserUpdateUserPost$Json(params).subscribe((rs) => {
            if (rs.success) {
                
                this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
            }
            else {
                
                this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
            }
        }, (err) => {
            console.dir(err);
        });
        
    }
    ConfirmedValidator(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            
            if (matchingControl.errors &&
                !matchingControl.errors.confirmedValidator) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ confirmedValidator: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
};
AccountSettingsComponent = __decorate([
    Component({
        selector: 'app-account-settings',
        templateUrl: './account-settings.component.html',
        styleUrls: ['./account-settings.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], AccountSettingsComponent);
export { AccountSettingsComponent };
//# sourceMappingURL=account-settings.component.js.map