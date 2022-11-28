import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let HorizontalLayoutComponent = class HorizontalLayoutComponent {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     */
    constructor(_coreConfigService) {
        this._coreConfigService = _coreConfigService;
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
HorizontalLayoutComponent = __decorate([
    Component({
        selector: 'horizontal-layout',
        templateUrl: './horizontal-layout.component.html',
        styleUrls: ['./horizontal-layout.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], HorizontalLayoutComponent);
export { HorizontalLayoutComponent };
//# sourceMappingURL=horizontal-layout.component.js.map