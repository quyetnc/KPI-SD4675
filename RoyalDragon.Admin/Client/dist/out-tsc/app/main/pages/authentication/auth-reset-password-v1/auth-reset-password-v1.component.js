import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
let AuthResetPasswordV1Component = class AuthResetPasswordV1Component {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(_coreConfigService, _formBuilder) {
        this._coreConfigService = _coreConfigService;
        this._formBuilder = _formBuilder;
        this.submitted = false;
        this._unsubscribeAll = new Subject();
        // Configure the layout
        this._coreConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                menu: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                customizer: false,
                enableLocalStorage: false
            }
        };
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.resetPasswordForm.controls;
    }
    /**
     * Toggle password
     */
    togglePasswordTextType() {
        this.passwordTextType = !this.passwordTextType;
    }
    /**
     * Toggle confirm password
     */
    toggleConfPasswordTextType() {
        this.confPasswordTextType = !this.confPasswordTextType;
    }
    /**
     * On Submit
     */
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.resetPasswordForm.invalid) {
            return;
        }
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this.resetPasswordForm = this._formBuilder.group({
            newPassword: ['', [Validators.required]],
            confirmPassword: ['', [Validators.required]]
        });
        // Subscribe to config changes
        this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
            this.coreConfig = config;
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
};
AuthResetPasswordV1Component = __decorate([
    Component({
        selector: 'app-auth-reset-password-v1',
        templateUrl: './auth-reset-password-v1.component.html',
        styleUrls: ['./auth-reset-password-v1.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], AuthResetPasswordV1Component);
export { AuthResetPasswordV1Component };
//# sourceMappingURL=auth-reset-password-v1.component.js.map