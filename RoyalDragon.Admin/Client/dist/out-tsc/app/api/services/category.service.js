var CategoryService_1;
import { __decorate } from "tslib";
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { RequestBuilder } from '../request-builder';
import { map, filter } from 'rxjs/operators';
let CategoryService = CategoryService_1 = class CategoryService extends BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCategoryListCategoryGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCategoryListCategoryGet$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CategoryService_1.ApiCategoryListCategoryGetPath, 'get');
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
     * To access the full response (for headers, for example), `apiCategoryListCategoryGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCategoryListCategoryGet$Plain(params) {
        return this.apiCategoryListCategoryGet$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCategoryListCategoryGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCategoryListCategoryGet$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CategoryService_1.ApiCategoryListCategoryGetPath, 'get');
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
     * To access the full response (for headers, for example), `apiCategoryListCategoryGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCategoryListCategoryGet$Json(params) {
        return this.apiCategoryListCategoryGet$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCategoryGetCategoryGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCategoryGetCategoryGet$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CategoryService_1.ApiCategoryGetCategoryGetPath, 'get');
        if (params) {
            rb.query('CategoryId', params.CategoryId, {});
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
     * To access the full response (for headers, for example), `apiCategoryGetCategoryGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCategoryGetCategoryGet$Plain(params) {
        return this.apiCategoryGetCategoryGet$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCategoryGetCategoryGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCategoryGetCategoryGet$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CategoryService_1.ApiCategoryGetCategoryGetPath, 'get');
        if (params) {
            rb.query('CategoryId', params.CategoryId, {});
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
     * To access the full response (for headers, for example), `apiCategoryGetCategoryGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiCategoryGetCategoryGet$Json(params) {
        return this.apiCategoryGetCategoryGet$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCategoryUpdateCategoryPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCategoryUpdateCategoryPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CategoryService_1.ApiCategoryUpdateCategoryPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiCategoryUpdateCategoryPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCategoryUpdateCategoryPost$Plain(params) {
        return this.apiCategoryUpdateCategoryPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCategoryUpdateCategoryPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCategoryUpdateCategoryPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CategoryService_1.ApiCategoryUpdateCategoryPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiCategoryUpdateCategoryPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCategoryUpdateCategoryPost$Json(params) {
        return this.apiCategoryUpdateCategoryPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCategoryCreateCategoryPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCategoryCreateCategoryPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CategoryService_1.ApiCategoryCreateCategoryPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiCategoryCreateCategoryPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCategoryCreateCategoryPost$Plain(params) {
        return this.apiCategoryCreateCategoryPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCategoryCreateCategoryPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCategoryCreateCategoryPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CategoryService_1.ApiCategoryCreateCategoryPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiCategoryCreateCategoryPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCategoryCreateCategoryPost$Json(params) {
        return this.apiCategoryCreateCategoryPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCategoryDeleteCategoryDelete$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCategoryDeleteCategoryDelete$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CategoryService_1.ApiCategoryDeleteCategoryDeletePath, 'delete');
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
     * To access the full response (for headers, for example), `apiCategoryDeleteCategoryDelete$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCategoryDeleteCategoryDelete$Plain(params) {
        return this.apiCategoryDeleteCategoryDelete$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiCategoryDeleteCategoryDelete$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCategoryDeleteCategoryDelete$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, CategoryService_1.ApiCategoryDeleteCategoryDeletePath, 'delete');
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
     * To access the full response (for headers, for example), `apiCategoryDeleteCategoryDelete$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiCategoryDeleteCategoryDelete$Json(params) {
        return this.apiCategoryDeleteCategoryDelete$Json$Response(params).pipe(map((r) => r.body));
    }
};
/**
 * Path part for operation apiCategoryListCategoryGet
 */
CategoryService.ApiCategoryListCategoryGetPath = '/api/Category/ListCategory';
/**
 * Path part for operation apiCategoryGetCategoryGet
 */
CategoryService.ApiCategoryGetCategoryGetPath = '/api/Category/GetCategory';
/**
 * Path part for operation apiCategoryUpdateCategoryPost
 */
CategoryService.ApiCategoryUpdateCategoryPostPath = '/api/Category/UpdateCategory';
/**
 * Path part for operation apiCategoryCreateCategoryPost
 */
CategoryService.ApiCategoryCreateCategoryPostPath = '/api/Category/CreateCategory';
/**
 * Path part for operation apiCategoryDeleteCategoryDelete
 */
CategoryService.ApiCategoryDeleteCategoryDeletePath = '/api/Category/DeleteCategory';
CategoryService = CategoryService_1 = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CategoryService);
export { CategoryService };
//# sourceMappingURL=category.service.js.map