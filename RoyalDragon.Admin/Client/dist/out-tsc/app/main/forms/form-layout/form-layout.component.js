import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/forms/form-layout/form-layout.snippetcode';
let FormLayoutComponent = class FormLayoutComponent {
    constructor() {
        this._snippetCodeHorizontal = snippet.snippetCodeHorizontal;
        this._snippetCodeIcons = snippet.snippetCodeIcons;
        this._snippetCodeVertical = snippet.snippetCodeVertical;
        this._snippetCodeVertiacalIcons = snippet.snippetCodeVertiacalIcons;
        this._snippetCodeMultiple = snippet.snippetCodeMultiple;
    }
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Form Layouts',
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
                        name: 'Forms',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Form Layouts',
                        isLink: false
                    }
                ]
            }
        };
    }
};
FormLayoutComponent = __decorate([
    Component({
        selector: 'app-form-layout',
        templateUrl: './form-layout.component.html'
    })
], FormLayoutComponent);
export { FormLayoutComponent };
//# sourceMappingURL=form-layout.component.js.map