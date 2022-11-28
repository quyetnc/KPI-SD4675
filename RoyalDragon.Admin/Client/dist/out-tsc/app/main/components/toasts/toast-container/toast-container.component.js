import { __decorate } from "tslib";
import { Component, TemplateRef } from '@angular/core';
let ToastContainerComponent = class ToastContainerComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    isTemplate(toast) {
        return toast.textOrTpl instanceof TemplateRef;
    }
};
ToastContainerComponent = __decorate([
    Component({
        selector: 'app-toast-container',
        templateUrl: './toast-container.component.html',
        host: { '[class.ngb-toasts]': 'true' }
    })
], ToastContainerComponent);
export { ToastContainerComponent };
//# sourceMappingURL=toast-container.component.js.map