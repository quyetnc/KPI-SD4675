import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TodoMainSidebarComponent = class TodoMainSidebarComponent {
    /**
     * Constructor
     *
     * @param {TodoService} _todoService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(_coreSidebarService, _todoService) {
        this._coreSidebarService = _coreSidebarService;
        this._todoService = _todoService;
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle Sidebar
     *
     * @param nameRef
     */
    createNewTodo(nameRef, closeNameRef) {
        this._coreSidebarService.getSidebarRegistry(nameRef).toggleOpen();
        this._coreSidebarService.getSidebarRegistry(closeNameRef).toggleOpen();
        this._todoService.createNewTodo();
    }
    /**
     * Toggle Sidebar
     *
     * @param nameRef
     */
    toggleSidebar(nameRef) {
        this._coreSidebarService.getSidebarRegistry(nameRef).toggleOpen();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this._todoService.onFiltersChange.subscribe(response => (this.filters = response));
        this._todoService.onTagsChange.subscribe(response => (this.tags = response));
    }
};
TodoMainSidebarComponent = __decorate([
    Component({
        selector: 'app-todo-main-sidebar',
        templateUrl: './todo-main-sidebar.component.html'
    })
], TodoMainSidebarComponent);
export { TodoMainSidebarComponent };
//# sourceMappingURL=todo-main-sidebar.component.js.map