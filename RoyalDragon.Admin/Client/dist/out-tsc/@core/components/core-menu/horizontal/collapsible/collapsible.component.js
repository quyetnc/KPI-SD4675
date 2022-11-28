import { __decorate } from "tslib";
import { Component, HostListener, HostBinding, Input } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
let CoreMenuHorizontalCollapsibleComponent = class CoreMenuHorizontalCollapsibleComponent {
    /**
     * Constructor
     *
     * @param {Router} _router
     * @param {CoreConfigService} _coreConfigService
     * @param {CoreMenuService} _coreMenuService
     */
    constructor(el, _router, _coreConfigService, _coreMenuService) {
        this.el = el;
        this._router = _router;
        this._coreConfigService = _coreConfigService;
        this._coreMenuService = _coreMenuService;
        this.isShow = false;
        // Conditionally add the active classes if UrlInChildren
        this.isActive = false;
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }
    // Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to config changes
        this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
            this.coreConfig = config;
        });
        // Subscribe to the current menu changes
        this._coreMenuService.onMenuChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
            this.currentUser = this._coreMenuService.currentUser;
        });
        // Listen for router events and expand
        this._router.events
            .pipe(filter(event => event instanceof NavigationEnd), takeUntil(this._unsubscribeAll))
            .subscribe((event) => {
            // Confirm if the urlAfterRedirects can be found in one of the children of this item
            if (this.confirmUrlInChildren(this.item, event.urlAfterRedirects)) {
                this.isActive = true;
            }
            else {
                this.isActive = false;
            }
        });
        // Check if the url can be found in one of the children of this item
        // Required for onInit case (i.e switching theme customizer menu layout)
        if (this.confirmUrlInChildren(this.item, this._router.url)) {
            this.isActive = true;
        }
        else {
            this.isActive = false;
        }
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Open
     */
    show() {
        this.isShow = true;
        this.setSubMenuProp();
    }
    /**
     * Close
     */
    hide() {
        this.isShow = false;
    }
    /**
     * Set sub-menu properties based on screen size
     *
     */
    setSubMenuProp() {
        setTimeout(() => {
            let nativeElement = this.el.nativeElement, nativeElementChildren = this.el.nativeElement.children[1];
            // If element has sub menu
            if (nativeElement.classList.contains('dropdown-submenu')) {
                const innerHeight = window.innerHeight, dropdownTop = nativeElementChildren.getBoundingClientRect().top, dropdownLeft = nativeElementChildren.getBoundingClientRect().left, dropdownHeight = nativeElementChildren.scrollHeight, dropdownWidth = nativeElementChildren.scrollWidth;
                //Set sub-menu height
                if (innerHeight - dropdownTop - dropdownHeight - 28 < 1) {
                    let maxHeight = innerHeight - dropdownTop - 25;
                    nativeElementChildren.setAttribute('style', 'overflow-y: auto; overflow-x: hidden; max-height : ' + maxHeight + 'px');
                }
                // Open sub-menu on left based on screen size (To avoid opn sub-menu outside of the screen)
                if (dropdownLeft + dropdownWidth - (window.innerWidth - 16) >= 0) {
                    nativeElementChildren.parentElement.classList.add('openLeft');
                }
            }
        });
    }
    /**
     * Confirms if the provided url can be found in one of the given parent's children
     *
     * @param parent
     * @param url
     * @returns {boolean}
     */
    confirmUrlInChildren(parent, url) {
        const children = parent.children;
        // Return false if parent don't have any children
        if (!children) {
            return false;
        }
        // Loop all the children
        for (const child of children) {
            // If children has child (Sub to sub item url)
            if (child.children) {
                // Call function again with child
                if (this.confirmUrlInChildren(child, url)) {
                    return true;
                }
            }
            // If child.url is same as provided url
            if (child.url === url || url.includes(child.url)) {
                return true;
            }
        }
        return false;
    }
};
__decorate([
    HostBinding('class.active'),
    HostBinding('class.open'),
    HostBinding('class.sidebar-group-active')
], CoreMenuHorizontalCollapsibleComponent.prototype, "isActive", void 0);
__decorate([
    Input()
], CoreMenuHorizontalCollapsibleComponent.prototype, "item", void 0);
__decorate([
    HostListener('mouseenter')
], CoreMenuHorizontalCollapsibleComponent.prototype, "show", null);
__decorate([
    HostListener('mouseleave')
], CoreMenuHorizontalCollapsibleComponent.prototype, "hide", null);
CoreMenuHorizontalCollapsibleComponent = __decorate([
    Component({
        selector: '[core-menu-horizontal-collapsible]',
        templateUrl: './collapsible.component.html'
    })
], CoreMenuHorizontalCollapsibleComponent);
export { CoreMenuHorizontalCollapsibleComponent };
//# sourceMappingURL=collapsible.component.js.map