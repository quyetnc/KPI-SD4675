import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { cloneDeep } from 'lodash';
import { MenuComponent } from '@ctrl/ngx-rightclick';
import { CustomToastrComponent } from 'app/main/extensions/toastr/custom-toastr/custom-toastr.component';
let BasicCustomContextMenuComponent = class BasicCustomContextMenuComponent extends MenuComponent {
    /**
     * Constructor
     *
     * @param {ToastrService} toastr
     * @param {MenuPackage} menuPackage
     * @param {ContextMenuService} contextMenuService
     */
    constructor(menuPackage, contextMenuService, toastr) {
        super(menuPackage, contextMenuService);
        this.menuPackage = menuPackage;
        this.contextMenuService = contextMenuService;
        this.toastr = toastr;
        this.options = this.toastr.toastrConfig;
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    handleClick(msg) {
        const customToastrRef = cloneDeep(this.options);
        customToastrRef.toastComponent = CustomToastrComponent;
        customToastrRef.closeButton = true;
        customToastrRef.tapToDismiss = false;
        customToastrRef.toastClass = 'toast ngx-toastr';
        this.toastr.success('', msg, customToastrRef);
        this.contextMenuService.closeAll();
    }
};
BasicCustomContextMenuComponent = __decorate([
    Component({
        selector: 'app-basic-custom-context-menu',
        templateUrl: './basic-custom-context-menu.component.html',
        styleUrls: ['../../context-menu.component.scss'],
        animations: [
            trigger('menu', [
                state('enter', style({ opacity: 1 })),
                state('exit, void', style({ opacity: 0 })),
                transition('* => *', animate(0))
            ])
        ],
        encapsulation: ViewEncapsulation.None
    })
], BasicCustomContextMenuComponent);
export { BasicCustomContextMenuComponent };
//# sourceMappingURL=basic-custom-context-menu.component.js.map