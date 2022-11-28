import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let WithoutMenuComponent = class WithoutMenuComponent {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     */
    constructor(_coreConfigService) {
        this._coreConfigService = _coreConfigService;
        this._unsubscribeAll = new Subject();
        // Configure the layout
        this._coreConfigService.config = {
            layout: {
                menu: {
                    hidden: true
                },
                customizer: true,
                enableLocalStorage: false
            }
        };
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to config changes
        this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
            this.coreConfig = config;
        });
        this.contentHeader = {
            headerTitle: 'Layout without menu',
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
                        name: 'Layouts',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Layout without menu',
                        isLink: false
                    }
                ]
            }
        };
    }
};
WithoutMenuComponent = __decorate([
    Component({
        selector: 'without-menu',
        templateUrl: './without-menu.component.html',
        styleUrls: ['./without-menu.component.scss']
    })
], WithoutMenuComponent);
export { WithoutMenuComponent };
//# sourceMappingURL=without-menu.component.js.map