import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { take, takeUntil, filter } from 'rxjs/operators';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
let VerticalMenuComponent = class VerticalMenuComponent {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     * @param {CoreMenuService} _coreMenuService
     * @param {CoreSidebarService} _coreSidebarService
     * @param {Router} _router
     */
    constructor(_coreConfigService, _coreMenuService, _coreSidebarService, _router) {
        this._coreConfigService = _coreConfigService;
        this._coreMenuService = _coreMenuService;
        this._coreSidebarService = _coreSidebarService;
        this._router = _router;
        this.isScrolled = false;
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
        this.isCollapsed = this._coreSidebarService.getSidebarRegistry('menu').collapsed;
        // Close the menu on router NavigationEnd (Required for small screen to close the menu on select)
        this._router.events
            .pipe(filter(event => event instanceof NavigationEnd), takeUntil(this._unsubscribeAll))
            .subscribe(() => {
            if (this._coreSidebarService.getSidebarRegistry('menu')) {
                this._coreSidebarService.getSidebarRegistry('menu').close();
            }
        });
        // scroll to active on navigation end
        this._router.events
            .pipe(filter(event => event instanceof NavigationEnd), take(1))
            .subscribe(() => {
            setTimeout(() => {
                this.directiveRef.scrollToElement('.navigation .active', -180, 500);
            });
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
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * On Sidebar scroll set isScrolled as true
     */
    onSidebarScroll() {
        if (this.directiveRef.position(true).y > 3) {
            this.isScrolled = true;
        }
        else {
            this.isScrolled = false;
        }
    }
    /**
     * Toggle sidebar expanded status
     */
    toggleSidebar() {
        this._coreSidebarService.getSidebarRegistry('menu').toggleOpen();
    }
    /**
     * Toggle sidebar collapsed status
     */
    toggleSidebarCollapsible() {
        // Get the current menu state
        this._coreConfigService
            .getConfig()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(config => {
            this.isCollapsed = config.layout.menu.collapsed;
        });
        if (this.isCollapsed) {
            this._coreConfigService.setConfig({ layout: { menu: { collapsed: false } } }, { emitEvent: true });
        }
        else {
            this._coreConfigService.setConfig({ layout: { menu: { collapsed: true } } }, { emitEvent: true });
        }
    }
};
__decorate([
    ViewChild(PerfectScrollbarDirective, { static: false })
], VerticalMenuComponent.prototype, "directiveRef", void 0);
VerticalMenuComponent = __decorate([
    Component({
        selector: 'vertical-menu',
        templateUrl: './vertical-menu.component.html',
        styleUrls: ['./vertical-menu.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], VerticalMenuComponent);
export { VerticalMenuComponent };
//# sourceMappingURL=vertical-menu.component.js.map