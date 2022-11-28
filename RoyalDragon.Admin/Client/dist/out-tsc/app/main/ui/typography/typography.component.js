import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TypographyComponent = class TypographyComponent {
    constructor() { }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Typography',
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
                        name: 'UI',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Typography',
                        isLink: false
                    }
                ]
            }
        };
    }
};
TypographyComponent = __decorate([
    Component({
        selector: 'typography',
        templateUrl: './typography.component.html'
    })
], TypographyComponent);
export { TypographyComponent };
//# sourceMappingURL=typography.component.js.map