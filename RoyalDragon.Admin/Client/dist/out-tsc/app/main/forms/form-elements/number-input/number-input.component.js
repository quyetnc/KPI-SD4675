import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import * as snippet from 'app/main/forms/form-elements/number-input/number-input.snippetcode';
let NumberInputComponent = class NumberInputComponent {
    constructor() {
        this._snippetCodeTouchspin = snippet.snippetCodeTouchspin;
        this._snippetCodeSize = snippet.snippetCodeSize;
        this._snippetCodeMinMax = snippet.snippetCodeMinMax;
        this._snippetCodeStep = snippet.snippetCodeStep;
        this._snippetCodeColors = snippet.snippetCodeColors;
    }
    /***
     * On touchspin count change
     */
    countChange(value) {
        // this.dateValue = value;
        console.log(value);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Number Input',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Form Elements',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Number Input',
                        isLink: false
                    }
                ]
            }
        };
    }
};
NumberInputComponent = __decorate([
    Component({
        selector: 'app-number-input',
        templateUrl: './number-input.component.html',
        encapsulation: ViewEncapsulation.None
    })
], NumberInputComponent);
export { NumberInputComponent };
//# sourceMappingURL=number-input.component.js.map