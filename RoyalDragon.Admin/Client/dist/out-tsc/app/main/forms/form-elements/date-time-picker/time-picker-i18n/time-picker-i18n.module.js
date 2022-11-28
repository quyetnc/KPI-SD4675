import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTimepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { TimePickerI18nComponent } from 'app/main/forms/form-elements/date-time-picker/time-picker-i18n/time-picker-i18n.component';
import { CustomTimepickerI18n, I18n } from 'app/main/forms/form-elements/date-time-picker/time-picker-i18n/time-picker-i18n.service';
let TimePickerI18nModule = class TimePickerI18nModule {
};
TimePickerI18nModule = __decorate([
    NgModule({
        declarations: [TimePickerI18nComponent],
        imports: [CommonModule, NgbModule, FormsModule],
        exports: [TimePickerI18nComponent],
        providers: [I18n, { provide: NgbTimepickerI18n, useClass: CustomTimepickerI18n }] // define custom NgbTimepickerI18n provider
    })
], TimePickerI18nModule);
export { TimePickerI18nModule };
//# sourceMappingURL=time-picker-i18n.module.js.map