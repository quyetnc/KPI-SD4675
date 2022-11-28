var OrderService_1;
import { __decorate } from "tslib";
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { RequestBuilder } from '../request-builder';
import { map, filter } from 'rxjs/operators';
let OrderService = OrderService_1 = class OrderService extends BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderListOrderGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiOrderListOrderGet$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderListOrderGetPath, 'get');
        if (params) {
            rb.query('UserId', params.UserId, {});
            rb.query('Role', params.Role, {});
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
     * To access the full response (for headers, for example), `apiOrderListOrderGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiOrderListOrderGet$Plain(params) {
        return this.apiOrderListOrderGet$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderListOrderGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiOrderListOrderGet$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderListOrderGetPath, 'get');
        if (params) {
            rb.query('UserId', params.UserId, {});
            rb.query('Role', params.Role, {});
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
     * To access the full response (for headers, for example), `apiOrderListOrderGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiOrderListOrderGet$Json(params) {
        return this.apiOrderListOrderGet$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderDetailOrderGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiOrderDetailOrderGet$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderDetailOrderGetPath, 'get');
        if (params) {
            rb.query('OrderId', params.OrderId, {});
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
     * To access the full response (for headers, for example), `apiOrderDetailOrderGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiOrderDetailOrderGet$Plain(params) {
        return this.apiOrderDetailOrderGet$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderDetailOrderGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiOrderDetailOrderGet$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderDetailOrderGetPath, 'get');
        if (params) {
            rb.query('OrderId', params.OrderId, {});
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
     * To access the full response (for headers, for example), `apiOrderDetailOrderGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiOrderDetailOrderGet$Json(params) {
        return this.apiOrderDetailOrderGet$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderGetProductGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiOrderGetProductGet$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderGetProductGetPath, 'get');
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
     * To access the full response (for headers, for example), `apiOrderGetProductGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiOrderGetProductGet$Plain(params) {
        return this.apiOrderGetProductGet$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderGetProductGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiOrderGetProductGet$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderGetProductGetPath, 'get');
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
     * To access the full response (for headers, for example), `apiOrderGetProductGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiOrderGetProductGet$Json(params) {
        return this.apiOrderGetProductGet$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderUpdateProductPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderUpdateProductPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderUpdateProductPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiOrderUpdateProductPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderUpdateProductPost$Plain(params) {
        return this.apiOrderUpdateProductPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderUpdateProductPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderUpdateProductPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderUpdateProductPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiOrderUpdateProductPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderUpdateProductPost$Json(params) {
        return this.apiOrderUpdateProductPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderAddProductPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderAddProductPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderAddProductPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiOrderAddProductPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderAddProductPost$Plain(params) {
        return this.apiOrderAddProductPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderAddProductPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderAddProductPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderAddProductPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiOrderAddProductPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderAddProductPost$Json(params) {
        return this.apiOrderAddProductPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderStopSellProductPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderStopSellProductPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderStopSellProductPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiOrderStopSellProductPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderStopSellProductPost$Plain(params) {
        return this.apiOrderStopSellProductPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderStopSellProductPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderStopSellProductPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderStopSellProductPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiOrderStopSellProductPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderStopSellProductPost$Json(params) {
        return this.apiOrderStopSellProductPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderDeleteProductDelete$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderDeleteProductDelete$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderDeleteProductDeletePath, 'delete');
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
     * To access the full response (for headers, for example), `apiOrderDeleteProductDelete$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderDeleteProductDelete$Plain(params) {
        return this.apiOrderDeleteProductDelete$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderDeleteProductDelete$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderDeleteProductDelete$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderDeleteProductDeletePath, 'delete');
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
     * To access the full response (for headers, for example), `apiOrderDeleteProductDelete$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderDeleteProductDelete$Json(params) {
        return this.apiOrderDeleteProductDelete$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderGetListOrderOfCustomerPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderGetListOrderOfCustomerPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderGetListOrderOfCustomerPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiOrderGetListOrderOfCustomerPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderGetListOrderOfCustomerPost$Plain(params) {
        return this.apiOrderGetListOrderOfCustomerPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiOrderGetListOrderOfCustomerPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderGetListOrderOfCustomerPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, OrderService_1.ApiOrderGetListOrderOfCustomerPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiOrderGetListOrderOfCustomerPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiOrderGetListOrderOfCustomerPost$Json(params) {
        return this.apiOrderGetListOrderOfCustomerPost$Json$Response(params).pipe(map((r) => r.body));
    }
};
/**
 * Path part for operation apiOrderListOrderGet
 */
OrderService.ApiOrderListOrderGetPath = '/api/Order/ListOrder';
/**
 * Path part for operation apiOrderDetailOrderGet
 */
OrderService.ApiOrderDetailOrderGetPath = '/api/Order/DetailOrder';
/**
 * Path part for operation apiOrderGetProductGet
 */
OrderService.ApiOrderGetProductGetPath = '/api/Order/GetProduct';
/**
 * Path part for operation apiOrderUpdateProductPost
 */
OrderService.ApiOrderUpdateProductPostPath = '/api/Order/UpdateProduct';
/**
 * Path part for operation apiOrderAddProductPost
 */
OrderService.ApiOrderAddProductPostPath = '/api/Order/AddProduct';
/**
 * Path part for operation apiOrderStopSellProductPost
 */
OrderService.ApiOrderStopSellProductPostPath = '/api/Order/StopSellProduct';
/**
 * Path part for operation apiOrderDeleteProductDelete
 */
OrderService.ApiOrderDeleteProductDeletePath = '/api/Order/DeleteProduct';
/**
 * Path part for operation apiOrderGetListOrderOfCustomerPost
 */
OrderService.ApiOrderGetListOrderOfCustomerPostPath = '/api/Order/GetListOrderOfCustomer';
OrderService = OrderService_1 = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map