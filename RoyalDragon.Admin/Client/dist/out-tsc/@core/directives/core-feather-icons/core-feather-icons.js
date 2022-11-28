import { __decorate, __param } from "tslib";
import { Directive, ElementRef, Input, Inject, ChangeDetectorRef } from '@angular/core';
import * as Feather from 'feather-icons';
let FeatherIconDirective = class FeatherIconDirective {
    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef, _changeDetector) {
        this._elementRef = _elementRef;
        this._changeDetector = _changeDetector;
    }
    ngOnChanges(changes) {
        // Get the native element
        this._nativeElement = this._elementRef.nativeElement;
        // SVG parameter
        this.name = changes.name ? changes.name.currentValue : '';
        this.size = changes.size ? changes.size.currentValue : '14'; // Set default size 14
        this.class = changes.class ? changes.class.currentValue : '';
        // Create SVG
        const svg = Feather.icons[this.name].toSvg({
            class: this.class,
            width: this.size,
            height: this.size
        });
        // Set SVG
        if (this.inner) {
            this._nativeElement.innerHTML = svg;
        }
        else {
            this._nativeElement.outerHTML = svg;
        }
        this._changeDetector.markForCheck();
    }
};
__decorate([
    Input('data-feather')
], FeatherIconDirective.prototype, "name", void 0);
__decorate([
    Input()
], FeatherIconDirective.prototype, "class", void 0);
__decorate([
    Input()
], FeatherIconDirective.prototype, "size", void 0);
__decorate([
    Input()
], FeatherIconDirective.prototype, "inner", void 0);
FeatherIconDirective = __decorate([
    Directive({
        selector: '[data-feather]'
    }),
    __param(0, Inject(ElementRef)),
    __param(1, Inject(ChangeDetectorRef))
], FeatherIconDirective);
export { FeatherIconDirective };
//# sourceMappingURL=core-feather-icons.js.map