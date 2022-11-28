import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TodoListComponent = class TodoListComponent {
    /**
     * Constructor
     *
     * @param {TodoService} _todoService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(_dragulaService, _todoService, _coreSidebarService) {
        this._dragulaService = _dragulaService;
        this._todoService = _todoService;
        this._coreSidebarService = _coreSidebarService;
        // Drag And Drop With Handle
        _dragulaService.destroy('todo-tasks-drag-area');
        _dragulaService.createGroup('todo-tasks-drag-area', {
            moves: function (el, container, handle) {
                return handle.classList.contains('drag-icon');
            }
        });
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle Sidebar
     *
     * @param nameRef
     */
    toggleSidebar(nameRef) {
        this._coreSidebarService.getSidebarRegistry(nameRef).toggleOpen();
    }
    /**
     * Update Sort
     *
     * @param sortRef
     */
    updateSort(sortRef) {
        this._todoService.sortTodos(sortRef);
    }
    /**
     * Update Query
     *
     * @param queryRef
     */
    updateQuery(queryRef) {
        this._todoService.getTodosBySearch(queryRef.target.value);
    }
    /**
     * Open Todo
     *
     * @param idRef
     */
    openTodo(idRef) {
        this._todoService.setCurrentTodo(idRef);
        this._coreSidebarService.getSidebarRegistry('todo-sidebar-right').toggleOpen();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe Todos change
        this._todoService.onTodoDataChange.subscribe(response => (this.todos = response));
    }
};
TodoListComponent = __decorate([
    Component({
        selector: 'app-todo-list',
        templateUrl: './todo-list.component.html'
    })
], TodoListComponent);
export { TodoListComponent };
//# sourceMappingURL=todo-list.component.js.map