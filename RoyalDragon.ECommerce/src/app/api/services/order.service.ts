/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddProductRequest } from '../models/add-product-request';
import { BooleanResultCustomModel } from '../models/boolean-result-custom-model';
import { DeleteProductRequest } from '../models/delete-product-request';
import { GetListOrderOfCustomerRequest } from '../models/get-list-order-of-customer-request';
import { ProductResultCustomModel } from '../models/product-result-custom-model';
import { StopSellProductRequest } from '../models/stop-sell-product-request';
import { UpdateProductRequest } from '../models/update-product-request';
import { VListDetailOrderListResultCustomModel } from '../models/v-list-detail-order-list-result-custom-model';
import { VListOrderListResultCustomModel } from '../models/v-list-order-list-result-custom-model';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiOrderListOrderGet
   */
  static readonly ApiOrderListOrderGetPath = '/api/Order/ListOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderListOrderGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderListOrderGet$Plain$Response(params?: {
    UserId?: number;
    Role?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<VListOrderListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderListOrderGetPath, 'get');
    if (params) {
      rb.query('UserId', params.UserId, {});
      rb.query('Role', params.Role, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VListOrderListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderListOrderGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderListOrderGet$Plain(params?: {
    UserId?: number;
    Role?: string;
    context?: HttpContext
  }
): Observable<VListOrderListResultCustomModel> {

    return this.apiOrderListOrderGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<VListOrderListResultCustomModel>) => r.body as VListOrderListResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderListOrderGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderListOrderGet$Json$Response(params?: {
    UserId?: number;
    Role?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<VListOrderListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderListOrderGetPath, 'get');
    if (params) {
      rb.query('UserId', params.UserId, {});
      rb.query('Role', params.Role, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VListOrderListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderListOrderGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderListOrderGet$Json(params?: {
    UserId?: number;
    Role?: string;
    context?: HttpContext
  }
): Observable<VListOrderListResultCustomModel> {

    return this.apiOrderListOrderGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<VListOrderListResultCustomModel>) => r.body as VListOrderListResultCustomModel)
    );
  }

  /**
   * Path part for operation apiOrderDetailOrderGet
   */
  static readonly ApiOrderDetailOrderGetPath = '/api/Order/DetailOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderDetailOrderGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderDetailOrderGet$Plain$Response(params?: {
    OrderId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<VListDetailOrderListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderDetailOrderGetPath, 'get');
    if (params) {
      rb.query('OrderId', params.OrderId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VListDetailOrderListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderDetailOrderGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderDetailOrderGet$Plain(params?: {
    OrderId?: number;
    context?: HttpContext
  }
): Observable<VListDetailOrderListResultCustomModel> {

    return this.apiOrderDetailOrderGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<VListDetailOrderListResultCustomModel>) => r.body as VListDetailOrderListResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderDetailOrderGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderDetailOrderGet$Json$Response(params?: {
    OrderId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<VListDetailOrderListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderDetailOrderGetPath, 'get');
    if (params) {
      rb.query('OrderId', params.OrderId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VListDetailOrderListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderDetailOrderGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderDetailOrderGet$Json(params?: {
    OrderId?: number;
    context?: HttpContext
  }
): Observable<VListDetailOrderListResultCustomModel> {

    return this.apiOrderDetailOrderGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<VListDetailOrderListResultCustomModel>) => r.body as VListDetailOrderListResultCustomModel)
    );
  }

  /**
   * Path part for operation apiOrderGetProductGet
   */
  static readonly ApiOrderGetProductGetPath = '/api/Order/GetProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGetProductGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGetProductGet$Plain$Response(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProductResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderGetProductGetPath, 'get');
    if (params) {
      rb.query('ProductId', params.ProductId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderGetProductGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGetProductGet$Plain(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<ProductResultCustomModel> {

    return this.apiOrderGetProductGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductResultCustomModel>) => r.body as ProductResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGetProductGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGetProductGet$Json$Response(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProductResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderGetProductGetPath, 'get');
    if (params) {
      rb.query('ProductId', params.ProductId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderGetProductGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOrderGetProductGet$Json(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<ProductResultCustomModel> {

    return this.apiOrderGetProductGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductResultCustomModel>) => r.body as ProductResultCustomModel)
    );
  }

  /**
   * Path part for operation apiOrderUpdateProductPost
   */
  static readonly ApiOrderUpdateProductPostPath = '/api/Order/UpdateProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderUpdateProductPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderUpdateProductPost$Plain$Response(params?: {
    context?: HttpContext
    body?: UpdateProductRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderUpdateProductPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BooleanResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderUpdateProductPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderUpdateProductPost$Plain(params?: {
    context?: HttpContext
    body?: UpdateProductRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiOrderUpdateProductPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderUpdateProductPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderUpdateProductPost$Json$Response(params?: {
    context?: HttpContext
    body?: UpdateProductRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderUpdateProductPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BooleanResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderUpdateProductPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderUpdateProductPost$Json(params?: {
    context?: HttpContext
    body?: UpdateProductRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiOrderUpdateProductPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * Path part for operation apiOrderAddProductPost
   */
  static readonly ApiOrderAddProductPostPath = '/api/Order/AddProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderAddProductPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderAddProductPost$Plain$Response(params?: {
    context?: HttpContext
    body?: AddProductRequest
  }
): Observable<StrictHttpResponse<ProductResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderAddProductPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderAddProductPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderAddProductPost$Plain(params?: {
    context?: HttpContext
    body?: AddProductRequest
  }
): Observable<ProductResultCustomModel> {

    return this.apiOrderAddProductPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductResultCustomModel>) => r.body as ProductResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderAddProductPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderAddProductPost$Json$Response(params?: {
    context?: HttpContext
    body?: AddProductRequest
  }
): Observable<StrictHttpResponse<ProductResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderAddProductPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderAddProductPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderAddProductPost$Json(params?: {
    context?: HttpContext
    body?: AddProductRequest
  }
): Observable<ProductResultCustomModel> {

    return this.apiOrderAddProductPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductResultCustomModel>) => r.body as ProductResultCustomModel)
    );
  }

  /**
   * Path part for operation apiOrderStopSellProductPost
   */
  static readonly ApiOrderStopSellProductPostPath = '/api/Order/StopSellProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderStopSellProductPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderStopSellProductPost$Plain$Response(params?: {
    context?: HttpContext
    body?: StopSellProductRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderStopSellProductPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BooleanResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderStopSellProductPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderStopSellProductPost$Plain(params?: {
    context?: HttpContext
    body?: StopSellProductRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiOrderStopSellProductPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderStopSellProductPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderStopSellProductPost$Json$Response(params?: {
    context?: HttpContext
    body?: StopSellProductRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderStopSellProductPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BooleanResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderStopSellProductPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderStopSellProductPost$Json(params?: {
    context?: HttpContext
    body?: StopSellProductRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiOrderStopSellProductPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * Path part for operation apiOrderDeleteProductDelete
   */
  static readonly ApiOrderDeleteProductDeletePath = '/api/Order/DeleteProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderDeleteProductDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderDeleteProductDelete$Plain$Response(params?: {
    context?: HttpContext
    body?: DeleteProductRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderDeleteProductDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BooleanResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderDeleteProductDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderDeleteProductDelete$Plain(params?: {
    context?: HttpContext
    body?: DeleteProductRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiOrderDeleteProductDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderDeleteProductDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderDeleteProductDelete$Json$Response(params?: {
    context?: HttpContext
    body?: DeleteProductRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderDeleteProductDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BooleanResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderDeleteProductDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderDeleteProductDelete$Json(params?: {
    context?: HttpContext
    body?: DeleteProductRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiOrderDeleteProductDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * Path part for operation apiOrderGetListOrderOfCustomerPost
   */
  static readonly ApiOrderGetListOrderOfCustomerPostPath = '/api/Order/GetListOrderOfCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGetListOrderOfCustomerPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderGetListOrderOfCustomerPost$Plain$Response(params?: {
    context?: HttpContext
    body?: GetListOrderOfCustomerRequest
  }
): Observable<StrictHttpResponse<VListOrderListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderGetListOrderOfCustomerPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VListOrderListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderGetListOrderOfCustomerPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderGetListOrderOfCustomerPost$Plain(params?: {
    context?: HttpContext
    body?: GetListOrderOfCustomerRequest
  }
): Observable<VListOrderListResultCustomModel> {

    return this.apiOrderGetListOrderOfCustomerPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<VListOrderListResultCustomModel>) => r.body as VListOrderListResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOrderGetListOrderOfCustomerPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderGetListOrderOfCustomerPost$Json$Response(params?: {
    context?: HttpContext
    body?: GetListOrderOfCustomerRequest
  }
): Observable<StrictHttpResponse<VListOrderListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, OrderService.ApiOrderGetListOrderOfCustomerPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<VListOrderListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiOrderGetListOrderOfCustomerPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOrderGetListOrderOfCustomerPost$Json(params?: {
    context?: HttpContext
    body?: GetListOrderOfCustomerRequest
  }
): Observable<VListOrderListResultCustomModel> {

    return this.apiOrderGetListOrderOfCustomerPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<VListOrderListResultCustomModel>) => r.body as VListOrderListResultCustomModel)
    );
  }

}
