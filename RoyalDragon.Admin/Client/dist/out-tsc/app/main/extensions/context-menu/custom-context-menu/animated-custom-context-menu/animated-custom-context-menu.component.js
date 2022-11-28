import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { cloneDeep } from 'lodash';
import { MenuComponent } from '@ctrl/ngx-rightclick';
import { CustomToastrComponent } from 'app/main/extensions/toastr/custom-toastr/custom-toastr.component';
let AnimatedCustomContextMenuComponent = class AnimatedCustomContextMenuComponent extends MenuComponent {
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
AnimatedCustomContextMenuComponent = __decorate([
    Component({
        selector: 'app-animated-custom-context-menu',
        templateUrl: './animated-custom-context-menu.component.html',
        styleUrls: ['../../context-menu.component.scss'],
        animations: [
            trigger('menu', [
                state('enter', style({ opacity: 1, marginTop: '0px', visibility: 'visible' })),
                state('exit, void', style({ opacity: 0, marginTop: '-15px' })),
                transition('* => *', animate('120ms ease-in'))
            ])
        ],
        encapsulation: ViewEncapsulation.None
    })
], AnimatedCustomContextMenuComponent);
export { AnimatedCustomContextMenuComponent };
//# sourceMappingURL=animated-custom-context-menu.component.js.map