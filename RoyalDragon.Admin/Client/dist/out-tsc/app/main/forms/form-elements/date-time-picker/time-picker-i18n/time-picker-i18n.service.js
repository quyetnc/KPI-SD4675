import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { NgbTimepickerI18n } from '@ng-bootstrap/ng-bootstrap';
const I18N_VALUES = {
    el: { periods: ['πμ', 'μμ'] }
    // other languages you would support
};
// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
let I18n = class I18n {
    constructor() {
        this.language = 'el';
    }
};
I18n = __decorate([
    Injectable()
], I18n);
export { I18n };
// Define custom service providing the "AM" and "PM" translations.
let CustomTimepickerI18n = class CustomTimepickerI18n extends NgbTimepickerI18n {
    constructor(_i18n) {
        super();
        this._i18n = _i18n;
    }
    getMorningPeriod() {
        return I18N_VALUES[this._i18n.language].periods[0];
    }
    getAfternoonPeriod() {
        return I18N_VALUES[this._i18n.language].periods[1];
    }
};
CustomTimepickerI18n = __decorate([
    Injectable()
], CustomTimepickerI18n);
export { CustomTimepickerI18n };
//# sourceMappingURL=time-picker-i18n.service.js.map