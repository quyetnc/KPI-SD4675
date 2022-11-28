import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let ProfileComponent = class ProfileComponent {
    /**
     * Constructor
     *
     * @param {PricingService} _pricingService
     */
    constructor(_pricingService, sanitizer) {
        this._pricingService = _pricingService;
        this.sanitizer = sanitizer;
        this.toggleMenu = true;
        this.Monthly = false;
        this.toggleNavbarRef = false;
        this.loadMoreRef = false;
        this._unsubscribeAll = new Subject();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Load More
     */
    loadMore() {
        this.loadMoreRef = !this.loadMoreRef;
        setTimeout(() => {
            this.loadMoreRef = !this.loadMoreRef;
        }, 2000);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this._pricingService.onPricingChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
            this.data = response;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Profile',
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
                        name: 'Pages',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Profile',
                        isLink: false
                    }
                ]
            }
        };
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
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map