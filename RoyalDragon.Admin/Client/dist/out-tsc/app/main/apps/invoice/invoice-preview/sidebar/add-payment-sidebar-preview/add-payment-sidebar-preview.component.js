import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AddPaymentSidebarPreviewComponent = class AddPaymentSidebarPreviewComponent {
    constructor(_coreSidebarService) {
        this._coreSidebarService = _coreSidebarService;
        // ng2-flatpickr options
        this.paymentDateOptions = {
            altInput: true,
            mode: 'single',
            altInputClass: 'form-control flat-picker flatpickr-input invoice-edit-input',
            defaultDate: ['2020-05-01'],
            altFormat: 'Y-n-j'
        };
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
AddPaymentSidebarPreviewComponent = __decorate([
    Component({
        selector: 'app-add-payment-sidebar-preview',
        templateUrl: './add-payment-sidebar-preview.component.html'
    })
], AddPaymentSidebarPreviewComponent);
export { AddPaymentSidebarPreviewComponent };
//# sourceMappingURL=add-payment-sidebar-preview.component.js.map