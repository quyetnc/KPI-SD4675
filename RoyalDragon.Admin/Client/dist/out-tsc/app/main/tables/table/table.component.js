import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TableComponent = class TableComponent {
    constructor() { }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Bootstrap Tables',
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
                        name: 'Table',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Bootstrap Tables',
                        isLink: false
                    }
                ]
            }
        };
    }
};
TableComponent = __decorate([
    Component({
        selector: 'app-table',
        templateUrl: './table.component.html'
    })
], TableComponent);
export { TableComponent };
//# sourceMappingURL=table.component.js.map