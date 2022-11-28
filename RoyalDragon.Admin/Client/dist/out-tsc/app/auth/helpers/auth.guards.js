import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    /**
     *
     * @param {Router} _router
     * @param {AuthenticationService} _authenticationService
     */
    constructor(_router, _authenticationService) {
        this._router = _router;
        this._authenticationService = _authenticationService;
    }
    // canActivate
    canActivate(route, state) {
        const currentUser = this._authenticationService.currentUserValue;
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.roleName) === -1) {
                // role not authorised so redirect to not-authorized page
                this._router.navigate(['/pages/miscellaneous/not-authorized']);
                return false;
            }
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard = __decorate([
    Injectable({ providedIn: 'root' })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guards.js.map