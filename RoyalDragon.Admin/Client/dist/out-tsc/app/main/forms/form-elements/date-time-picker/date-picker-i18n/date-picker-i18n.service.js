import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
const I18N_VALUES = {
    fr: {
        weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
        months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc']
    }
};
let I18n = class I18n {
    constructor() {
        this.language = 'fr';
    }
};
I18n = __decorate([
    Injectable()
], I18n);
export { I18n };
// Define custom service providing the months and weekdays translations
let CustomDatepickerI18n = class CustomDatepickerI18n extends NgbDatepickerI18n {
    constructor(_i18n) {
        super();
        this._i18n = _i18n;
    }
    getWeekdayLabel(weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    }
    getMonthShortName(month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    }
    getMonthFullName(month) {
        return this.getMonthShortName(month);
    }
    getDayAriaLabel(date) {
        return `${date.day}-${date.month}-${date.year}`;
    }
};
CustomDatepickerI18n = __decorate([
    Injectable()
], CustomDatepickerI18n);
export { CustomDatepickerI18n };
//# sourceMappingURL=date-picker-i18n.service.js.map