import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/forms/form-elements/input/input.snippetcode';
let InputComponent = class InputComponent {
    constructor() {
        this._snippetCodeBasicInputs = snippet.snippetCodeBasicInputs;
        this._snippetCodeSizingOptions = snippet.snippetCodeSizingOptions;
        this._snippetCodeHorizontalFormLabelSizing = snippet.snippetCodeHorizontalFormLabelSizing;
        this._snippetCodeFloatingLabelInputs = snippet.snippetCodeFloatingLabelInputs;
        this._snippetCodeFileInput = snippet.snippetCodeFileInput;
        this._snippetCodeInputValidationStates = snippet.snippetCodeInputValidationStates;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Input',
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
                        name: 'Input',
                        isLink: false
                    }
                ]
            }
        };
    }
};
InputComponent = __decorate([
    Component({
        selector: 'app-input',
        templateUrl: './input.component.html'
    })
], InputComponent);
export { InputComponent };
//# sourceMappingURL=input.component.js.map