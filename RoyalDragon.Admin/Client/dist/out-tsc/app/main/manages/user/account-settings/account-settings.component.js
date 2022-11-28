import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
let AccountSettingsComponent = class AccountSettingsComponent {
    constructor(_accountSettingsService, formBuilder) {
        this._accountSettingsService = _accountSettingsService;
        this.formBuilder = formBuilder;
        this.birthDateOptions = {
            altInput: true
        };
        this.passwordTextTypeOld = false;
        this.passwordTextTypeNew = false;
        this.passwordTextTypeRetype = false;
        this.warningText = 'Xác nhận mật khẩu không trùng khớp!';
        this.isWarning = false;
        /**
         * Constructor
         *
         * @param {AccountSettingsService} _accountSettingsService
         */
        this.newPassword = new UntypedFormControl(null, [
            (c) => Validators.required(c),
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]);
        this.confirmPassword = new UntypedFormControl(null, [
            (c) => Validators.required(c),
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]);
        this.form = new UntypedFormGroup({
            oldPassword: new UntypedFormControl(''),
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
    savePassWord() {
        // if (this.form.controls['newPassword'].value !== this.form.controls['confirmPassword'].value) {
        //   this.isWarning = true;
        // }
        // else {
        //   this.isWarning = false;
        // }
        
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