import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LayoutEmptyComponent = class LayoutEmptyComponent {
    constructor() { }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Layout Empty',
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
                        name: 'Layouts',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Layout Empty',
                        isLink: false
                    }
                ]
            }
        };
    }
};
LayoutEmptyComponent = __decorate([
    Component({
        selector: 'layout-empty',
        templateUrl: './layout-empty.component.html',
        styleUrls: ['./layout-empty.component.scss']
    })
], LayoutEmptyComponent);
export { LayoutEmptyComponent };
//# sourceMappingURL=layout-empty.component.js.map