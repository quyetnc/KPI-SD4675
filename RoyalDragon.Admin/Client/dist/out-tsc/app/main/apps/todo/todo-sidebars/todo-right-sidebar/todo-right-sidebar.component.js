import { __decorate } from "tslib";
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Todo } from 'app/main/apps/todo/todo.model';
let TodoRightSidebarComponent = class TodoRightSidebarComponent {
    /**
     * Constructor
     *
     * @param {TodoService} _todoService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(_todoService, _coreSidebarService) {
        this._todoService = _todoService;
        this._coreSidebarService = _coreSidebarService;
        this.dueDateOptions = {
            altInput: true,
            mode: 'single',
            altInputClass: 'form-control flat-picker flatpickr-input invoice-edit-input',
            altFormat: 'F j, Y',
            dateFormat: 'Y-m-d'
        };
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Close Sidebar
     */
    closeSidebar() {
        this._coreSidebarService.getSidebarRegistry('todo-sidebar-right').toggleOpen();
    }
    /**
     * Update Todo
     */
    updateTodo() {
        //! Fix: Temp fix till ng2-flatpicker support ng-modal (Getting NG0100: Expression has changed after it was checked error if we use ng-model with ng2-flatpicker)
        this.todo.dueDate = this.dueDateRef.flatpickrElement.nativeElement.children[0].value;
        this._todoService.updateCurrentTodo(this.todo);
        this.closeSidebar();
    }
    /**
     * Add Todo
     */
    addTodo(todoForm) {
        if (todoForm.valid) {
            //! Fix: Temp fix till ng2-flatpicker support ng-modal
            this.todo.dueDate = this.dueDateRef.flatpickrElement.nativeElement.children[0].value;
            this._todoService.updateCurrentTodo(this.todo);
            this.closeSidebar();
        }
    }
    /**
     * Delete Todo
     */
    deleteTodo() {
        this.todo.deleted = !this.todo.deleted;
        this._todoService.updateCurrentTodo(this.todo);
        this.closeSidebar();
    }
    /**
     * Toggle Complete
     */
    toggleComplete() {
        this.todo.completed = !this.todo.completed;
        this._todoService.updateCurrentTodo(this.todo);
        this.closeSidebar();
    }
    /**
     * Toggle Important
     */
    toggleImportant() {
        this.todo.important = !this.todo.important;
        this._todoService.updateCurrentTodo(this.todo);
        this.closeSidebar();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this._todoService.onCurrentTodoChange.subscribe(response => {
            if (Object.keys(response).length > 0) {
                this.todo = response;
                this.isDataEmpty = false;
            }
            else {
                this.todo = new Todo();
                this.isDataEmpty = true;
            }
        });
        this._todoService.onTagsChange.subscribe(response => {
            this.selectTags = response.map(tagRef => {
                return tagRef.handle;
            });
        });
        this._todoService.onAssigneeChange.subscribe(assigneeRef => {
            this.selectAssignee = assigneeRef;
        });
    }
};
__decorate([
    ViewChild('dueDateRef')
], TodoRightSidebarComponent.prototype, "dueDateRef", void 0);
TodoRightSidebarComponent = __decorate([
    Component({
        selector: 'app-todo-right-sidebar',
        templateUrl: './todo-right-sidebar.component.html',
        encapsulation: ViewEncapsulation.None
    })
], TodoRightSidebarComponent);
export { TodoRightSidebarComponent };
//# sourceMappingURL=todo-right-sidebar.component.js.map