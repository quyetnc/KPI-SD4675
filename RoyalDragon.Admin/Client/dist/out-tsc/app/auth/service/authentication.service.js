import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { Role } from 'app/auth/models';
let AuthenticationService = class AuthenticationService {
    /**
     *
     * @param {HttpClient} _http
     * @param {ToastrService} _toastrService
     */
    constructor(_http, _toastrService) {
        this._http = _http;
        this._toastrService = _toastrService;
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    // getter: currentUserValue
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    /**
     *  Confirms if user is admin
     */
    get isAdmin() {
        return this.currentUser && this.currentUserSubject.value.roleName === Role.Admin;
    }
    /**
     *  Confirms if user is client
     */
    get isClient() {
        return this.currentUser && this.currentUserSubject.value.roleName === Role.Client;
    }
    /**
     * User login
     *
     * @param email
     * @param password
     * @returns user
     */
    login(email, password) {
        return this._http
            .post(`${environment.apiUrl}/Login`, { username: email, password: password })
            .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user.success) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user.data));
                // Display welcome toast!
                setTimeout(() => {
                    this._toastrService.success('You have successfully logged in as an ' +
                        user.data.roleName +
                        ' user to RoyalDragonIT. Now you can start to explore. Enjoy! 🎉', '👋 Welcome, ' + user.data.fullName + '!', { toastClass: 'toast ngx-toastr', closeButton: true });
                }, 2500);
                // notify
                this.currentUserSubject.next(user.data);
            }
            return user.data;
        }));
    }
    /**
     * User logout
     *
     */
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        // notify
        this.currentUserSubject.next(null);
    }
};
AuthenticationService = __decorate([
    Injectable({ providedIn: 'root' })
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map