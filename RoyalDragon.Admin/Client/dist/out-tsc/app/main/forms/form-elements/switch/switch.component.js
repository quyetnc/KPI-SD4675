import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/forms/form-elements/switch/switch.snippetcode';
let SwitchComponent = class SwitchComponent {
    constructor() {
        this._snippetCodeBasic = snippet.snippetCodeBasic;
        this._snippetCodeColors = snippet.snippetCodeColors;
        this._snippetCodeIcons = snippet.snippetCodeIcons;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Switch',
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
                        name: 'Switch',
                        isLink: false
                    }
                ]
            }
        };
    }
};
SwitchComponent = __decorate([
    Component({
        selector: 'app-switch',
        templateUrl: './switch.component.html'
    })
], SwitchComponent);
export { SwitchComponent };
//# sourceMappingURL=switch.component.js.map