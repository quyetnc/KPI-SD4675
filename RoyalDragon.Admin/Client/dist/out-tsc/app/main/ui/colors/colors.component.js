import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let ColorsComponent = class ColorsComponent {
    constructor() { }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Colors',
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
                        name: 'Colors',
                        isLink: false
                    }
                ]
            }
        };
    }
};
ColorsComponent = __decorate([
    Component({
        selector: 'app-colors',
        templateUrl: './colors.component.html',
        styleUrls: ['./colors.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], ColorsComponent);
export { ColorsComponent };
//# sourceMappingURL=colors.component.js.map