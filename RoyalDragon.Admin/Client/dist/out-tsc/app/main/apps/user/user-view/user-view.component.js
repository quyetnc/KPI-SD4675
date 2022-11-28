import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let UserViewComponent = class UserViewComponent {
    /**
     * Constructor
     *
     * @param {Router} router
     * @param {UserViewService} _userViewService
     */
    constructor(router, _userViewService) {
        this.router = router;
        this._userViewService = _userViewService;
        // public
        this.url = this.router.url;
        this._unsubscribeAll = new Subject();
        this.lastValue = this.url.substr(this.url.lastIndexOf('/') + 1);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this._userViewService.onUserViewChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
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
UserViewComponent = __decorate([
    Component({
        selector: 'app-user-view',
        templateUrl: './user-view.component.html',
        styleUrls: ['./user-view.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], UserViewComponent);
export { UserViewComponent };
//# sourceMappingURL=user-view.component.js.map