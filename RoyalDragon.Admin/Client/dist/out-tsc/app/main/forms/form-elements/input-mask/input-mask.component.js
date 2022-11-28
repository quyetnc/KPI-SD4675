import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/forms/form-elements/input-mask/input-mask.snippetcode';
let InputMaskComponent = class InputMaskComponent {
    constructor() {
        this._snippetCodeCredit = snippet.snippetCodeCredit;
        this._snippetCodePhone = snippet.snippetCodePhone;
        this._snippetCodeDate = snippet.snippetCodeDate;
        this._snippetCodeTime = snippet.snippetCodeTime;
        this._snippetCodeNumeral = snippet.snippetCodeNumeral;
        this._snippetCodeSecure = snippet.snippetCodeSecure;
        this._snippetCodePrefix = snippet.snippetCodePrefix;
        this._snippetCodeSuffix = snippet.snippetCodeSuffix;
        this._snippetCodeBlocks = snippet.snippetCodeBlocks;
        this._snippetCodeDelimiters = snippet.snippetCodeDelimiters;
    }
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Input Mask',
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
                        name: 'Input Mask',
                        isLink: false
                    }
                ]
            }
        };
    }
};
InputMaskComponent = __decorate([
    Component({
        selector: 'app-input-mask',
        templateUrl: './input-mask.component.html'
    })
], InputMaskComponent);
export { InputMaskComponent };
//# sourceMappingURL=input-mask.component.js.map