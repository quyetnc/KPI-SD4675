import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let CardAdvanceService = class CardAdvanceService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onCardAdvChanged = new BehaviorSubject({});
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
            this._httpClient.get('api/chat-widget-data').subscribe((response) => {
                this.apiData = response;
                this.onCardAdvChanged.next(this.apiData);
                resolve(this.apiData);
            }, reject);
        });
    }
};
CardAdvanceService = __decorate([
    Injectable()
], CardAdvanceService);
export { CardAdvanceService };
//# sourceMappingURL=card-advance.service.js.map