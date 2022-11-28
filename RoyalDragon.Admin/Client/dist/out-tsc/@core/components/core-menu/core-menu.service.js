import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
let CoreMenuService = class CoreMenuService {
    /**
     * Constructor
     *
     * @param {Router} _router
     * @param {AuthenticationService} _authenticationService
     */
    constructor(_router, _authenticationService) {
        this._router = _router;
        this._authenticationService = _authenticationService;
        this._registry = {};
        this._authenticationService.currentUser.subscribe(x => (this.currentUser = x));
        // Set defaults
        this.onItemCollapsed = new Subject();
        this.onItemCollapseToggled = new Subject();
        // Set private defaults
        this._currentMenuKey = null;
        this._onMenuRegistered = new BehaviorSubject(null);
        this._onMenuUnregistered = new BehaviorSubject(null);
        this._onMenuChanged = new BehaviorSubject(null);
    }
    // Accessors
    // -----------------------------------------------------------------------------------------------------
    /**
     * onMenuRegistered
     *
     * @returns {Observable<any>}
     */
    get onMenuRegistered() {
        return this._onMenuRegistered.asObservable();
    }
    /**
     * onMenuUnregistered
     *
     * @returns {Observable<any>}
     */
    get onMenuUnregistered() {
        return this._onMenuUnregistered.asObservable();
    }
    /**
     * onMenuChanged
     *
     * @returns {Observable<any>}
     */
    get onMenuChanged() {
        return this._onMenuChanged.asObservable();
    }
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Register the provided menu with the provided key
     *
     * @param key
     * @param menu
     */
    register(key, menu) {
        // Confirm if the key already used
        if (this._registry[key]) {
            console.error(`Menu with the key '${key}' already exists. Either unregister it first or use a unique key.`);
            return;
        }
        // Add to registry
        this._registry[key] = menu;
        // Notify subject
        this._onMenuRegistered.next([key, menu]);
    }
    /**
     * Unregister the menu from the registry
     *
     * @param key
     */
    unregister(key) {
        // Confirm if the menu exists
        if (!this._registry[key]) {
            console.warn(`Menu with the key '${key}' doesn't exist in the registry.`);
        }
        // Unregister sidebar
        delete this._registry[key];
        // Notify subject
        this._onMenuUnregistered.next(key);
    }
    /**
     * Get menu from registry by key
     *
     * @param key
     * @returns {any}
     */
    getMenu(key) {
        // Confirm if the menu exists
        if (!this._registry[key]) {
            console.warn(`Menu with the key '${key}' doesn't exist in the registry.`);
            return;
        }
        // Return sidebar
        return this._registry[key];
    }
    /**
     * Get current menu
     *
     * @returns {any}
     */
    getCurrentMenu() {
        if (!this._currentMenuKey) {
            console.warn(`The current menu is not set.`);
            return;
        }
        return this.getMenu(this._currentMenuKey);
    }
    /**
     * Set menu with the key as the current menu
     *
     * @param key
     */
    setCurrentMenu(key) {
        // Confirm if the sidebar exists
        if (!this._registry[key]) {
            console.warn(`Menu with the key '${key}' doesn't exist in the registry.`);
            return;
        }
        // Set current menu key
        this._currentMenuKey = key;
        // Notify subject
        this._onMenuChanged.next(key);
    }
};
CoreMenuService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CoreMenuService);
export { CoreMenuService };
//# sourceMappingURL=core-menu.service.js.map