import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
let CoreMediaService = class CoreMediaService {
    /**
     * Constructor
     *
     * @param {MediaObserver} _mediaObserver
     */
    constructor(_mediaObserver) {
        this._mediaObserver = _mediaObserver;
        this.onMediaUpdate = new BehaviorSubject('');
        // Set the defaults
        this.currentMediaQuery = '';
        // Initialize
        this._init();
    }
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Initialize
     *
     * @private
     */
    _init() {
        this._mediaObserver.media$.pipe(debounceTime(500), distinctUntilChanged()).subscribe((change) => {
            // console.log('subscription: ', change);
            if (this.currentMediaQuery !== change.mqAlias) {
                this.currentMediaQuery = change.mqAlias;
                this.onMediaUpdate.next(change.mqAlias);
            }
        });
    }
};
CoreMediaService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CoreMediaService);
export { CoreMediaService };
//# sourceMappingURL=media.service.js.map