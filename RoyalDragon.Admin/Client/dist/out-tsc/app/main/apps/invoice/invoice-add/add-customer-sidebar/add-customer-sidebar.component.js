import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AddCustomerSidebarComponent = class AddCustomerSidebarComponent {
    constructor(_coreSidebarService) {
        this._coreSidebarService = _coreSidebarService;
    }
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name) {
        this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    }
    ngOnInit() { }
};
AddCustomerSidebarComponent = __decorate([
    Component({
        selector: 'app-add-customer-sidebar',
        templateUrl: './add-customer-sidebar.component.html'
    })
], AddCustomerSidebarComponent);
export { AddCustomerSidebarComponent };
//# sourceMappingURL=add-customer-sidebar.component.js.map