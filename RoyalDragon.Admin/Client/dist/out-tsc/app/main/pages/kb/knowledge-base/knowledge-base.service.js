import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let knowledgeBaseService = class knowledgeBaseService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onKBChanged = new BehaviorSubject({});
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
            this._httpClient.get('api/knowledge-base-data').subscribe((response) => {
                this.rows = response;
                this.onKBChanged.next(this.rows);
                resolve(this.rows);
            }, reject);
        });
    }
};
knowledgeBaseService = __decorate([
    Injectable()
], knowledgeBaseService);
export { knowledgeBaseService };
//# sourceMappingURL=knowledge-base.service.js.map