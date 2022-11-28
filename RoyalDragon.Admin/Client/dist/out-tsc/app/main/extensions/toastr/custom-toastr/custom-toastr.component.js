import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Toast } from 'ngx-toastr';
import { toastrSlideY } from 'app/main/extensions/toastr/custom-toastr/custom-toastr.animation';
let CustomToastrComponent = class CustomToastrComponent extends Toast {
    constructor(toastrService, toastPackage) {
        super(toastrService, toastPackage);
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
    }
};
CustomToastrComponent = __decorate([
    Component({
        selector: '[app-custom-toastr-component]',
        templateUrl: './custom-toastr.component.html',
        animations: [toastrSlideY],
        preserveWhitespaces: false
    })
], CustomToastrComponent);
export { CustomToastrComponent };
//# sourceMappingURL=custom-toastr.component.js.map