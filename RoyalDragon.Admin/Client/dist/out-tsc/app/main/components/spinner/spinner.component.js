import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import * as snippet from 'app/main/components/spinner/spinner.snippetcode';
let SpinnerComponent = class SpinnerComponent {
    constructor() {
        // snippet code variables
        this._snippetCodeBorder = snippet.snippetCodeBorder;
        this._snippetCodeColored = snippet.snippetCodeColored;
        this._snippetCodeGrowing = snippet.snippetCodeGrowing;
        this._snippetCodeColoredGrowing = snippet.snippetCodeColoredGrowing;
        this._snippetCodeFlex = snippet.snippetCodeFlex;
        this._snippetCodeFloat = snippet.snippetCodeFloat;
        this._snippetCodeTextAlignment = snippet.snippetCodeTextAlignment;
        this._snippetCodeSizes = snippet.snippetCodeSizes;
        this._snippetCodeButtons = snippet.snippetCodeButtons;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Spinner',
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
                        name: 'Spinner',
                        isLink: false
                    }
                ]
            }
        };
    }
};
SpinnerComponent = __decorate([
    Component({
        selector: 'app-spinner',
        templateUrl: './spinner.component.html',
        encapsulation: ViewEncapsulation.None
    })
], SpinnerComponent);
export { SpinnerComponent };
//# sourceMappingURL=spinner.component.js.map