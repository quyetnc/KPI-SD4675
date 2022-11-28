import { __decorate } from "tslib";
import { Component } from '@angular/core';
let BoxedLayoutComponent = class BoxedLayoutComponent {
    constructor() { }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Layout Boxed',
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
                        name: 'Layout Boxed',
                        isLink: false
                    }
                ]
            }
        };
    }
};
BoxedLayoutComponent = __decorate([
    Component({
        selector: 'app-boxed-layout',
        templateUrl: './boxed-layout.component.html',
        styleUrls: ['./boxed-layout.component.scss']
    })
], BoxedLayoutComponent);
export { BoxedLayoutComponent };
//# sourceMappingURL=boxed-layout.component.js.map