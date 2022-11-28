import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
/**
 * Sanitize HTML
 */
let SafePipe = class SafePipe {
    /**
     * Pipe Constructor
     *
     * @param _sanitizer: DomSanitezer
     */
    // tslint:disable-next-line
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * Transform
     *
     * @param value: string
     * @param type: string
     */
    transform(value, type) {
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                return this._sanitizer.bypassSecurityTrustHtml(value);
        }
    }
};
SafePipe = __decorate([
    Pipe({
        name: 'safe'
    })
], SafePipe);
export { SafePipe };
//# sourceMappingURL=safe.pipe.js.map