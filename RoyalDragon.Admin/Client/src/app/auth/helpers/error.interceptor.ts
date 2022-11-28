import { CommonService } from 'app/common/common.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from 'app/auth/service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  /**
   * @param {Router} _router
   * @param {AuthenticationService} _authenticationService
   */
  constructor(private _router: Router, private _authenticationService: AuthenticationService, private _commonService: CommonService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
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
            let errorRs = err as HttpErrorResponse;
            for (let item in errorRs.error.errors) {
              message += errorRs.error.errors[item][0] + "<br/>";
            }
            this._commonService.sweetAlert("Thông báo", message, false)
          } catch (error) {

          }

        }
        // throwError
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
