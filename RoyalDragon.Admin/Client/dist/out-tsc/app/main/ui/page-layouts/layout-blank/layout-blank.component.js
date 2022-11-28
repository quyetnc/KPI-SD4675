import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let LayoutBlankComponent = class LayoutBlankComponent {
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
                navbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                menu: {
                    hidden: true
                },
                customizer: false,
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
    }
};
LayoutBlankComponent = __decorate([
    Component({
        selector: 'layout-blank',
        templateUrl: './layout-blank.component.html',
        styleUrls: ['./layout-blank.component.scss']
    })
], LayoutBlankComponent);
export { LayoutBlankComponent };
//# sourceMappingURL=layout-blank.component.js.map