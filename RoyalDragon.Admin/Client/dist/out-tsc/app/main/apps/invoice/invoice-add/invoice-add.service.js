import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let InvoiceAddService = class InvoiceAddService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onInvoicAddChanged = new BehaviorSubject({});
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
        const url = `api/invoice-data`;
        return new Promise((resolve, reject) => {
            this._httpClient.get(url).subscribe((response) => {
                this.apiData = response;
                this.onInvoicAddChanged.next(this.apiData);
                resolve(this.apiData);
            }, reject);
        });
    }
};
InvoiceAddService = __decorate([
    Injectable()
], InvoiceAddService);
export { InvoiceAddService };
//# sourceMappingURL=invoice-add.service.js.map