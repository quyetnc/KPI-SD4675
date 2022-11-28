import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let DatatablesService = class DatatablesService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onDatatablessChanged = new BehaviorSubject({});
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
            this._httpClient.get('api/datatable-rows').subscribe((response) => {
                this.rows = response;
                this.onDatatablessChanged.next(this.rows);
                resolve(this.rows);
            }, reject);
        });
    }
};
DatatablesService = __decorate([
    Injectable()
], DatatablesService);
export { DatatablesService };
//# sourceMappingURL=datatables.service.js.map