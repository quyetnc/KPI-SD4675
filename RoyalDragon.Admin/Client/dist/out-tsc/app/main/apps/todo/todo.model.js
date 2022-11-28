export class Todo {
    constructor() {
        this.id = undefined;
        this.title = '';
        this.dueDate = '';
        this.description = '';
        this.assignee = {
            fullName: '',
            avatar: ''
        };
        this.tags = [];
        this.completed = false;
        this.deleted = false;
        this.important = false;
    }
}
//# sourceMappingURL=todo.model.js.map