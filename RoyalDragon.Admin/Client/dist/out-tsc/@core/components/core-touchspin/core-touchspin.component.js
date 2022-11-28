import { __decorate } from "tslib";
import { Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
let CoreTouchspinComponent = class CoreTouchspinComponent {
    constructor() {
        this.numberValue = 0;
        this.iconChevron = false;
        this.disabledValue = false;
        this.size = '';
        this.color = '';
        this.maxValue = 9999;
        this.minValue = 0;
        this.onChange = new EventEmitter();
        this.disabledValueIncrement = false;
        this.disabledValueDecrement = false;
    }
    inputChange(inputValue) {
        if (inputValue == this.maxValue || inputValue > this.maxValue) {
            this.disabledValueIncrement = true;
        }
        else {
            this.disabledValueIncrement = false;
        }
        if (inputValue == this.minValue || inputValue < this.minValue) {
            this.disabledValueDecrement = true;
        }
        else {
            this.disabledValueDecrement = false;
        }
        this.emitChange(inputValue);
    }
    increment() {
        if (this.stepValue == undefined) {
            this.numberValue += 1;
        }
        else {
            this.numberValue += this.stepValue;
        }
        this.emitChange(this.numberValue);
        if (!(this.minValue == undefined || this.maxValue == undefined)) {
            if (this.numberValue == this.maxValue || this.numberValue > this.maxValue) {
                this.disabledValueIncrement = true;
            }
            else {
                this.disabledValueIncrement = false;
            }
            if (this.numberValue > this.minValue) {
                this.disabledValueDecrement = false;
            }
            else {
                this.disabledValueDecrement = true;
            }
        }
    }
    decrement() {
        if (this.stepValue == undefined) {
            this.numberValue -= 1;
        }
        else {
            this.numberValue -= this.stepValue;
        }
        this.emitChange(this.numberValue);
        if (!(this.minValue == undefined || this.maxValue == undefined)) {
            if (this.numberValue == this.minValue || this.numberValue < this.minValue) {
                this.disabledValueDecrement = true;
            }
            else {
                this.disabledValueDecrement = false;
            }
            if (this.numberValue < this.maxValue) {
                this.disabledValueIncrement = false;
            }
            else {
                this.disabledValueIncrement = true;
            }
        }
    }
    /**
     * Emit changed value
     * @param value
     */
    emitChange(value) {
        this.onChange.emit(value);
    }
    ngOnInit() {
        this.disabledValueIncrement = this.disabledValue;
        this.disabledValueDecrement = this.disabledValue;
        // Check if current value is equal to min / max value then disable button respectively
        if (this.numberValue === this.minValue) {
            this.disabledValueDecrement = true;
        }
        else if (this.numberValue === this.maxValue) {
            this.disabledValueIncrement = true;
        }
    }
};
__decorate([
    Input('numberValue')
], CoreTouchspinComponent.prototype, "numberValue", void 0);
__decorate([
    Input('iconChevron')
], CoreTouchspinComponent.prototype, "iconChevron", void 0);
__decorate([
    Input('disable')
], CoreTouchspinComponent.prototype, "disabledValue", void 0);
__decorate([
    Input('size')
], CoreTouchspinComponent.prototype, "size", void 0);
__decorate([
    Input('color')
], CoreTouchspinComponent.prototype, "color", void 0);
__decorate([
    Input('stepValue')
], CoreTouchspinComponent.prototype, "stepValue", void 0);
__decorate([
    Input('maxValue')
], CoreTouchspinComponent.prototype, "maxValue", void 0);
__decorate([
    Input('minValue')
], CoreTouchspinComponent.prototype, "minValue", void 0);
__decorate([
    Output()
], CoreTouchspinComponent.prototype, "onChange", void 0);
CoreTouchspinComponent = __decorate([
    Component({
        selector: 'core-touchspin',
        templateUrl: './core-touchspin.component.html',
        styleUrls: ['./core-touchspin.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], CoreTouchspinComponent);
export { CoreTouchspinComponent };
//# sourceMappingURL=core-touchspin.component.js.map