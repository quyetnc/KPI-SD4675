import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/forms/form-elements/radio/radio.snippetcode';
let RadioComponent = class RadioComponent {
    constructor() {
        this._snippetCodeRadioBasic = snippet.snippetCodeRadioBasic;
        this._snippetCodeRadioCustom = snippet.snippetCodeRadioCustom;
        this._snippetCodeRadioCustomColor = snippet.snippetCodeRadioCustomColor;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Radio',
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
                        name: 'Radio',
                        isLink: false
                    }
                ]
            }
        };
    }
};
RadioComponent = __decorate([
    Component({
        selector: 'app-radio',
        templateUrl: './radio.component.html'
    })
], RadioComponent);
export { RadioComponent };
//# sourceMappingURL=radio.component.js.map