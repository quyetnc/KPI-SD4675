import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let PricingComponent = class PricingComponent {
    /**
     * Constructor
     *
     * @param {PricingService} _pricingService
     */
    constructor(_pricingService) {
        this._pricingService = _pricingService;
        this.Monthly = false;
        this._unsubscribeAll = new Subject();
    }
    ngOnInit() {
        this._pricingService.onPricingChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.data = response;
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
};
PricingComponent = __decorate([
    Component({
        selector: 'app-pricing',
        templateUrl: './pricing.component.html',
        styleUrls: ['./pricing.component.scss']
    })
], PricingComponent);
export { PricingComponent };
//# sourceMappingURL=pricing.component.js.map