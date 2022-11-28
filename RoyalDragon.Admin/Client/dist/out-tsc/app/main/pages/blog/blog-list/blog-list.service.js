import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let BlogListService = class BlogListService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onBlogListChanged = new BehaviorSubject({});
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
            Promise.all([this.getData()]).then(() => {
                resolve();
            }, reject);
        });
    }
    /**
     * Get Data
     */
    getData() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/blog-data').subscribe((response) => {
                this.apiData = response;
                this.onBlogListChanged.next(this.apiData);
                resolve(this.apiData);
            }, reject);
        });
    }
};
BlogListService = __decorate([
    Injectable()
], BlogListService);
export { BlogListService };
//# sourceMappingURL=blog-list.service.js.map