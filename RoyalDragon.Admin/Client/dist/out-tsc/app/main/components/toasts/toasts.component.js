import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/toasts/toasts.snippetcode';
let ToastsComponent = class ToastsComponent {
    constructor(toastService) {
        this.toastService = toastService;
        this.hideValue = true;
        this.toastStyle = {};
        // snippet code variables
        this._snippetCodeBasic = snippet.snippetCodeBasic;
        this._snippetCodeTranslucent = snippet.snippetCodeTranslucent;
        this._snippetCodeStacking = snippet.snippetCodeStacking;
        this._snippetCodePlacement = snippet.snippetCodePlacement;
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    toastBasic(data, delayTime) {
        this.toastService.show(data, {
            delay: delayTime,
            autohide: true
        });
    }
    toastAutoHide() {
        this.hideValue = !this.hideValue;
    }
    toastStacking() {
        this.toastService.show('Heads up, toasts will stack automatically', {
            autohide: this.hideValue
        });
    }
    toastPlacement() {
        this.toastService.show('Heads up, toasts will stack automatically', {
            autohide: true
        });
        this.toastStyle = { left: 0, right: 'unset' };
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Toasts',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Components',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Toasts',
                        isLink: false
                    }
                ]
            }
        };
    }
};
ToastsComponent = __decorate([
    Component({
        selector: 'app-toasts',
        templateUrl: './toasts.component.html'
    })
], ToastsComponent);
export { ToastsComponent };
//# sourceMappingURL=toasts.component.js.map