import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
let UserService = class UserService {
    /**
     *
     * @param {HttpClient} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * Get all users
     */
    getAll() {
        return this._http.get(`${environment.apiUrl}/users`);
    }
    /**
     * Get user by id
     */
    getById(id) {
        return this._http.get(`${environment.apiUrl}/users/${id}`);
    }
};
UserService = __decorate([
    Injectable({ providedIn: 'root' })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map