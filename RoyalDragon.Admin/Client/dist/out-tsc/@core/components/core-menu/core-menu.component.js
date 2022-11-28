import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let CoreMenuComponent = class CoreMenuComponent {
    /**
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {CoreMenuService} _coreMenuService
     */
    constructor(_changeDetectorRef, _coreMenuService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._coreMenuService = _coreMenuService;
        this.layout = 'vertical';
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }
    // Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Set the menu either from the input or from the service
        this.menu = this.menu || this._coreMenuService.getCurrentMenu();
        // Subscribe to the current menu changes
        this._coreMenuService.onMenuChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
            this.currentUser = this._coreMenuService.currentUser;
            // Load menu
            this.menu = this._coreMenuService.getCurrentMenu();
            this._changeDetectorRef.markForCheck();
        });
    }
    fHavePermission(item) {
        return item?.role?.some(r => this.currentUser.role?.indexOf(r) >= 0) || this.currentUser.role?.includes("Admin");
    }
};
__decorate([
    Input()
], CoreMenuComponent.prototype, "layout", void 0);
__decorate([
    Input()
], CoreMenuComponent.prototype, "menu", void 0);
CoreMenuComponent = __decorate([
    Component({
        selector: '[core-menu]',
        templateUrl: './core-menu.component.html',
        styleUrls: ['./core-menu.component.scss'],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CoreMenuComponent);
export { CoreMenuComponent };
//# sourceMappingURL=core-menu.component.js.map