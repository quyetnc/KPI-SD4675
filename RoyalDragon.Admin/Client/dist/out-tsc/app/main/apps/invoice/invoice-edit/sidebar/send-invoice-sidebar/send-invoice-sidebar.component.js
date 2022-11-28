import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SendInvoiceSidebarComponent = class SendInvoiceSidebarComponent {
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
SendInvoiceSidebarComponent = __decorate([
    Component({
        selector: 'app-send-invoice-sidebar',
        templateUrl: './send-invoice-sidebar.component.html'
    })
], SendInvoiceSidebarComponent);
export { SendInvoiceSidebarComponent };
//# sourceMappingURL=send-invoice-sidebar.component.js.map