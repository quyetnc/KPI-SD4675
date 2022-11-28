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
import { ListProductRequest } from '../models/list-product-request';
import { ProductHistoryListResultCustomModel } from '../models/product-history-list-result-custom-model';
import { ProductListResultCustomModel } from '../models/product-list-result-custom-model';
import { ProductResultCustomModel } from '../models/product-result-custom-model';
import { SearchProductByNameRequest } from '../models/search-product-by-name-request';
import { StopSellProductRequest } from '../models/stop-sell-product-request';
import { UpdateProductRequest } from '../models/update-product-request';
import { UpdateSettingProductRequest } from '../models/update-setting-product-request';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiProductListProductGet
   */
  static readonly ApiProductListProductGetPath = '/api/Product/ListProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductListProductGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductListProductGet$Plain$Response(params?: {
    request?: ListProductRequest;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProductListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductListProductGetPath, 'get');
    if (params) {
      rb.query('request', params.request, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductListProductGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductListProductGet$Plain(params?: {
    request?: ListProductRequest;
    context?: HttpContext
  }
): Observable<ProductListResultCustomModel> {

    return this.apiProductListProductGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductListResultCustomModel>) => r.body as ProductListResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductListProductGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductListProductGet$Json$Response(params?: {
    request?: ListProductRequest;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProductListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductListProductGetPath, 'get');
    if (params) {
      rb.query('request', params.request, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ProductListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductListProductGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductListProductGet$Json(params?: {
    request?: ListProductRequest;
    context?: HttpContext
  }
): Observable<ProductListResultCustomModel> {

    return this.apiProductListProductGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductListResultCustomModel>) => r.body as ProductListResultCustomModel)
    );
  }

  /**
   * Path part for operation apiProductHistoryUpdateProductGet
   */
  static readonly ApiProductHistoryUpdateProductGetPath = '/api/Product/HistoryUpdateProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductHistoryUpdateProductGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductHistoryUpdateProductGet$Plain$Response(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProductHistoryListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductHistoryUpdateProductGetPath, 'get');
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
        return r as StrictHttpResponse<ProductHistoryListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductHistoryUpdateProductGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductHistoryUpdateProductGet$Plain(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<ProductHistoryListResultCustomModel> {

    return this.apiProductHistoryUpdateProductGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductHistoryListResultCustomModel>) => r.body as ProductHistoryListResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductHistoryUpdateProductGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductHistoryUpdateProductGet$Json$Response(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProductHistoryListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductHistoryUpdateProductGetPath, 'get');
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
        return r as StrictHttpResponse<ProductHistoryListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductHistoryUpdateProductGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductHistoryUpdateProductGet$Json(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<ProductHistoryListResultCustomModel> {

    return this.apiProductHistoryUpdateProductGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductHistoryListResultCustomModel>) => r.body as ProductHistoryListResultCustomModel)
    );
  }

  /**
   * Path part for operation apiProductGetProductGet
   */
  static readonly ApiProductGetProductGetPath = '/api/Product/GetProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetProductGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetProductGet$Plain$Response(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProductResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductGetProductGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiProductGetProductGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetProductGet$Plain(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<ProductResultCustomModel> {

    return this.apiProductGetProductGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductResultCustomModel>) => r.body as ProductResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductGetProductGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetProductGet$Json$Response(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProductResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductGetProductGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiProductGetProductGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProductGetProductGet$Json(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<ProductResultCustomModel> {

    return this.apiProductGetProductGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductResultCustomModel>) => r.body as ProductResultCustomModel)
    );
  }

  /**
   * Path part for operation apiProductUpdateProductPost
   */
  static readonly ApiProductUpdateProductPostPath = '/api/Product/UpdateProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductUpdateProductPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdateProductPost$Plain$Response(params?: {
    context?: HttpContext
    body?: UpdateProductRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductUpdateProductPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiProductUpdateProductPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdateProductPost$Plain(params?: {
    context?: HttpContext
    body?: UpdateProductRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiProductUpdateProductPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductUpdateProductPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdateProductPost$Json$Response(params?: {
    context?: HttpContext
    body?: UpdateProductRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductUpdateProductPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiProductUpdateProductPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdateProductPost$Json(params?: {
    context?: HttpContext
    body?: UpdateProductRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiProductUpdateProductPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * Path part for operation apiProductAddProductPost
   */
  static readonly ApiProductAddProductPostPath = '/api/Product/AddProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductAddProductPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductAddProductPost$Plain$Response(params?: {
    context?: HttpContext
    body?: AddProductRequest
  }
): Observable<StrictHttpResponse<ProductResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductAddProductPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiProductAddProductPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductAddProductPost$Plain(params?: {
    context?: HttpContext
    body?: AddProductRequest
  }
): Observable<ProductResultCustomModel> {

    return this.apiProductAddProductPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductResultCustomModel>) => r.body as ProductResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductAddProductPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductAddProductPost$Json$Response(params?: {
    context?: HttpContext
    body?: AddProductRequest
  }
): Observable<StrictHttpResponse<ProductResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductAddProductPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiProductAddProductPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductAddProductPost$Json(params?: {
    context?: HttpContext
    body?: AddProductRequest
  }
): Observable<ProductResultCustomModel> {

    return this.apiProductAddProductPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductResultCustomModel>) => r.body as ProductResultCustomModel)
    );
  }

  /**
   * Path part for operation apiProductStopSellProductPost
   */
  static readonly ApiProductStopSellProductPostPath = '/api/Product/StopSellProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductStopSellProductPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductStopSellProductPost$Plain$Response(params?: {
    context?: HttpContext
    body?: StopSellProductRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductStopSellProductPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiProductStopSellProductPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductStopSellProductPost$Plain(params?: {
    context?: HttpContext
    body?: StopSellProductRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiProductStopSellProductPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductStopSellProductPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductStopSellProductPost$Json$Response(params?: {
    context?: HttpContext
    body?: StopSellProductRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductStopSellProductPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiProductStopSellProductPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductStopSellProductPost$Json(params?: {
    context?: HttpContext
    body?: StopSellProductRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiProductStopSellProductPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * Path part for operation apiProductDeleteProductDelete
   */
  static readonly ApiProductDeleteProductDeletePath = '/api/Product/DeleteProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductDeleteProductDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductDeleteProductDelete$Plain$Response(params?: {
    context?: HttpContext
    body?: DeleteProductRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductDeleteProductDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiProductDeleteProductDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductDeleteProductDelete$Plain(params?: {
    context?: HttpContext
    body?: DeleteProductRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiProductDeleteProductDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductDeleteProductDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductDeleteProductDelete$Json$Response(params?: {
    context?: HttpContext
    body?: DeleteProductRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductDeleteProductDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiProductDeleteProductDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductDeleteProductDelete$Json(params?: {
    context?: HttpContext
    body?: DeleteProductRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiProductDeleteProductDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * Path part for operation apiProductSearchProductByNamePost
   */
  static readonly ApiProductSearchProductByNamePostPath = '/api/Product/SearchProductByName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductSearchProductByNamePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductSearchProductByNamePost$Plain$Response(params?: {
    context?: HttpContext
    body?: SearchProductByNameRequest
  }
): Observable<StrictHttpResponse<ProductListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductSearchProductByNamePostPath, 'post');
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
        return r as StrictHttpResponse<ProductListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductSearchProductByNamePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductSearchProductByNamePost$Plain(params?: {
    context?: HttpContext
    body?: SearchProductByNameRequest
  }
): Observable<ProductListResultCustomModel> {

    return this.apiProductSearchProductByNamePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductListResultCustomModel>) => r.body as ProductListResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductSearchProductByNamePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductSearchProductByNamePost$Json$Response(params?: {
    context?: HttpContext
    body?: SearchProductByNameRequest
  }
): Observable<StrictHttpResponse<ProductListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductSearchProductByNamePostPath, 'post');
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
        return r as StrictHttpResponse<ProductListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProductSearchProductByNamePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductSearchProductByNamePost$Json(params?: {
    context?: HttpContext
    body?: SearchProductByNameRequest
  }
): Observable<ProductListResultCustomModel> {

    return this.apiProductSearchProductByNamePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductListResultCustomModel>) => r.body as ProductListResultCustomModel)
    );
  }

  /**
   * Path part for operation apiProductUpdateSettingProductPost
   */
  static readonly ApiProductUpdateSettingProductPostPath = '/api/Product/UpdateSettingProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductUpdateSettingProductPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdateSettingProductPost$Plain$Response(params?: {
    context?: HttpContext
    body?: UpdateSettingProductRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductUpdateSettingProductPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiProductUpdateSettingProductPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdateSettingProductPost$Plain(params?: {
    context?: HttpContext
    body?: UpdateSettingProductRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiProductUpdateSettingProductPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProductUpdateSettingProductPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdateSettingProductPost$Json$Response(params?: {
    context?: HttpContext
    body?: UpdateSettingProductRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ProductService.ApiProductUpdateSettingProductPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiProductUpdateSettingProductPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProductUpdateSettingProductPost$Json(params?: {
    context?: HttpContext
    body?: UpdateSettingProductRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiProductUpdateSettingProductPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

}
