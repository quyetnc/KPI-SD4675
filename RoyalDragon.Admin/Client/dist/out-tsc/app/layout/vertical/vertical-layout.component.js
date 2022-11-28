import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let VerticalLayoutComponent = class VerticalLayoutComponent {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     */
    constructor(_coreConfigService, _elementRef) {
        this._coreConfigService = _coreConfigService;
        this._elementRef = _elementRef;
        // Set the private defaults
        this._unsubscribeAll = new Subject();
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
VerticalLayoutComponent = __decorate([
    Component({
        selector: 'vertical-layout',
        templateUrl: './vertical-layout.component.html',
        styleUrls: ['./vertical-layout.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], VerticalLayoutComponent);
export { VerticalLayoutComponent };
//# sourceMappingURL=vertical-layout.component.js.map