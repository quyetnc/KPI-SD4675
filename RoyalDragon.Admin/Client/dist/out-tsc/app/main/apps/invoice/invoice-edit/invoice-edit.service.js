import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let InvoiceEditService = class InvoiceEditService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onInvoicEditChanged = new BehaviorSubject({});
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
     * Get API Data
     */
    getApiData(id) {
        const url = `api/invoice-data/${id}`;
        this.id = id;
        return new Promise((resolve, reject) => {
            this._httpClient.get(url).subscribe((response) => {
                this.apiData = response;
                this.onInvoicEditChanged.next(this.apiData);
                resolve(this.apiData);
            }, reject);
        });
    }
};
InvoiceEditService = __decorate([
    Injectable()
], InvoiceEditService);
export { InvoiceEditService };
//# sourceMappingURL=invoice-edit.service.js.map