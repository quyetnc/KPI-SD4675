import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { animate, style } from '@angular/animations';
import { NavigationEnd } from '@angular/router';
import { filter, take } from 'rxjs/operators';
let CoreLoadingScreenService = class CoreLoadingScreenService {
    /**
     * Constructor
     *
     * @param _document
     * @param {Router} _router
     * @param {AnimationBuilder} _animationBuilder
     */
    constructor(_document, _router, _animationBuilder) {
        this._document = _document;
        this._router = _router;
        this._animationBuilder = _animationBuilder;
        // Initialize
        this._init();
    }
    // Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Initialize
     *
     * @private
     */
    _init() {
        // Get the loading screen element
        this.loadingScreenEl = this._document.body.querySelector('#loading-bg');
        // If loading screen element
        if (this.loadingScreenEl) {
            // Hide it on the first NavigationEnd event
            this._router.events
                .pipe(filter(event => event instanceof NavigationEnd), take(1))
                .subscribe(() => {
                setTimeout(() => {
                    this.hide();
                });
            });
        }
    }
    // Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Show the loading screen
     */
    show() {
        this.animationPlayer = this._animationBuilder
            .build([
            style({
                opacity: '0',
                zIndex: '99999'
            }),
            animate('250ms ease', style({ opacity: '1' }))
        ])
            .create(this.loadingScreenEl);
        setTimeout(() => {
            this.animationPlayer.play();
        }, 0);
    }
    /**
     * Hide the loading screen
     */
    hide() {
        this.animationPlayer = this._animationBuilder
            .build([
            style({ opacity: '1' }),
            animate('250ms ease', style({
                opacity: '0',
                zIndex: '-10'
            }))
        ])
            .create(this.loadingScreenEl);
        setTimeout(() => {
            this.loadingScreenEl.remove();
            this.animationPlayer.play();
        }, 0);
    }
};
CoreLoadingScreenService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(DOCUMENT))
], CoreLoadingScreenService);
export { CoreLoadingScreenService };
//# sourceMappingURL=loading-screen.service.js.map