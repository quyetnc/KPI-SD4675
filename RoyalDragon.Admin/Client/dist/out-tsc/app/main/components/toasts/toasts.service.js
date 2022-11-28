import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ToastService = class ToastService {
    constructor() {
        this.toasts = [];
    }
    show(textOrTpl, options = {}) {
        this.toasts.push({ textOrTpl, ...options });
    }
    remove(toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }
};
ToastService = __decorate([
    Injectable({ providedIn: 'root' })
], ToastService);
export { ToastService };
//# sourceMappingURL=toasts.service.js.map