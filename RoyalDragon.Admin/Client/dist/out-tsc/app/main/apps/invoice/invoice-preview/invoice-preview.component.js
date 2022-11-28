import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let InvoicePreviewComponent = class InvoicePreviewComponent {
    /**
     * Constructor
     *
     * @param {Router} router
     * @param {InvoicePreviewService} _invoicePreviewService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(router, _invoicePreviewService, _coreSidebarService) {
        this.router = router;
        this._invoicePreviewService = _invoicePreviewService;
        this._coreSidebarService = _coreSidebarService;
        this.url = this.router.url;
        this.sidebarToggleRef = false;
        this.paymentSidebarToggle = false;
        this.paymentDetails = {
            totalDue: '$12,110.55',
            bankName: 'American Bank',
            country: 'United States',
            iban: 'ETD95476213874685',
            swiftCode: 'BR91905'
        };
        this._unsubscribeAll = new Subject();
        this.urlLastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name) {
        this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this._invoicePreviewService.onInvoicPreviewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.apiData = response;
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
};
InvoicePreviewComponent = __decorate([
    Component({
        selector: 'app-invoice-preview',
        templateUrl: './invoice-preview.component.html',
        styleUrls: ['./invoice-preview.service.scss'],
        encapsulation: ViewEncapsulation.None
    })
], InvoicePreviewComponent);
export { InvoicePreviewComponent };
//# sourceMappingURL=invoice-preview.component.js.map