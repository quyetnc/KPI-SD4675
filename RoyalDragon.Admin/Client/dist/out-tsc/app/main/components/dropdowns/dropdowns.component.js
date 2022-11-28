import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/dropdowns/dropdowns.snippetcode';
let DropdownsComponent = class DropdownsComponent {
    constructor() {
        // snippet code variables
        this._snippetCodeBasic = snippet.snippetCodeBasic;
        this._snippetCodeSplitDropdowns = snippet.snippetCodeSplitDropdowns;
        this._snippetCodeOutline = snippet.snippetCodeOutline;
        this._snippetCodeFlat = snippet.snippetCodeFlat;
        this._snippetCodeGradient = snippet.snippetCodeGradient;
        this._snippetCodeSizes = snippet.snippetCodeSizes;
        this._snippetCodeDirections = snippet.snippetCodeDirections;
        this._snippetCodeVariations = snippet.snippetCodeVariations;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Dropdowns',
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
                        name: 'Dropdowns',
                        isLink: false
                    }
                ]
            }
        };
    }
};
DropdownsComponent = __decorate([
    Component({
        selector: 'app-dropdowns',
        templateUrl: './dropdowns.component.html'
    })
], DropdownsComponent);
export { DropdownsComponent };
//# sourceMappingURL=dropdowns.component.js.map