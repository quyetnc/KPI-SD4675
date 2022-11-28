import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import { locale as german } from 'app/main/tables/datatables/i18n/de';
import { locale as english } from 'app/main/tables/datatables/i18n/en';
import { locale as french } from 'app/main/tables/datatables/i18n/fr';
import { locale as portuguese } from 'app/main/tables/datatables/i18n/pt';
import * as snippet from 'app/main/tables/datatables/datatables.snippetcode';
let DatatablesComponent = class DatatablesComponent {
    /**
     * Constructor
     *
     * @param {DatatablesService} _datatablesService
     * @param {CoreTranslationService} _coreTranslationService
     */
    constructor(_datatablesService, _coreTranslationService) {
        this._datatablesService = _datatablesService;
        this._coreTranslationService = _coreTranslationService;
        this.tempData = [];
        this.selected = [];
        this.basicSelectedOption = 10;
        this.ColumnMode = ColumnMode;
        this.expanded = {};
        this.editingName = {};
        this.editingStatus = {};
        this.editingAge = {};
        this.editingSalary = {};
        this.chkBoxSelected = [];
        this.SelectionType = SelectionType;
        // snippet code variables
        this._snippetCodeKitchenSink = snippet.snippetCodeKitchenSink;
        this._snippetCodeInlineEditing = snippet.snippetCodeInlineEditing;
        this._snippetCodeRowDetails = snippet.snippetCodeRowDetails;
        this._snippetCodeCustomCheckbox = snippet.snippetCodeCustomCheckbox;
        this._snippetCodeResponsive = snippet.snippetCodeResponsive;
        this._snippetCodeMultilangual = snippet.snippetCodeMultilangual;
        this._unsubscribeAll = new Subject();
        this._coreTranslationService.translate(english, french, german, portuguese);
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Inline editing Name
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateName(event, cell, rowIndex) {
        this.editingName[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Inline editing Age
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateAge(event, cell, rowIndex) {
        this.editingAge[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Inline editing Salary
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateSalary(event, cell, rowIndex) {
        this.editingSalary[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Inline editing Status
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateStatus(event, cell, rowIndex) {
        this.editingStatus[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Search (filter)
     *
     * @param event
     */
    filterUpdate(event) {
        const val = event.target.value.toLowerCase();
        // filter our data
        const temp = this.tempData.filter(function (d) {
            return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.kitchenSinkRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    /**
     * Row Details Toggle
     *
     * @param row
     */
    rowDetailsToggleExpand(row) {
        this.tableRowDetails.rowDetail.toggleExpandRow(row);
    }
    /**
     * For ref only, log selected values
     *
     * @param selected
     */
    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }
    /**
     * For ref only, log activate events
     *
     * @param selected
     */
    onActivate(event) {
        // console.log('Activate Event', event);
    }
    /**
     * Custom Chkbox On Select
     *
     * @param { selected }
     */
    customChkboxOnSelect({ selected }) {
        this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
        this.chkBoxSelected.push(...selected);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.tempData = this.rows;
            this.kitchenSinkRows = this.rows;
            this.exportCSVData = this.rows;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Datatables',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Forms & Tables',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Datatables',
                        isLink: false
                    }
                ]
            }
        };
    }
};
__decorate([
    ViewChild(DatatableComponent)
], DatatablesComponent.prototype, "table", void 0);
__decorate([
    ViewChild('tableRowDetails')
], DatatablesComponent.prototype, "tableRowDetails", void 0);
DatatablesComponent = __decorate([
    Component({
        selector: 'app-datatables',
        templateUrl: './datatables.component.html',
        styleUrls: ['./datatables.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], DatatablesComponent);
export { DatatablesComponent };
//# sourceMappingURL=datatables.component.js.map