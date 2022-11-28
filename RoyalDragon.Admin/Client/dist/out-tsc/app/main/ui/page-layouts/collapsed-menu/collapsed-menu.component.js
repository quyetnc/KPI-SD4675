import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let CollapsedMenuComponent = class CollapsedMenuComponent {
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
                    collapsed: true
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
            headerTitle: 'Layout collapsed menu',
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
                        name: 'Collapsed Menu',
                        isLink: false
                    }
                ]
            }
        };
    }
};
CollapsedMenuComponent = __decorate([
    Component({
        selector: 'app-collapsed-menu',
        templateUrl: './collapsed-menu.component.html',
        styleUrls: ['./collapsed-menu.component.scss']
    })
], CollapsedMenuComponent);
export { CollapsedMenuComponent };
//# sourceMappingURL=collapsed-menu.component.js.map