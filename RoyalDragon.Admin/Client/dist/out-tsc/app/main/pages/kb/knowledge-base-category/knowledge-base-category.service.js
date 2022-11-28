import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let knowledgeBaseCategoryService = class knowledgeBaseCategoryService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onKBCategoryChanged = new BehaviorSubject({});
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
                this.onKBCategoryChanged.next(this.rows);
                resolve(this.rows);
            }, reject);
        });
    }
};
knowledgeBaseCategoryService = __decorate([
    Injectable()
], knowledgeBaseCategoryService);
export { knowledgeBaseCategoryService };
//# sourceMappingURL=knowledge-base-category.service.js.map