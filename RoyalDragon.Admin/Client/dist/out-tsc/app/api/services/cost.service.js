var CostService_1;
import { __decorate } from "tslib";
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { RequestBuilder } from '../request-builder';
import { map, filter } from 'rxjs/operators';
let CostService = CostService_1 = class CostService extends BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCostListCostGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCostListCostGet$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CostService_1.ApiCostListCostGetPath, 'get');
        if (params) {
            rb.query('request', params.request, {});
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
     * To access the full response (for headers, for example), `apiCostListCostGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCostListCostGet$Plain(params) {
        return this.apiCostListCostGet$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCostListCostGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCostListCostGet$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CostService_1.ApiCostListCostGetPath, 'get');
        if (params) {
            rb.query('request', params.request, {});
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
     * To access the full response (for headers, for example), `apiCostListCostGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCostListCostGet$Json(params) {
        return this.apiCostListCostGet$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCostUpdateCostPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCostUpdateCostPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CostService_1.ApiCostUpdateCostPostPath, 'post');
        if (params) {
            rb.body(params.body, 'application/*+json');
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
     * To access the full response (for headers, for example), `apiCostUpdateCostPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCostUpdateCostPost$Plain(params) {
        return this.apiCostUpdateCostPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCostUpdateCostPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCostUpdateCostPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CostService_1.ApiCostUpdateCostPostPath, 'post');
        if (params) {
            rb.body(params.body, 'application/*+json');
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
     * To access the full response (for headers, for example), `apiCostUpdateCostPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCostUpdateCostPost$Json(params) {
        return this.apiCostUpdateCostPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCostApproveCostGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCostApproveCostGet$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CostService_1.ApiCostApproveCostGetPath, 'get');
        if (params) {
            rb.query('Cost.CostId', params['Cost.CostId'], {});
            rb.query('Cost.CreateOn', params['Cost.CreateOn'], {});
            rb.query('Cost.AmountOfMoney', params['Cost.AmountOfMoney'], {});
            rb.query('Cost.UserId', params['Cost.UserId'], {});
            rb.query('Cost.Reason', params['Cost.Reason'], {});
            rb.query('Cost.IsActive', params['Cost.IsActive'], {});
            rb.query('Cost.IsApprove', params['Cost.IsApprove'], {});
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
     * To access the full response (for headers, for example), `apiCostApproveCostGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCostApproveCostGet$Plain(params) {
        return this.apiCostApproveCostGet$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCostApproveCostGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCostApproveCostGet$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CostService_1.ApiCostApproveCostGetPath, 'get');
        if (params) {
            rb.query('Cost.CostId', params['Cost.CostId'], {});
            rb.query('Cost.CreateOn', params['Cost.CreateOn'], {});
            rb.query('Cost.AmountOfMoney', params['Cost.AmountOfMoney'], {});
            rb.query('Cost.UserId', params['Cost.UserId'], {});
            rb.query('Cost.Reason', params['Cost.Reason'], {});
            rb.query('Cost.IsActive', params['Cost.IsActive'], {});
            rb.query('Cost.IsApprove', params['Cost.IsApprove'], {});
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
     * To access the full response (for headers, for example), `apiCostApproveCostGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCostApproveCostGet$Json(params) {
        return this.apiCostApproveCostGet$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCostCreateCostPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCostCreateCostPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CostService_1.ApiCostCreateCostPostPath, 'post');
        if (params) {
            rb.body(params.body, 'application/*+json');
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
     * To access the full response (for headers, for example), `apiCostCreateCostPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCostCreateCostPost$Plain(params) {
        return this.apiCostCreateCostPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCostCreateCostPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCostCreateCostPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CostService_1.ApiCostCreateCostPostPath, 'post');
        if (params) {
            rb.body(params.body, 'application/*+json');
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
     * To access the full response (for headers, for example), `apiCostCreateCostPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCostCreateCostPost$Json(params) {
        return this.apiCostCreateCostPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCostDeleteCostDelete$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCostDeleteCostDelete$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CostService_1.ApiCostDeleteCostDeletePath, 'delete');
        if (params) {
            rb.body(params.body, 'application/*+json');
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
     * To access the full response (for headers, for example), `apiCostDeleteCostDelete$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCostDeleteCostDelete$Plain(params) {
        return this.apiCostDeleteCostDelete$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCostDeleteCostDelete$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCostDeleteCostDelete$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CostService_1.ApiCostDeleteCostDeletePath, 'delete');
        if (params) {
            rb.body(params.body, 'application/*+json');
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
     * To access the full response (for headers, for example), `apiCostDeleteCostDelete$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCostDeleteCostDelete$Json(params) {
        return this.apiCostDeleteCostDelete$Json$Response(params).pipe(map((r) => r.body));
    }
};
/**
 * Path part for operation apiCostListCostGet
 */
CostService.ApiCostListCostGetPath = '/api/Cost/ListCost';
/**
 * Path part for operation apiCostUpdateCostPost
 */
CostService.ApiCostUpdateCostPostPath = '/api/Cost/UpdateCost';
/**
 * Path part for operation apiCostApproveCostGet
 */
CostService.ApiCostApproveCostGetPath = '/api/Cost/ApproveCost';
/**
 * Path part for operation apiCostCreateCostPost
 */
CostService.ApiCostCreateCostPostPath = '/api/Cost/CreateCost';
/**
 * Path part for operation apiCostDeleteCostDelete
 */
CostService.ApiCostDeleteCostDeletePath = '/api/Cost/DeleteCost';
CostService = CostService_1 = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CostService);
export { CostService };
//# sourceMappingURL=cost.service.js.map