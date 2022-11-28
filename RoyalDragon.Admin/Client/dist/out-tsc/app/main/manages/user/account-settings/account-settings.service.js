import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let AccountSettingsService = class AccountSettingsService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onSettingsChanged = new BehaviorSubject({});
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
            this._httpClient.get('api/account-settings-data').subscribe((response) => {
                this.rows = response;
                this.onSettingsChanged.next(this.rows);
                resolve(this.rows);
            }, reject);
        });
    }
};
AccountSettingsService = __decorate([
    Injectable()
], AccountSettingsService);
export { AccountSettingsService };
//# sourceMappingURL=account-settings.service.js.map