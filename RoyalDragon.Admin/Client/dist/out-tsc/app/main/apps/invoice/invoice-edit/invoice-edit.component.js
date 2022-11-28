import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { repeaterAnimation } from 'app/main/apps/invoice/invoice.animation';
let InvoiceEditComponent = class InvoiceEditComponent {
    /**
     * Constructor
     *
     * @param {Router} router
     * @param {InvoiceEditService} _invoiceEditService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(router, _invoiceEditService, _coreSidebarService) {
        this.router = router;
        this._invoiceEditService = _invoiceEditService;
        this._coreSidebarService = _coreSidebarService;
        // Public
        this.url = this.router.url;
        this.sidebarToggleRef = false;
        this.paymentSidebarToggle = false;
        this.items = [{ itemId: '', itemName: '', itemQuantity: '', itemCost: '' }];
        this.item = {
            itemName: '',
            itemQuantity: '',
            itemCost: ''
        };
        // Ng2-Flatpickr Options
        this.DateRangeOptions = {
            altInput: true,
            mode: 'single',
            altInputClass: 'form-control flat-picker flatpickr-input invoice-edit-input',
            defaultDate: ['2020-05-01'],
            altFormat: 'Y-n-j'
        };
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
     * Add Item
     */
    addItem() {
        this.items.push({
            itemId: '',
            itemName: '',
            itemQuantity: '',
            itemCost: ''
        });
    }
    /**
     * DeleteItem
     *
     * @param id
     */
    deleteItem(id) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items.indexOf(this.items[i]) === id) {
                this.items.splice(i, 1);
                break;
            }
        }
    }
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
        this._invoiceEditService.onInvoicEditChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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
InvoiceEditComponent = __decorate([
    Component({
        selector: 'app-invoice-edit',
        templateUrl: './invoice-edit.component.html',
        styleUrls: ['./invoice-edit.component.scss'],
        animations: [repeaterAnimation],
        encapsulation: ViewEncapsulation.None
    })
], InvoiceEditComponent);
export { InvoiceEditComponent };
//# sourceMappingURL=invoice-edit.component.js.map