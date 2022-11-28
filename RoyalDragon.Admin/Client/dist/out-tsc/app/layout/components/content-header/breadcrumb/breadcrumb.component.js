import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let BreadcrumbComponent = class BreadcrumbComponent {
    constructor() { }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // concatenate default properties with passed properties
        this.breadcrumb = this.breadcrumb;
    }
};
__decorate([
    Input()
], BreadcrumbComponent.prototype, "breadcrumb", void 0);
BreadcrumbComponent = __decorate([
    Component({
        selector: 'app-breadcrumb',
        templateUrl: './breadcrumb.component.html'
    })
], BreadcrumbComponent);
export { BreadcrumbComponent };
//# sourceMappingURL=breadcrumb.component.js.map