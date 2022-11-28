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
import { CategoryListResultCustomModel } from '../models/category-list-result-custom-model';
import { CategoryResultCustomModel } from '../models/category-result-custom-model';
import { CreateCategoryRequest } from '../models/create-category-request';
import { DeleteCategoryRequest } from '../models/delete-category-request';
import { ListCategoryRequest } from '../models/list-category-request';
import { UpdateCategoryRequest } from '../models/update-category-request';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCategoryListCategoryGet
   */
  static readonly ApiCategoryListCategoryGetPath = '/api/Category/ListCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryListCategoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryListCategoryGet$Plain$Response(params?: {
    request?: ListCategoryRequest;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CategoryListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryListCategoryGetPath, 'get');
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
        return r as StrictHttpResponse<CategoryListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCategoryListCategoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryListCategoryGet$Plain(params?: {
    request?: ListCategoryRequest;
    context?: HttpContext
  }
): Observable<CategoryListResultCustomModel> {

    return this.apiCategoryListCategoryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryListResultCustomModel>) => r.body as CategoryListResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryListCategoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryListCategoryGet$Json$Response(params?: {
    request?: ListCategoryRequest;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CategoryListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryListCategoryGetPath, 'get');
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
        return r as StrictHttpResponse<CategoryListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCategoryListCategoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryListCategoryGet$Json(params?: {
    request?: ListCategoryRequest;
    context?: HttpContext
  }
): Observable<CategoryListResultCustomModel> {

    return this.apiCategoryListCategoryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryListResultCustomModel>) => r.body as CategoryListResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCategoryGetCategoryGet
   */
  static readonly ApiCategoryGetCategoryGetPath = '/api/Category/GetCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGetCategoryGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetCategoryGet$Plain$Response(params?: {
    CategoryId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CategoryResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryGetCategoryGetPath, 'get');
    if (params) {
      rb.query('CategoryId', params.CategoryId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGetCategoryGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetCategoryGet$Plain(params?: {
    CategoryId?: number;
    context?: HttpContext
  }
): Observable<CategoryResultCustomModel> {

    return this.apiCategoryGetCategoryGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryResultCustomModel>) => r.body as CategoryResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGetCategoryGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetCategoryGet$Json$Response(params?: {
    CategoryId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CategoryResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryGetCategoryGetPath, 'get');
    if (params) {
      rb.query('CategoryId', params.CategoryId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGetCategoryGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetCategoryGet$Json(params?: {
    CategoryId?: number;
    context?: HttpContext
  }
): Observable<CategoryResultCustomModel> {

    return this.apiCategoryGetCategoryGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryResultCustomModel>) => r.body as CategoryResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCategoryUpdateCategoryPost
   */
  static readonly ApiCategoryUpdateCategoryPostPath = '/api/Category/UpdateCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryUpdateCategoryPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryUpdateCategoryPost$Plain$Response(params?: {
    context?: HttpContext
    body?: UpdateCategoryRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryUpdateCategoryPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCategoryUpdateCategoryPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryUpdateCategoryPost$Plain(params?: {
    context?: HttpContext
    body?: UpdateCategoryRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCategoryUpdateCategoryPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryUpdateCategoryPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryUpdateCategoryPost$Json$Response(params?: {
    context?: HttpContext
    body?: UpdateCategoryRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryUpdateCategoryPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCategoryUpdateCategoryPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryUpdateCategoryPost$Json(params?: {
    context?: HttpContext
    body?: UpdateCategoryRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCategoryUpdateCategoryPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCategoryCreateCategoryPost
   */
  static readonly ApiCategoryCreateCategoryPostPath = '/api/Category/CreateCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryCreateCategoryPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryCreateCategoryPost$Plain$Response(params?: {
    context?: HttpContext
    body?: CreateCategoryRequest
  }
): Observable<StrictHttpResponse<CategoryResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryCreateCategoryPostPath, 'post');
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
        return r as StrictHttpResponse<CategoryResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCategoryCreateCategoryPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryCreateCategoryPost$Plain(params?: {
    context?: HttpContext
    body?: CreateCategoryRequest
  }
): Observable<CategoryResultCustomModel> {

    return this.apiCategoryCreateCategoryPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryResultCustomModel>) => r.body as CategoryResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryCreateCategoryPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryCreateCategoryPost$Json$Response(params?: {
    context?: HttpContext
    body?: CreateCategoryRequest
  }
): Observable<StrictHttpResponse<CategoryResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryCreateCategoryPostPath, 'post');
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
        return r as StrictHttpResponse<CategoryResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCategoryCreateCategoryPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryCreateCategoryPost$Json(params?: {
    context?: HttpContext
    body?: CreateCategoryRequest
  }
): Observable<CategoryResultCustomModel> {

    return this.apiCategoryCreateCategoryPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryResultCustomModel>) => r.body as CategoryResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCategoryDeleteCategoryDelete
   */
  static readonly ApiCategoryDeleteCategoryDeletePath = '/api/Category/DeleteCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryDeleteCategoryDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryDeleteCategoryDelete$Plain$Response(params?: {
    context?: HttpContext
    body?: DeleteCategoryRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryDeleteCategoryDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCategoryDeleteCategoryDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryDeleteCategoryDelete$Plain(params?: {
    context?: HttpContext
    body?: DeleteCategoryRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCategoryDeleteCategoryDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryDeleteCategoryDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryDeleteCategoryDelete$Json$Response(params?: {
    context?: HttpContext
    body?: DeleteCategoryRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryDeleteCategoryDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCategoryDeleteCategoryDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCategoryDeleteCategoryDelete$Json(params?: {
    context?: HttpContext
    body?: DeleteCategoryRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCategoryDeleteCategoryDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

}
