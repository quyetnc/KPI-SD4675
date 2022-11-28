import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AddPaymentSidebarComponent = class AddPaymentSidebarComponent {
    /**
     * Constructor
     *
     * @param {InvoiceAddService} _invoiceAddService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(_coreSidebarService) {
        this._coreSidebarService = _coreSidebarService;
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
AddPaymentSidebarComponent = __decorate([
    Component({
        selector: 'app-add-payment-sidebar',
        templateUrl: './add-payment-sidebar.component.html'
    })
], AddPaymentSidebarComponent);
export { AddPaymentSidebarComponent };
//# sourceMappingURL=add-payment-sidebar.component.js.map