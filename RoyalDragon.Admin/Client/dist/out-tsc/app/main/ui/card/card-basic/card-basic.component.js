import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CardBasicComponent = class CardBasicComponent {
    constructor() { }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this.contentHeader = {
            headerTitle: 'Basic Card',
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
                        name: 'Card',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Basic Card',
                        isLink: false
                    }
                ]
            }
        };
    }
};
CardBasicComponent = __decorate([
    Component({
        selector: 'app-basic-card',
        templateUrl: './card-basic.component.html'
    })
], CardBasicComponent);
export { CardBasicComponent };
//# sourceMappingURL=card-basic.component.js.map