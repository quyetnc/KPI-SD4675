import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SendInvoiceSidebarPreviewComponent = class SendInvoiceSidebarPreviewComponent {
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
SendInvoiceSidebarPreviewComponent = __decorate([
    Component({
        selector: 'app-send-invoice-sidebar-preview',
        templateUrl: './send-invoice-sidebar-preview.component.html'
    })
], SendInvoiceSidebarPreviewComponent);
export { SendInvoiceSidebarPreviewComponent };
//# sourceMappingURL=send-invoice-sidebar-preview.component.js.map