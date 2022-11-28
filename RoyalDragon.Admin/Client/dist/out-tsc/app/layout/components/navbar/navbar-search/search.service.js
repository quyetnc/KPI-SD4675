import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let SearchService = class SearchService {
    /**
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Public
        this.search = '';
        this.apiData = [];
        this.onApiDataChange = new BehaviorSubject('');
        this.onIsBookmarkOpenChange = new BehaviorSubject(false);
        this.getSearchData();
    }
    /**
     * Get Search Data
     */
    getSearchData() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/search-data').subscribe((response) => {
                this.apiData = response;
                this.onApiDataChange.next(this.apiData);
                resolve(this.apiData);
            }, reject);
        });
    }
};
SearchService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SearchService);
export { SearchService };
//# sourceMappingURL=search.service.js.map