import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
let NotAuthorizedComponent = class NotAuthorizedComponent {
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
NotAuthorizedComponent = __decorate([
    Component({
        selector: 'app-not-authorized',
        templateUrl: './not-authorized.component.html',
        styleUrls: ['./not-authorized.component.scss']
    })
], NotAuthorizedComponent);
export { NotAuthorizedComponent };
//# sourceMappingURL=not-authorized.component.js.map