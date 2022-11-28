import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/forms/form-elements/input-groups/input-groups.snippetcode';
let InputGroupsComponent = class InputGroupsComponent {
    constructor() {
        this.basicPwdShow = false;
        this.mergedPwdShow = false;
        // Snippet Code Variables
        this._snippetCodeBasic = snippet.snippetCodeBasic;
        this._snippetCodeMerged = snippet.snippetCodeMerged;
        this._snippetCodeSizing = snippet.snippetCodeSizing;
        this._snippetCodeCheckBox = snippet.snippetCodeCheckBox;
        this._snippetCodeButton = snippet.snippetCodeButton;
        this._snippetCodeDropdown = snippet.snippetCodeDropdown;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Input Groups',
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
                        name: 'Input Groups',
                        isLink: false
                    }
                ]
            }
        };
    }
};
InputGroupsComponent = __decorate([
    Component({
        selector: 'app-input-groups',
        templateUrl: './input-groups.component.html'
    })
], InputGroupsComponent);
export { InputGroupsComponent };
//# sourceMappingURL=input-groups.component.js.map