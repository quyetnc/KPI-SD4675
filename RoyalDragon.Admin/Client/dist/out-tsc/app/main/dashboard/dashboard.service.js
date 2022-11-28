import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let DashboardService = class DashboardService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onApiDataChanged = new BehaviorSubject({});
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
     * Get Api Data
     */
    getApiData() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/dashboard-data').subscribe((response) => {
                this.apiData = response;
                this.onApiDataChanged.next(this.apiData);
                resolve(this.apiData);
            }, reject);
        });
    }
};
DashboardService = __decorate([
    Injectable()
], DashboardService);
export { DashboardService };
//# sourceMappingURL=dashboard.service.js.map