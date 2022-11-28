import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { I18n, CustomDatepickerI18n } from 'app/main/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.service';
let DatePickerI18nComponent = class DatePickerI18nComponent {
    constructor() { }
    ngOnInit() { }
};
DatePickerI18nComponent = __decorate([
    Component({
        selector: 'date-picker-i18n',
        templateUrl: './date-picker-i18n.component.html',
        providers: [I18n, { provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n }] // define custom NgbDatepickerI18n provider
    })
], DatePickerI18nComponent);
export { DatePickerI18nComponent };
//# sourceMappingURL=date-picker-i18n.component.js.map