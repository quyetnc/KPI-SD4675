import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NavbarNotificationComponent = class NavbarNotificationComponent {
    /**
     *
     * @param {NotificationsService} _notificationsService
     */
    constructor(_notificationsService) {
        this._notificationsService = _notificationsService;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this._notificationsService.onApiDataChange.subscribe(res => {
            this.notifications = res;
        });
    }
};
NavbarNotificationComponent = __decorate([
    Component({
        selector: 'app-navbar-notification',
        templateUrl: './navbar-notification.component.html'
    })
], NavbarNotificationComponent);
export { NavbarNotificationComponent };
//# sourceMappingURL=navbar-notification.component.js.map