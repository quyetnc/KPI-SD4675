import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
let AuthForgotPasswordV2Component = class AuthForgotPasswordV2Component {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     * @param {FormBuilder} _formBuilder
     *
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
        return this.forgotPasswordForm.controls;
    }
    /**
     * On Submit
     */
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.forgotPasswordForm.invalid) {
            return;
        }
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this.forgotPasswordForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
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
AuthForgotPasswordV2Component = __decorate([
    Component({
        selector: 'app-auth-forgot-password-v2',
        templateUrl: './auth-forgot-password-v2.component.html',
        styleUrls: ['./auth-forgot-password-v2.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], AuthForgotPasswordV2Component);
export { AuthForgotPasswordV2Component };
//# sourceMappingURL=auth-forgot-password-v2.component.js.map