import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
let InvoiceListComponent = class InvoiceListComponent {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     * @param {CalendarService} _calendarService
     * @param {InvoiceListService} _invoiceListService
     */
    constructor(_invoiceListService, _coreConfigService) {
        this._invoiceListService = _invoiceListService;
        this._coreConfigService = _coreConfigService;
        this.selectedOption = 10;
        this.ColumnMode = ColumnMode;
        this.selectStatus = [
            { name: 'All', value: '' },
            { name: 'Downloaded', value: 'Downloaded' },
            { name: 'Draft', value: 'Draft' },
            { name: 'Paid', value: 'Paid' },
            { name: 'Partial Payment', value: 'Partial Payment' },
            { name: 'Past Due', value: 'Past Due' },
            { name: 'Sent', value: 'Sent' }
        ];
        this.selectedStatus = [];
        this.searchValue = '';
        // private
        this.tempData = [];
        this.previousStatusFilter = '';
        this._unsubscribeAll = new Subject();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * filterUpdate
     *
     * @param event
     */
    filterUpdate(event) {
        // Reset ng-select on search
        this.selectedStatus = this.selectStatus[0];
        const val = event.target.value.toLowerCase();
        // filter our data
        const temp = this.tempData.filter(function (d) {
            return d.client.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    /**
     * Filter By Roles
     *
     * @param event
     */
    filterByStatus(event) {
        const filter = event ? event.value : '';
        this.previousStatusFilter = filter;
        this.tempFilterData = this.filterRows(filter);
        this.rows = this.tempFilterData;
    }
    /**
     * Filter Rows
     *
     * @param statusFilter
     */
    filterRows(statusFilter) {
        // Reset search on select change
        this.searchValue = '';
        statusFilter = statusFilter.toLowerCase();
        return this.tempData.filter(row => {
            const isPartialNameMatch = row.invoiceStatus.toLowerCase().indexOf(statusFilter) !== -1 || !statusFilter;
            return isPartialNameMatch;
        });
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe config change
        this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
            // If we have zoomIn route Transition then load datatable after 450ms(Transition will finish in 400ms)
            if (config.layout.animation === 'zoomIn') {
                setTimeout(() => {
                    this._invoiceListService.onInvoiceListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
                        this.data = response;
                        this.rows = this.data;
                        this.tempData = this.rows;
                        this.tempFilterData = this.rows;
                    });
                }, 450);
            }
            else {
                this._invoiceListService.onInvoiceListChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
                    this.data = response;
                    this.rows = this.data;
                    this.tempData = this.rows;
                    this.tempFilterData = this.rows;
                });
            }
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
__decorate([
    ViewChild(DatatableComponent)
], InvoiceListComponent.prototype, "table", void 0);
InvoiceListComponent = __decorate([
    Component({
        selector: 'app-invoice-list',
        templateUrl: './invoice-list.component.html',
        styleUrls: ['./invoice-list.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], InvoiceListComponent);
export { InvoiceListComponent };
//# sourceMappingURL=invoice-list.component.js.map