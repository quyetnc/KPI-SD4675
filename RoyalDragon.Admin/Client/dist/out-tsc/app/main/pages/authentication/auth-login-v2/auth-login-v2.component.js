import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { takeUntil, first } from 'rxjs/operators';
import { Subject } from 'rxjs';
let AuthLoginV2Component = class AuthLoginV2Component {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     */
    constructor(_coreConfigService, _formBuilder, _route, _router, _authenticationService) {
        this._coreConfigService = _coreConfigService;
        this._formBuilder = _formBuilder;
        this._route = _route;
        this._router = _router;
        this._authenticationService = _authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this._authenticationService.currentUserValue) {
            this._router.navigate(['/']);
        }
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
        return this.loginForm.controls;
    }
    /**
     * Toggle password
     */
    togglePasswordTextType() {
        this.passwordTextType = !this.passwordTextType;
    }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        // Login
        this.loading = true;
        this._authenticationService
            .login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(data => {
            this._router.navigate([this.returnUrl]);
        }, error => {
            this.error = error;
            this.loading = false;
        });
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this.loginForm = this._formBuilder.group({
            email: ['admin', [Validators.required]],
            password: ['123456', Validators.required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
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
AuthLoginV2Component = __decorate([
    Component({
        selector: 'app-auth-login-v2',
        templateUrl: './auth-login-v2.component.html',
        styleUrls: ['./auth-login-v2.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], AuthLoginV2Component);
export { AuthLoginV2Component };
//# sourceMappingURL=auth-login-v2.component.js.map