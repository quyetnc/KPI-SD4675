import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { DatePickerI18nComponent } from 'app/main/forms/form-elements/date-time-picker/date-picker-i18n/date-picker-i18n.component';
let DatePickerI18nModule = class DatePickerI18nModule {
};
DatePickerI18nModule = __decorate([
    NgModule({
        declarations: [DatePickerI18nComponent],
        imports: [CommonModule, CoreCommonModule, NgbModule, FormsModule],
        exports: [DatePickerI18nComponent]
    })
], DatePickerI18nModule);
export { DatePickerI18nModule };
//# sourceMappingURL=date-picker-i18n.module.js.map