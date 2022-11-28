var ProductService_1;
import { __decorate } from "tslib";
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { RequestBuilder } from '../request-builder';
import { map, filter } from 'rxjs/operators';
let ProductService = ProductService_1 = class ProductService extends BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductListProductGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProductListProductGet$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductListProductGetPath, 'get');
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
     * To access the full response (for headers, for example), `apiProductListProductGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProductListProductGet$Plain(params) {
        return this.apiProductListProductGet$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductListProductGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProductListProductGet$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductListProductGetPath, 'get');
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
     * To access the full response (for headers, for example), `apiProductListProductGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProductListProductGet$Json(params) {
        return this.apiProductListProductGet$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductHistoryUpdateProductGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProductHistoryUpdateProductGet$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductHistoryUpdateProductGetPath, 'get');
        if (params) {
            rb.query('ProductId', params.ProductId, {});
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
     * To access the full response (for headers, for example), `apiProductHistoryUpdateProductGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProductHistoryUpdateProductGet$Plain(params) {
        return this.apiProductHistoryUpdateProductGet$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductHistoryUpdateProductGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProductHistoryUpdateProductGet$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductHistoryUpdateProductGetPath, 'get');
        if (params) {
            rb.query('ProductId', params.ProductId, {});
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
     * To access the full response (for headers, for example), `apiProductHistoryUpdateProductGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProductHistoryUpdateProductGet$Json(params) {
        return this.apiProductHistoryUpdateProductGet$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductGetProductGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProductGetProductGet$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductGetProductGetPath, 'get');
        if (params) {
            rb.query('ProductId', params.ProductId, {});
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
     * To access the full response (for headers, for example), `apiProductGetProductGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProductGetProductGet$Plain(params) {
        return this.apiProductGetProductGet$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductGetProductGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProductGetProductGet$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductGetProductGetPath, 'get');
        if (params) {
            rb.query('ProductId', params.ProductId, {});
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
     * To access the full response (for headers, for example), `apiProductGetProductGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiProductGetProductGet$Json(params) {
        return this.apiProductGetProductGet$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductUpdateProductPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductUpdateProductPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductUpdateProductPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiProductUpdateProductPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductUpdateProductPost$Plain(params) {
        return this.apiProductUpdateProductPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductUpdateProductPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductUpdateProductPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductUpdateProductPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiProductUpdateProductPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductUpdateProductPost$Json(params) {
        return this.apiProductUpdateProductPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductAddProductPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductAddProductPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductAddProductPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiProductAddProductPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductAddProductPost$Plain(params) {
        return this.apiProductAddProductPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductAddProductPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductAddProductPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductAddProductPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiProductAddProductPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductAddProductPost$Json(params) {
        return this.apiProductAddProductPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductStopSellProductPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductStopSellProductPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductStopSellProductPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiProductStopSellProductPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductStopSellProductPost$Plain(params) {
        return this.apiProductStopSellProductPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductStopSellProductPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductStopSellProductPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductStopSellProductPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiProductStopSellProductPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductStopSellProductPost$Json(params) {
        return this.apiProductStopSellProductPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductDeleteProductDelete$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductDeleteProductDelete$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductDeleteProductDeletePath, 'delete');
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
     * To access the full response (for headers, for example), `apiProductDeleteProductDelete$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductDeleteProductDelete$Plain(params) {
        return this.apiProductDeleteProductDelete$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductDeleteProductDelete$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductDeleteProductDelete$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductDeleteProductDeletePath, 'delete');
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
     * To access the full response (for headers, for example), `apiProductDeleteProductDelete$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductDeleteProductDelete$Json(params) {
        return this.apiProductDeleteProductDelete$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductSearchProductByNamePost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductSearchProductByNamePost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductSearchProductByNamePostPath, 'post');
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
     * To access the full response (for headers, for example), `apiProductSearchProductByNamePost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductSearchProductByNamePost$Plain(params) {
        return this.apiProductSearchProductByNamePost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductSearchProductByNamePost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductSearchProductByNamePost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductSearchProductByNamePostPath, 'post');
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
     * To access the full response (for headers, for example), `apiProductSearchProductByNamePost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductSearchProductByNamePost$Json(params) {
        return this.apiProductSearchProductByNamePost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductUpdateSettingProductPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductUpdateSettingProductPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductUpdateSettingProductPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiProductUpdateSettingProductPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductUpdateSettingProductPost$Plain(params) {
        return this.apiProductUpdateSettingProductPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiProductUpdateSettingProductPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductUpdateSettingProductPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, ProductService_1.ApiProductUpdateSettingProductPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiProductUpdateSettingProductPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiProductUpdateSettingProductPost$Json(params) {
        return this.apiProductUpdateSettingProductPost$Json$Response(params).pipe(map((r) => r.body));
    }
};
/**
 * Path part for operation apiProductListProductGet
 */
ProductService.ApiProductListProductGetPath = '/api/Product/ListProduct';
/**
 * Path part for operation apiProductHistoryUpdateProductGet
 */
ProductService.ApiProductHistoryUpdateProductGetPath = '/api/Product/HistoryUpdateProduct';
/**
 * Path part for operation apiProductGetProductGet
 */
ProductService.ApiProductGetProductGetPath = '/api/Product/GetProduct';
/**
 * Path part for operation apiProductUpdateProductPost
 */
ProductService.ApiProductUpdateProductPostPath = '/api/Product/UpdateProduct';
/**
 * Path part for operation apiProductAddProductPost
 */
ProductService.ApiProductAddProductPostPath = '/api/Product/AddProduct';
/**
 * Path part for operation apiProductStopSellProductPost
 */
ProductService.ApiProductStopSellProductPostPath = '/api/Product/StopSellProduct';
/**
 * Path part for operation apiProductDeleteProductDelete
 */
ProductService.ApiProductDeleteProductDeletePath = '/api/Product/DeleteProduct';
/**
 * Path part for operation apiProductSearchProductByNamePost
 */
ProductService.ApiProductSearchProductByNamePostPath = '/api/Product/SearchProductByName';
/**
 * Path part for operation apiProductUpdateSettingProductPost
 */
ProductService.ApiProductUpdateSettingProductPostPath = '/api/Product/UpdateSettingProduct';
ProductService = ProductService_1 = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map