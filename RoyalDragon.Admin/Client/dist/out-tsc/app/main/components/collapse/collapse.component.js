import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/collapse/collapse.snippetcode';
let CollapseComponent = class CollapseComponent {
    constructor() {
        this.isCollapsed5 = true;
        // snippet code variables
        this._snippetCodeCollapset = snippet.snippetCodeCollapset;
        this._snippetCodeAccordion = snippet.snippetCodeAccordion;
        this._snippetCodeButtonCollapse = snippet.snippetCodeButtonCollapse;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Collapse',
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
                        name: 'Collapse',
                        isLink: false
                    }
                ]
            }
        };
    }
};
CollapseComponent = __decorate([
    Component({
        selector: 'app-collapse',
        templateUrl: './collapse.component.html'
    })
], CollapseComponent);
export { CollapseComponent };
//# sourceMappingURL=collapse.component.js.map