import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import * as snippet from 'app/main/forms/form-elements/date-time-picker/date-time-picker.snippetcode';
let DateTimePickerComponent = class DateTimePickerComponent {
    /**
     * Constructor
     *
     * @param {NgbCalendar} calendar
     * @param {NgbDateParserFormatter} formatter
     */
    constructor(calendar, formatter) {
        this.calendar = calendar;
        this.formatter = formatter;
        this._snippetCodeBasicDP = snippet.snippetCodeBasicDP;
        this._snippetCodeDisabledDP = snippet.snippetCodeDisabledDP;
        this._snippetCodeMinMaxDP = snippet.snippetCodeMinMaxDP;
        this._snippetCodeCustomFooterDP = snippet.snippetCodeCustomFooterDP;
        this._snippetCodeI18n = snippet.snippetCodeI18n;
        this._snippetCodeCustomDay = snippet.snippetCodeCustomDay;
        this._snippetCodeRangeSelectionDP = snippet.snippetCodeRangeSelectionDP;
        this._snippetCodeBasicTP = snippet.snippetCodeBasicTP;
        this._snippetCodeMeridianTP = snippet.snippetCodeMeridianTP;
        this._snippetCodeCustomTP = snippet.snippetCodeCustomTP;
        this._snippetCodeSpinnerTP = snippet.snippetCodeSpinnerTP;
        this._snippetCodeCustomValidationTP = snippet.snippetCodeCustomValidationTP;
        this._snippetCodei18nTP = snippet.snippetCodei18nTP;
        // Disabled Date Picker
        this.disabled = true;
        this.today = this.calendar.getToday();
        // Range selection Date Picker
        this.hoveredDate = null;
        // Basic Time Picker
        this.basicTP = { hour: 13, minute: 30 };
        // Meridian Time Picker
        this.meridianTPdata = { hour: 13, minute: 30 };
        this.meridianTP = true;
        // Custom Time Picker
        this.customTPtime = { hour: 13, minute: 30, second: 30 };
        this.customTPseconds = true;
        // Spinner Time Picker
        this.spinnerTPtime = { hour: 13, minute: 30 };
        this.spinnerTP = true;
        // Custom Validation Time Picker
        this.customValidationTP = new UntypedFormControl('', (control) => {
            const value = control.value;
            if (!value) {
                return null;
            }
            if (value.hour < 12) {
                return { tooEarly: true };
            }
            if (value.hour > 13) {
                return { tooLate: true };
            }
            return null;
        });
        /**
         * Custom Day Date Picker
         *
         * @param date
         * @param current
         */
        this.isDisabled = (date, current) => date.month !== current.month;
        this.isWeekend = (date) => this.calendar.getWeekday(date) >= 6;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    /**
     * Range selection Date Picker
     *
     * @param date
     */
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
    /**
     * Is Hovered
     *
     * @param date
     */
    isHovered(date) {
        return (this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate));
    }
    /**
     * Is Inside
     *
     * @param date
     */
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    /**
     *  Is Range
     *
     * @param date
     */
    isRange(date) {
        return (date.equals(this.fromDate) ||
            (this.toDate && date.equals(this.toDate)) ||
            this.isInside(date) ||
            this.isHovered(date));
    }
    /**
     * Meridian Time Picker
     */
    meridianTPtoggle() {
        this.meridianTP = !this.meridianTP;
    }
    /**
     * Custom Time Picker
     */
    customTPtoggleSeconds() {
        this.customTPseconds = !this.customTPseconds;
    }
    /**
     * Spinner Time Picker
     */
    spinnerTPtoggle() {
        this.spinnerTP = !this.spinnerTP;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Date & Time Picker',
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
                        name: 'Form Elements',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Date & Time Picker',
                        isLink: false
                    }
                ]
            }
        };
    }
};
DateTimePickerComponent = __decorate([
    Component({
        selector: 'app-date-time-picker',
        templateUrl: './date-time-picker.component.html',
        styleUrls: ['./date-time-picker.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], DateTimePickerComponent);
export { DateTimePickerComponent };
//# sourceMappingURL=date-time-picker.component.js.map