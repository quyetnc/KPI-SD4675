import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import * as Waves from 'node-waves';
let RippleEffectDirective = class RippleEffectDirective {
    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    ngOnInit() {
        // Get the native element
        this._nativeElement = this._elementRef.nativeElement;
        if (
        // Attach ripple with light style i.e solid variant of button
        !this._nativeElement.className.split(' ').some(function (c) {
            return /btn-outline-.*/.test(c);
        }) &&
            !this._nativeElement.className.split(' ').some(function (c) {
                return /btn-flat-.*/.test(c);
            })) {
            Waves.attach(this._nativeElement, ['waves-float', 'waves-light']);
        }
        else {
            // Attach ripple with transparent style i.e flat, outline variant of button
            Waves.attach(this._nativeElement);
        }
    }
};
__decorate([
    Input()
], RippleEffectDirective.prototype, "wave", void 0);
RippleEffectDirective = __decorate([
    Directive({
        selector: '[rippleEffect]'
    })
], RippleEffectDirective);
export { RippleEffectDirective };
//# sourceMappingURL=core-ripple-effect.directive.js.map