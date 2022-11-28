import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let CardStatisticsService = class CardStatisticsService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onCardSatatsChanged = new BehaviorSubject({});
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
            this._httpClient.get('api/card-statistics-data').subscribe((response) => {
                this.rows = response;
                this.onCardSatatsChanged.next(this.rows);
                resolve(this.rows);
            }, reject);
        });
    }
};
CardStatisticsService = __decorate([
    Injectable()
], CardStatisticsService);
export { CardStatisticsService };
//# sourceMappingURL=card-statistics.service.js.map