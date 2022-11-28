import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
let ErrorInterceptor = class ErrorInterceptor {
    /**
     * @param {Router} _router
     * @param {AuthenticationService} _authenticationService
     */
    constructor(_router, _authenticationService, _commonService) {
        this._router = _router;
        this._authenticationService = _authenticationService;
        this._commonService = _commonService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this._router.navigate(['/login']);
                // ? Can also logout and reload if needed
                this._authenticationService.logout();
                location.reload();
            }
            else if ([400].indexOf(err.status) !== -1) {
                console.log(err, "err");
                try {
                    let message = "";
                    let errorRs = err;
                    for (let item in errorRs.error.errors) {
                        message += errorRs.error.errors[item][0] + "<br/>";
                    }
                    this._commonService.sweetAlert("Thông báo", message, false);
                }
                catch (error) {
                }
            }
            // throwError
            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
};
ErrorInterceptor = __decorate([
    Injectable()
], ErrorInterceptor);
export { ErrorInterceptor };
//# sourceMappingURL=error.interceptor.js.map