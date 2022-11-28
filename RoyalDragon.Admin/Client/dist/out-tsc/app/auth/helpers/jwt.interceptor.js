import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
let JwtInterceptor = class JwtInterceptor {
    /**
     *
     * @param {AuthenticationService} _authenticationService
     */
    constructor(_authenticationService) {
        this._authenticationService = _authenticationService;
    }
    /**
     * Add auth header with jwt if user is logged in and request is to api url
     * @param request
     * @param next
     */
    intercept(request, next) {
        const currentUser = this._authenticationService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.token;
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor = __decorate([
    Injectable()
], JwtInterceptor);
export { JwtInterceptor };
//# sourceMappingURL=jwt.interceptor.js.map