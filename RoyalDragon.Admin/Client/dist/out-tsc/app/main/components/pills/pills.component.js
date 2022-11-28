import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/pills/pills.snippetcode';
let PillsComponent = class PillsComponent {
    constructor() {
        // snippet code variables
        this._snippetCodeBasic = snippet.snippetCodeBasic;
        this._snippetCodeFilled = snippet.snippetCodeFilled;
        this._snippetCodeJustified = snippet.snippetCodeJustified;
        this._snippetCodeCenterAlignment = snippet.snippetCodeCenterAlignment;
        this._snippetCodeRightAlignment = snippet.snippetCodeRightAlignment;
        this._snippetCodeVerticallyStackedPills = snippet.snippetCodeVerticallyStackedPills;
        this._snippetCodePillThemes = snippet.snippetCodePillThemes;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'pills',
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
                        name: 'pills',
                        isLink: false
                    }
                ]
            }
        };
    }
};
PillsComponent = __decorate([
    Component({
        selector: 'app-pills',
        templateUrl: './pills.component.html'
    })
], PillsComponent);
export { PillsComponent };
//# sourceMappingURL=pills.component.js.map