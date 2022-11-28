import { __decorate } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
let MenuComponent = class MenuComponent {
    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        // Set the default menu
        this._menuType = 'vertical-menu';
    }
    // Accessors
    // -----------------------------------------------------------------------------------------------------
    //Get the menu type
    get menuType() {
        return this._menuType;
    }
    set menuType(value) {
        // Remove the old class name from native element
        this._renderer.removeClass(this._elementRef.nativeElement, this.menuType);
        // Store the menuType value
        this._menuType = value;
        // Add the new class name from native element
        this._renderer.addClass(this._elementRef.nativeElement, value);
    }
};
__decorate([
    Input()
], MenuComponent.prototype, "menuType", null);
MenuComponent = __decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map