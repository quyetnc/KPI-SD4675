import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let UserViewService = class UserViewService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onUserViewChanged = new BehaviorSubject({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route, state) {
        let currentId = Number(route.paramMap.get('id'));
        return new Promise((resolve, reject) => {
            Promise.all([this.getApiData(currentId)]).then(() => {
                resolve();
            }, reject);
        });
    }
    /**
     * Get rows
     */
    getApiData(id) {
        const url = `api/users-data/${id}`;
        return new Promise((resolve, reject) => {
            this._httpClient.get(url).subscribe((response) => {
                this.rows = response;
                this.onUserViewChanged.next(this.rows);
                resolve(this.rows);
            }, reject);
        });
    }
};
UserViewService = __decorate([
    Injectable()
], UserViewService);
export { UserViewService };
//# sourceMappingURL=user-view.service.js.map