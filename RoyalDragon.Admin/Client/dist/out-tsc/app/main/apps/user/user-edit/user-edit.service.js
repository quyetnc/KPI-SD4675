import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let UserEditService = class UserEditService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onUserEditChanged = new BehaviorSubject({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([this.getApiData()]).then(() => {
                resolve();
            }, reject);
        });
    }
    /**
     * Get API Data
     */
    getApiData() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/users-data').subscribe((response) => {
                this.apiData = response;
                this.onUserEditChanged.next(this.apiData);
                resolve(this.apiData);
            }, reject);
        });
    }
};
UserEditService = __decorate([
    Injectable()
], UserEditService);
export { UserEditService };
//# sourceMappingURL=user-edit.service.js.map