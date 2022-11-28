import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
let ErrorComponent = class ErrorComponent {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     */
    constructor(_coreConfigService) {
        this._coreConfigService = _coreConfigService;
        this._unsubscribeAll = new Subject();
        // Configure the layout
        this._coreConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                menu: {
                    hidden: true
                },
                customizer: false,
                enableLocalStorage: false
            }
        };
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
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
ErrorComponent = __decorate([
    Component({
        selector: 'app-error',
        templateUrl: './error.component.html',
        styleUrls: ['./error.component.scss']
    })
], ErrorComponent);
export { ErrorComponent };
//# sourceMappingURL=error.component.js.map