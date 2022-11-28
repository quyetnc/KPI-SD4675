import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CoreTranslationService = class CoreTranslationService {
    /**
     * Constructor
     *
     * @param {TranslateService} _translateService
     */
    constructor(_translateService) {
        this._translateService = _translateService;
    }
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Translate
     *
     * @param {Locale} args
     */
    translate(...args) {
        const locales = [...args];
        locales.forEach(locale => {
            // use setTranslation() with the third argument value as true to append translations instead of replacing them
            this._translateService.setTranslation(locale.lang, locale.data, true);
        });
    }
};
CoreTranslationService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CoreTranslationService);
export { CoreTranslationService };
//# sourceMappingURL=translation.service.js.map