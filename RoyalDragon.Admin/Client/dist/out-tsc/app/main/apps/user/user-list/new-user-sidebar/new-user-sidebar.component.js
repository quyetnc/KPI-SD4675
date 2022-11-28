import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NewUserSidebarComponent = class NewUserSidebarComponent {
    /**
     * Constructor
     *
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(_coreSidebarService) {
        this._coreSidebarService = _coreSidebarService;
    }
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    toggleSidebar(name) {
        this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    }
    /**
     * Submit
     *
     * @param form
     */
    submit(form) {
        if (form.valid) {
            this.toggleSidebar('new-user-sidebar');
        }
    }
    ngOnInit() { }
};
NewUserSidebarComponent = __decorate([
    Component({
        selector: 'app-new-user-sidebar',
        templateUrl: './new-user-sidebar.component.html'
    })
], NewUserSidebarComponent);
export { NewUserSidebarComponent };
//# sourceMappingURL=new-user-sidebar.component.js.map