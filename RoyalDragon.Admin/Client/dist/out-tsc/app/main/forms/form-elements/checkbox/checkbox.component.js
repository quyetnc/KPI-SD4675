import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/forms/form-elements/checkbox/checkbox.snippetcode';
let CheckboxComponent = class CheckboxComponent {
    constructor() {
        this._snippetCodeBasic = snippet.snippetCodeBasic;
        this._snippetCodeCustom = snippet.snippetCodeCustom;
        this._snippetCodeCustomColor = snippet.snippetCodeCustomColor;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Checkbox',
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
                        name: 'Checkbox',
                        isLink: false
                    }
                ]
            }
        };
    }
};
CheckboxComponent = __decorate([
    Component({
        selector: 'app-checkbox',
        templateUrl: './checkbox.component.html'
    })
], CheckboxComponent);
export { CheckboxComponent };
//# sourceMappingURL=checkbox.component.js.map