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

import { BooleanResultCustomModel } from '../models/boolean-result-custom-model';
import { CategoryWithProductModelListResultCustomModel } from '../models/category-with-product-model-list-result-custom-model';
import { InitHomePageResponseResultCustomModel } from '../models/init-home-page-response-result-custom-model';
import { ListCategoryWithProductRequest } from '../models/list-category-with-product-request';
import { ListProductByCategorySlugResultResultCustomModel } from '../models/list-product-by-category-slug-result-result-custom-model';
import { ListProductRequest } from '../models/list-product-request';
import { ListStaff } from '../models/list-staff';
import { ListStaffResponseListResultCustomModel } from '../models/list-staff-response-list-result-custom-model';
import { ProductDetailResponseResultCustomModel } from '../models/product-detail-response-result-custom-model';
import { ProductListResultCustomModel } from '../models/product-list-result-custom-model';
import { TrackingOrderRequest } from '../models/tracking-order-request';
import { TrackingOrderResponseResultCustomModel } from '../models/tracking-order-response-result-custom-model';

@Injectable({
  providedIn: 'root',
})
export class ECommerceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiECommerceListProductGet
   */
  static readonly ApiECommerceListProductGetPath = '/api/ECommerce/ListProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceListProductGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListProductGet$Plain$Response(params?: {
    request?: ListProductRequest;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProductListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceListProductGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiECommerceListProductGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListProductGet$Plain(params?: {
    request?: ListProductRequest;
    context?: HttpContext
  }
): Observable<ProductListResultCustomModel> {

    return this.apiECommerceListProductGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductListResultCustomModel>) => r.body as ProductListResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceListProductGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListProductGet$Json$Response(params?: {
    request?: ListProductRequest;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProductListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceListProductGetPath, 'get');
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
   * To access the full response (for headers, for example), `apiECommerceListProductGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListProductGet$Json(params?: {
    request?: ListProductRequest;
    context?: HttpContext
  }
): Observable<ProductListResultCustomModel> {

    return this.apiECommerceListProductGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductListResultCustomModel>) => r.body as ProductListResultCustomModel)
    );
  }

  /**
   * Path part for operation apiECommerceListProductByCategorySlugGet
   */
  static readonly ApiECommerceListProductByCategorySlugGetPath = '/api/ECommerce/ListProductByCategorySlug';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceListProductByCategorySlugGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListProductByCategorySlugGet$Plain$Response(params?: {
    CategorySlug?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ListProductByCategorySlugResultResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceListProductByCategorySlugGetPath, 'get');
    if (params) {
      rb.query('CategorySlug', params.CategorySlug, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ListProductByCategorySlugResultResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiECommerceListProductByCategorySlugGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListProductByCategorySlugGet$Plain(params?: {
    CategorySlug?: string;
    context?: HttpContext
  }
): Observable<ListProductByCategorySlugResultResultCustomModel> {

    return this.apiECommerceListProductByCategorySlugGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ListProductByCategorySlugResultResultCustomModel>) => r.body as ListProductByCategorySlugResultResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceListProductByCategorySlugGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListProductByCategorySlugGet$Json$Response(params?: {
    CategorySlug?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ListProductByCategorySlugResultResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceListProductByCategorySlugGetPath, 'get');
    if (params) {
      rb.query('CategorySlug', params.CategorySlug, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ListProductByCategorySlugResultResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiECommerceListProductByCategorySlugGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListProductByCategorySlugGet$Json(params?: {
    CategorySlug?: string;
    context?: HttpContext
  }
): Observable<ListProductByCategorySlugResultResultCustomModel> {

    return this.apiECommerceListProductByCategorySlugGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ListProductByCategorySlugResultResultCustomModel>) => r.body as ListProductByCategorySlugResultResultCustomModel)
    );
  }

  /**
   * Path part for operation apiECommerceListCategoryWithProductGet
   */
  static readonly ApiECommerceListCategoryWithProductGetPath = '/api/ECommerce/ListCategoryWithProduct';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceListCategoryWithProductGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListCategoryWithProductGet$Plain$Response(params?: {
    request?: ListCategoryWithProductRequest;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CategoryWithProductModelListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceListCategoryWithProductGetPath, 'get');
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
        return r as StrictHttpResponse<CategoryWithProductModelListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiECommerceListCategoryWithProductGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListCategoryWithProductGet$Plain(params?: {
    request?: ListCategoryWithProductRequest;
    context?: HttpContext
  }
): Observable<CategoryWithProductModelListResultCustomModel> {

    return this.apiECommerceListCategoryWithProductGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryWithProductModelListResultCustomModel>) => r.body as CategoryWithProductModelListResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceListCategoryWithProductGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListCategoryWithProductGet$Json$Response(params?: {
    request?: ListCategoryWithProductRequest;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CategoryWithProductModelListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceListCategoryWithProductGetPath, 'get');
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
        return r as StrictHttpResponse<CategoryWithProductModelListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiECommerceListCategoryWithProductGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListCategoryWithProductGet$Json(params?: {
    request?: ListCategoryWithProductRequest;
    context?: HttpContext
  }
): Observable<CategoryWithProductModelListResultCustomModel> {

    return this.apiECommerceListCategoryWithProductGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryWithProductModelListResultCustomModel>) => r.body as CategoryWithProductModelListResultCustomModel)
    );
  }

  /**
   * Path part for operation apiECommerceProductDetailGet
   */
  static readonly ApiECommerceProductDetailGetPath = '/api/ECommerce/ProductDetail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceProductDetailGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceProductDetailGet$Plain$Response(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProductDetailResponseResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceProductDetailGetPath, 'get');
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
        return r as StrictHttpResponse<ProductDetailResponseResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiECommerceProductDetailGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceProductDetailGet$Plain(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<ProductDetailResponseResultCustomModel> {

    return this.apiECommerceProductDetailGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ProductDetailResponseResultCustomModel>) => r.body as ProductDetailResponseResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceProductDetailGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceProductDetailGet$Json$Response(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ProductDetailResponseResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceProductDetailGetPath, 'get');
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
        return r as StrictHttpResponse<ProductDetailResponseResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiECommerceProductDetailGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceProductDetailGet$Json(params?: {
    ProductId?: number;
    context?: HttpContext
  }
): Observable<ProductDetailResponseResultCustomModel> {

    return this.apiECommerceProductDetailGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ProductDetailResponseResultCustomModel>) => r.body as ProductDetailResponseResultCustomModel)
    );
  }

  /**
   * Path part for operation apiECommerceInitHomePageGet
   */
  static readonly ApiECommerceInitHomePageGetPath = '/api/ECommerce/InitHomePage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceInitHomePageGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceInitHomePageGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<InitHomePageResponseResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceInitHomePageGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InitHomePageResponseResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiECommerceInitHomePageGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceInitHomePageGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<InitHomePageResponseResultCustomModel> {

    return this.apiECommerceInitHomePageGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<InitHomePageResponseResultCustomModel>) => r.body as InitHomePageResponseResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceInitHomePageGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceInitHomePageGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<InitHomePageResponseResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceInitHomePageGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InitHomePageResponseResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiECommerceInitHomePageGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceInitHomePageGet$Json(params?: {
    context?: HttpContext
  }
): Observable<InitHomePageResponseResultCustomModel> {

    return this.apiECommerceInitHomePageGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<InitHomePageResponseResultCustomModel>) => r.body as InitHomePageResponseResultCustomModel)
    );
  }

  /**
   * Path part for operation apiECommerceListStaffGet
   */
  static readonly ApiECommerceListStaffGetPath = '/api/ECommerce/ListStaff';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceListStaffGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListStaffGet$Plain$Response(params?: {
    request?: ListStaff;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ListStaffResponseListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceListStaffGetPath, 'get');
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
        return r as StrictHttpResponse<ListStaffResponseListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiECommerceListStaffGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListStaffGet$Plain(params?: {
    request?: ListStaff;
    context?: HttpContext
  }
): Observable<ListStaffResponseListResultCustomModel> {

    return this.apiECommerceListStaffGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ListStaffResponseListResultCustomModel>) => r.body as ListStaffResponseListResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceListStaffGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListStaffGet$Json$Response(params?: {
    request?: ListStaff;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ListStaffResponseListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceListStaffGetPath, 'get');
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
        return r as StrictHttpResponse<ListStaffResponseListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiECommerceListStaffGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceListStaffGet$Json(params?: {
    request?: ListStaff;
    context?: HttpContext
  }
): Observable<ListStaffResponseListResultCustomModel> {

    return this.apiECommerceListStaffGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ListStaffResponseListResultCustomModel>) => r.body as ListStaffResponseListResultCustomModel)
    );
  }

  /**
   * Path part for operation apiECommerceTrackingOrderPost
   */
  static readonly ApiECommerceTrackingOrderPostPath = '/api/ECommerce/TrackingOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceTrackingOrderPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiECommerceTrackingOrderPost$Plain$Response(params?: {
    context?: HttpContext
    body?: TrackingOrderRequest
  }
): Observable<StrictHttpResponse<TrackingOrderResponseResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceTrackingOrderPostPath, 'post');
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
        return r as StrictHttpResponse<TrackingOrderResponseResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiECommerceTrackingOrderPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiECommerceTrackingOrderPost$Plain(params?: {
    context?: HttpContext
    body?: TrackingOrderRequest
  }
): Observable<TrackingOrderResponseResultCustomModel> {

    return this.apiECommerceTrackingOrderPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<TrackingOrderResponseResultCustomModel>) => r.body as TrackingOrderResponseResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceTrackingOrderPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiECommerceTrackingOrderPost$Json$Response(params?: {
    context?: HttpContext
    body?: TrackingOrderRequest
  }
): Observable<StrictHttpResponse<TrackingOrderResponseResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceTrackingOrderPostPath, 'post');
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
        return r as StrictHttpResponse<TrackingOrderResponseResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiECommerceTrackingOrderPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiECommerceTrackingOrderPost$Json(params?: {
    context?: HttpContext
    body?: TrackingOrderRequest
  }
): Observable<TrackingOrderResponseResultCustomModel> {

    return this.apiECommerceTrackingOrderPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<TrackingOrderResponseResultCustomModel>) => r.body as TrackingOrderResponseResultCustomModel)
    );
  }

  /**
   * Path part for operation apiECommerceIsLoginGet
   */
  static readonly ApiECommerceIsLoginGetPath = '/api/ECommerce/IsLogin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceIsLoginGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceIsLoginGet$Plain$Response(params?: {
    request?: ListStaff;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceIsLoginGetPath, 'get');
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
        return r as StrictHttpResponse<BooleanResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiECommerceIsLoginGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceIsLoginGet$Plain(params?: {
    request?: ListStaff;
    context?: HttpContext
  }
): Observable<BooleanResultCustomModel> {

    return this.apiECommerceIsLoginGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiECommerceIsLoginGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceIsLoginGet$Json$Response(params?: {
    request?: ListStaff;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ECommerceService.ApiECommerceIsLoginGetPath, 'get');
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
        return r as StrictHttpResponse<BooleanResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiECommerceIsLoginGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiECommerceIsLoginGet$Json(params?: {
    request?: ListStaff;
    context?: HttpContext
  }
): Observable<BooleanResultCustomModel> {

    return this.apiECommerceIsLoginGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

}
