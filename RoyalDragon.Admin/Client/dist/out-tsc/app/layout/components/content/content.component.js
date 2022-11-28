import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { fadeInLeft, zoomIn, fadeIn } from '@core/animations/core.animation';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let ContentComponent = class ContentComponent {
    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     *
     */
    constructor(_coreConfigService) {
        this._coreConfigService = _coreConfigService;
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }
    /**
     * Fade In Left Animation
     *
     * @param outlet
     */
    fadeInLeft(outlet) {
        if (this.animate === 'fadeInLeft') {
            return outlet.activatedRouteData.animation;
        }
        return null;
    }
    /**
     * Zoom In Animation
     *
     * @param outlet
     */
    zoomIn(outlet) {
        if (this.animate === 'zoomIn') {
            return outlet.activatedRouteData.animation;
        }
        return null;
    }
    /**
     * Fade In Animation
     *
     * @param outlet
     */
    fadeIn(outlet) {
        if (this.animate === 'fadeIn') {
            return outlet.activatedRouteData.animation;
        }
        return null;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On Init
     */
    ngOnInit() {
        // Subscribe config change
        this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
            this.coreConfig = config;
            this.animate = this.coreConfig.layout.animation;
        });
    }
};
ContentComponent = __decorate([
    Component({
        selector: 'content',
        templateUrl: './content.component.html',
        encapsulation: ViewEncapsulation.None,
        animations: [fadeInLeft, zoomIn, fadeIn]
    })
], ContentComponent);
export { ContentComponent };
//# sourceMappingURL=content.component.js.map