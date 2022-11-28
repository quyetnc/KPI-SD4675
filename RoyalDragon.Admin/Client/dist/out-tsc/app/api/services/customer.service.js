var CustomerService_1;
import { __decorate } from "tslib";
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { RequestBuilder } from '../request-builder';
import { map, filter } from 'rxjs/operators';
let CustomerService = CustomerService_1 = class CustomerService extends BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerListCustomerGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCustomerListCustomerGet$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerListCustomerGetPath, 'get');
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
     * To access the full response (for headers, for example), `apiCustomerListCustomerGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCustomerListCustomerGet$Plain(params) {
        return this.apiCustomerListCustomerGet$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerListCustomerGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCustomerListCustomerGet$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerListCustomerGetPath, 'get');
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
     * To access the full response (for headers, for example), `apiCustomerListCustomerGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCustomerListCustomerGet$Json(params) {
        return this.apiCustomerListCustomerGet$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerGetCustomerGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCustomerGetCustomerGet$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerGetCustomerGetPath, 'get');
        if (params) {
            rb.query('CustomerId', params.CustomerId, {});
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
     * To access the full response (for headers, for example), `apiCustomerGetCustomerGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCustomerGetCustomerGet$Plain(params) {
        return this.apiCustomerGetCustomerGet$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerGetCustomerGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCustomerGetCustomerGet$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerGetCustomerGetPath, 'get');
        if (params) {
            rb.query('CustomerId', params.CustomerId, {});
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
     * To access the full response (for headers, for example), `apiCustomerGetCustomerGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCustomerGetCustomerGet$Json(params) {
        return this.apiCustomerGetCustomerGet$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerUpdateCustomerPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerUpdateCustomerPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerUpdateCustomerPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiCustomerUpdateCustomerPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerUpdateCustomerPost$Plain(params) {
        return this.apiCustomerUpdateCustomerPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerUpdateCustomerPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerUpdateCustomerPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerUpdateCustomerPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiCustomerUpdateCustomerPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerUpdateCustomerPost$Json(params) {
        return this.apiCustomerUpdateCustomerPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerCreateCustomerPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerCreateCustomerPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerCreateCustomerPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiCustomerCreateCustomerPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerCreateCustomerPost$Plain(params) {
        return this.apiCustomerCreateCustomerPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerCreateCustomerPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerCreateCustomerPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerCreateCustomerPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiCustomerCreateCustomerPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerCreateCustomerPost$Json(params) {
        return this.apiCustomerCreateCustomerPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerDeleteCustomerDelete$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerDeleteCustomerDelete$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerDeleteCustomerDeletePath, 'delete');
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
     * To access the full response (for headers, for example), `apiCustomerDeleteCustomerDelete$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerDeleteCustomerDelete$Plain(params) {
        return this.apiCustomerDeleteCustomerDelete$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerDeleteCustomerDelete$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerDeleteCustomerDelete$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerDeleteCustomerDeletePath, 'delete');
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
     * To access the full response (for headers, for example), `apiCustomerDeleteCustomerDelete$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerDeleteCustomerDelete$Json(params) {
        return this.apiCustomerDeleteCustomerDelete$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerExportExcelCustomerPost$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCustomerExportExcelCustomerPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerExportExcelCustomerPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiCustomerExportExcelCustomerPost$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCustomerExportExcelCustomerPost$Plain(params) {
        return this.apiCustomerExportExcelCustomerPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerExportExcelCustomerPost$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCustomerExportExcelCustomerPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerExportExcelCustomerPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiCustomerExportExcelCustomerPost$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCustomerExportExcelCustomerPost$Json(params) {
        return this.apiCustomerExportExcelCustomerPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerImportCustomerPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerImportCustomerPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerImportCustomerPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiCustomerImportCustomerPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerImportCustomerPost$Plain(params) {
        return this.apiCustomerImportCustomerPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerImportCustomerPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerImportCustomerPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerImportCustomerPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiCustomerImportCustomerPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerImportCustomerPost$Json(params) {
        return this.apiCustomerImportCustomerPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerCreateOrderFromCustomerPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerCreateOrderFromCustomerPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerCreateOrderFromCustomerPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiCustomerCreateOrderFromCustomerPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerCreateOrderFromCustomerPost$Plain(params) {
        return this.apiCustomerCreateOrderFromCustomerPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCustomerCreateOrderFromCustomerPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerCreateOrderFromCustomerPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CustomerService_1.ApiCustomerCreateOrderFromCustomerPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiCustomerCreateOrderFromCustomerPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCustomerCreateOrderFromCustomerPost$Json(params) {
        return this.apiCustomerCreateOrderFromCustomerPost$Json$Response(params).pipe(map((r) => r.body));
    }
};
/**
 * Path part for operation apiCustomerListCustomerGet
 */
CustomerService.ApiCustomerListCustomerGetPath = '/api/Customer/ListCustomer';
/**
 * Path part for operation apiCustomerGetCustomerGet
 */
CustomerService.ApiCustomerGetCustomerGetPath = '/api/Customer/GetCustomer';
/**
 * Path part for operation apiCustomerUpdateCustomerPost
 */
CustomerService.ApiCustomerUpdateCustomerPostPath = '/api/Customer/UpdateCustomer';
/**
 * Path part for operation apiCustomerCreateCustomerPost
 */
CustomerService.ApiCustomerCreateCustomerPostPath = '/api/Customer/CreateCustomer';
/**
 * Path part for operation apiCustomerDeleteCustomerDelete
 */
CustomerService.ApiCustomerDeleteCustomerDeletePath = '/api/Customer/DeleteCustomer';
/**
 * Path part for operation apiCustomerExportExcelCustomerPost
 */
CustomerService.ApiCustomerExportExcelCustomerPostPath = '/api/Customer/ExportExcelCustomer';
/**
 * Path part for operation apiCustomerImportCustomerPost
 */
CustomerService.ApiCustomerImportCustomerPostPath = '/api/Customer/ImportCustomer';
/**
 * Path part for operation apiCustomerCreateOrderFromCustomerPost
 */
CustomerService.ApiCustomerCreateOrderFromCustomerPostPath = '/api/Customer/CreateOrderFromCustomer';
CustomerService = CustomerService_1 = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CustomerService);
export { CustomerService };
//# sourceMappingURL=customer.service.js.map