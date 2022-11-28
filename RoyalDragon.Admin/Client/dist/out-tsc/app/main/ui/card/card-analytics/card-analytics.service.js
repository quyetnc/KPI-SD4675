import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let CardAnalyticsService = class CardAnalyticsService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onCardAnalyticsChanged = new BehaviorSubject({});
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
            Promise.all([this.getDataTableRows()]).then(() => {
                resolve();
            }, reject);
        });
    }
    /**
     * Get rows
     */
    getDataTableRows() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/card-analytics-data').subscribe((response) => {
                this.rows = response;
                this.onCardAnalyticsChanged.next(this.rows);
                resolve(this.rows);
            }, reject);
        });
    }
};
CardAnalyticsService = __decorate([
    Injectable()
], CardAnalyticsService);
export { CardAnalyticsService };
//# sourceMappingURL=card-analytics.service.js.map