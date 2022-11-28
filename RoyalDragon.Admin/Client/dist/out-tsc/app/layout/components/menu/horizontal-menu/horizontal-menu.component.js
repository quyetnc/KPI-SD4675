import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
let HorizontalMenuComponent = class HorizontalMenuComponent {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     * @param {CoreMenuService} _coreMenuService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(_coreConfigService, _coreMenuService, _coreSidebarService) {
        this._coreConfigService = _coreConfigService;
        this._coreMenuService = _coreMenuService;
        this._coreSidebarService = _coreSidebarService;
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On Init
     */
    ngOnInit() {
        // Subscribe config change
        this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
            this.coreConfig = config;
        });
        // Get current menu
        this._coreMenuService.onMenuChanged
            .pipe(filter(value => value !== null), takeUntil(this._unsubscribeAll))
            .subscribe(() => {
            this.menu = this._coreMenuService.getCurrentMenu();
        });
    }
    /**
     * On Destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
};
HorizontalMenuComponent = __decorate([
    Component({
        selector: 'horizontal-menu',
        templateUrl: './horizontal-menu.component.html',
        styleUrls: ['./horizontal-menu.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], HorizontalMenuComponent);
export { HorizontalMenuComponent };
//# sourceMappingURL=horizontal-menu.component.js.map