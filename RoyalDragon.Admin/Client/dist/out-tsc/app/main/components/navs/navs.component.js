import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/navs/navs.snippetcode';
let NavsComponent = class NavsComponent {
    constructor() {
        // snippet code variables
        this._snippetCodeBaseNav = snippet.snippetCodeBaseNav;
        this._snippetCodeHorizontalNavWithBorder = snippet.snippetCodeHorizontalNavWithBorder;
        this._snippetCodeCenterAlignment = snippet.snippetCodeCenterAlignment;
        this._snippetCodeEndAlignment = snippet.snippetCodeEndAlignment;
        this._snippetCodeVerticalNav = snippet.snippetCodeVerticalNav;
        this._snippetCodeNavWithBorder = snippet.snippetCodeNavWithBorder;
        this._snippetCodeNavWithSquareBorder = snippet.snippetCodeNavWithSquareBorder;
        this._snippetCodeNavWithDivider = snippet.snippetCodeNavWithDivider;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Navs',
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
                        name: 'Navs',
                        isLink: false
                    }
                ]
            }
        };
    }
};
NavsComponent = __decorate([
    Component({
        selector: 'app-navs',
        templateUrl: './navs.component.html'
    })
], NavsComponent);
export { NavsComponent };
//# sourceMappingURL=navs.component.js.map