var SaleService_1;
import { __decorate } from "tslib";
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { RequestBuilder } from '../request-builder';
import { map, filter } from 'rxjs/operators';
let SaleService = SaleService_1 = class SaleService extends BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiSaleInitHomePageGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiSaleInitHomePageGet$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, SaleService_1.ApiSaleInitHomePageGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'text',
            accept: 'text/plain',
            context: params?.context
        })).pipe(filter((r) => r instanceof HttpResponse), map((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiSaleInitHomePageGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiSaleInitHomePageGet$Plain(params) {
        return this.apiSaleInitHomePageGet$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiSaleInitHomePageGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiSaleInitHomePageGet$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, SaleService_1.ApiSaleInitHomePageGetPath, 'get');
        if (params) {
        }
        return this.http.request(rb.build({
            responseType: 'json',
            accept: 'text/json',
            context: params?.context
        })).pipe(filter((r) => r instanceof HttpResponse), map((r) => {
            return r;
        }));
    }
    /**
     * This method provides access to only to the response body.
     * To access the full response (for headers, for example), `apiSaleInitHomePageGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiSaleInitHomePageGet$Json(params) {
        return this.apiSaleInitHomePageGet$Json$Response(params).pipe(map((r) => r.body));
    }
};
/**
 * Path part for operation apiSaleInitHomePageGet
 */
SaleService.ApiSaleInitHomePageGetPath = '/api/Sale/InitHomePage';
SaleService = SaleService_1 = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SaleService);
export { SaleService };
//# sourceMappingURL=sale.service.js.map