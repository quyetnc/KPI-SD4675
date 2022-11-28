import { __decorate } from "tslib";
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
/**
 * Base class for services
 */
let BaseService = class BaseService {
    constructor(config, http) {
        this.config = config;
        this.http = http;
        this._rootUrl = '';
    }
    /**
     * Returns the root url for all operations in this service. If not set directly in this
     * service, will fallback to `ApiConfiguration.rootUrl`.
     */
    get rootUrl() {
        return this._rootUrl || this.config.rootUrl;
    }
    /**
     * Sets the root URL for API operations in this service.
     */
    set rootUrl(rootUrl) {
        this._rootUrl = rootUrl;
    }
};
BaseService = __decorate([
    Injectable()
], BaseService);
export { BaseService };
//# sourceMappingURL=base-service.js.map