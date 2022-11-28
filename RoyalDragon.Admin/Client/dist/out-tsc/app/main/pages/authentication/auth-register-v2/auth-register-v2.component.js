import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
let AuthRegisterV2Component = class AuthRegisterV2Component {
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
        return this.registerForm.controls;
    }
    /**
     * Toggle password
     */
    togglePasswordTextType() {
        this.passwordTextType = !this.passwordTextType;
    }
    /**
     * On Submit
     */
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this.registerForm = this._formBuilder.group({
            username: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
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
AuthRegisterV2Component = __decorate([
    Component({
        selector: 'app-auth-register-v2',
        templateUrl: './auth-register-v2.component.html',
        styleUrls: ['./auth-register-v2.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], AuthRegisterV2Component);
export { AuthRegisterV2Component };
//# sourceMappingURL=auth-register-v2.component.js.map