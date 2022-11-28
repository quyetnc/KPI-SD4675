import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/divider/divider.snippetcode';
let DividerComponent = class DividerComponent {
    constructor() {
        this._snippetCodeDefault = snippet.snippetCodeDefault;
        this._snippetCodeText = snippet.snippetCodeText;
        this._snippetCodeTextPosition = snippet.snippetCodeTextPosition;
        this._snippetCodeColors = snippet.snippetCodeColors;
        this._snippetCodeIcons = snippet.snippetCodeIcons;
        this._snippetCodeStyle = snippet.snippetCodeStyle;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Divider',
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
                        name: 'Components',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Divider',
                        isLink: false
                    }
                ]
            }
        };
    }
};
DividerComponent = __decorate([
    Component({
        selector: 'app-divider',
        templateUrl: './divider.component.html'
    })
], DividerComponent);
export { DividerComponent };
//# sourceMappingURL=divider.component.js.map