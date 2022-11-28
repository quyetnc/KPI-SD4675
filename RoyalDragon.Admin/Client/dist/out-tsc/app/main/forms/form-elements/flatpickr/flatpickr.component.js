import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { basicDateSnippetCode, dateTimeSnippetCode, DefaultDateSnippetCode, DateRangeSnippetCode, timeSnippetCode, customDateSnippetCode, multipleDateSnippetCode } from 'app/main/forms/form-elements/flatpickr/flatpickr.snippetcode';
let FlatpickrComponent = class FlatpickrComponent {
    constructor() {
        this.basicDateOptions = {
            altInput: true
        };
        this.dateTimeOptions = {
            altInput: true,
            enableTime: true
        };
        this.DefaultDateOptions = {
            defaultDate: '2019-03-19',
            altInput: true
        };
        this.DateRangeOptions = {
            altInput: true,
            mode: 'range'
        };
        this.timeOptions = {
            enableTime: true,
            noCalendar: true,
            altInput: true
        };
        this.customDateOptions = {
            altFormat: 'j-m-Y',
            altInput: true
        };
        this.multipleDateOptions = {
            altInput: true,
            mode: 'multiple'
        };
        // snippet code variables
        this._basicDateSnippetCode = basicDateSnippetCode;
        this._dateTimeSnippetCode = dateTimeSnippetCode;
        this._DefaultDateSnippetCode = DefaultDateSnippetCode;
        this._DateRangeSnippetCode = DateRangeSnippetCode;
        this._timeSnippetCode = timeSnippetCode;
        this._customDateSnippetCode = customDateSnippetCode;
        this._multipleDateSnippetCode = multipleDateSnippetCode;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Flatpickr',
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
                        name: 'Extensions',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Flatpickr',
                        isLink: false
                    }
                ]
            }
        };
    }
};
FlatpickrComponent = __decorate([
    Component({
        selector: 'app-flatpickr',
        templateUrl: './flatpickr.component.html',
        styleUrls: ['./flatpickr.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], FlatpickrComponent);
export { FlatpickrComponent };
//# sourceMappingURL=flatpickr.component.js.map