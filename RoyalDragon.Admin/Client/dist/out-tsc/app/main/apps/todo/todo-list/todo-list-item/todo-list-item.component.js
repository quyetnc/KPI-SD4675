import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let TodoListItemComponent = class TodoListItemComponent {
    /**
     * Constructor
     *
     * @param {TodoService} _todoService
     */
    constructor(_todoService) {
        this._todoService = _todoService;
    }
    /**
     *
     * @param stateRef
     */
    checkboxStateChange(stateRef) {
        this.todo.completed = stateRef;
        this._todoService.updateCurrentTodo(this.todo);
    }
    ngOnInit() { }
};
__decorate([
    Input()
], TodoListItemComponent.prototype, "todo", void 0);
TodoListItemComponent = __decorate([
    Component({
        selector: 'app-todo-list-item',
        templateUrl: './todo-list-item.component.html'
    })
], TodoListItemComponent);
export { TodoListItemComponent };
//# sourceMappingURL=todo-list-item.component.js.map