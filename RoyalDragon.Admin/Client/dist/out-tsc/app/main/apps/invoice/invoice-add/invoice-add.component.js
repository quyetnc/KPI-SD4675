import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { repeaterAnimation } from 'app/main/forms/form-repeater/form-repeater.animation';
let InvoiceAddComponent = class InvoiceAddComponent {
    /**
     * Constructor
     *
     * @param {InvoiceAddService} _invoiceAddService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(_invoiceAddService, _coreSidebarService) {
        this._invoiceAddService = _invoiceAddService;
        this._coreSidebarService = _coreSidebarService;
        this.sidebarToggleRef = false;
        this.paymentDetails = {
            totalDue: '$12,110.55',
            bankName: 'American Bank',
            country: 'United States',
            iban: 'ETD95476213874685',
            swiftCode: 'BR91905'
        };
        this.items = [{ itemId: '', itemName: '', itemQuantity: '', itemCost: '' }];
        this.item = {
            itemName: '',
            itemQuantity: '',
            itemCost: ''
        };
        // ng2-flatpickr options
        this.dateOptions = {
            altInput: true,
            mode: 'single',
            altInputClass: 'form-control flat-picker flatpickr-input invoice-edit-input',
            defaultDate: ['2020-05-01'],
            altFormat: 'Y-n-j'
        };
        this.dueDateOptions = {
            altInput: true,
            mode: 'single',
            altInputClass: 'form-control flat-picker flatpickr-input invoice-edit-input',
            defaultDate: ['2020-05-17'],
            altFormat: 'Y-n-j'
        };
        this._unsubscribeAll = new Subject();
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
     * Toggle Sidebar
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
        this._invoiceAddService.onInvoicAddChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            let responseData = response;
            this.apiData = responseData.slice(5, 10);
        });
        this.invoiceSelect = this.apiData;
        this.invoiceSelected = this.invoiceSelect;
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
InvoiceAddComponent = __decorate([
    Component({
        selector: 'app-invoice-add',
        templateUrl: './invoice-add.component.html',
        styleUrls: ['./invoice-add.component.scss'],
        animations: [repeaterAnimation],
        encapsulation: ViewEncapsulation.None
    })
], InvoiceAddComponent);
export { InvoiceAddComponent };
//# sourceMappingURL=invoice-add.component.js.map