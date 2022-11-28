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
import { ByteArrayResultCustomModel } from '../models/byte-array-result-custom-model';
import { CreateCustomerRequest } from '../models/create-customer-request';
import { CreateOrderFromCustomer } from '../models/create-order-from-customer';
import { CustomerListResultCustomModel } from '../models/customer-list-result-custom-model';
import { CustomerResultCustomModel } from '../models/customer-result-custom-model';
import { DeleteCustomerRequest } from '../models/delete-customer-request';
import { HistoryCallCustomerListResultCustomModel } from '../models/history-call-customer-list-result-custom-model';
import { HistoryCallCustomerRequest } from '../models/history-call-customer-request';
import { HistoryCallCustomerResultCustomModel } from '../models/history-call-customer-result-custom-model';
import { ImportCustomerRequest } from '../models/import-customer-request';
import { ListCustomerRequest } from '../models/list-customer-request';
import { UpdateCustomerRequest } from '../models/update-customer-request';

@Injectable({
  providedIn: 'root',
})
export class CustomerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCustomerListCustomerGet
   */
  static readonly ApiCustomerListCustomerGetPath = '/api/Customer/ListCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerListCustomerGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerListCustomerGet$Plain$Response(params?: {
    request?: ListCustomerRequest;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CustomerListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerListCustomerGetPath, 'get');
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
        return r as StrictHttpResponse<CustomerListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerListCustomerGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerListCustomerGet$Plain(params?: {
    request?: ListCustomerRequest;
    context?: HttpContext
  }
): Observable<CustomerListResultCustomModel> {

    return this.apiCustomerListCustomerGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerListResultCustomModel>) => r.body as CustomerListResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerListCustomerGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerListCustomerGet$Json$Response(params?: {
    request?: ListCustomerRequest;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CustomerListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerListCustomerGetPath, 'get');
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
        return r as StrictHttpResponse<CustomerListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerListCustomerGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerListCustomerGet$Json(params?: {
    request?: ListCustomerRequest;
    context?: HttpContext
  }
): Observable<CustomerListResultCustomModel> {

    return this.apiCustomerListCustomerGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerListResultCustomModel>) => r.body as CustomerListResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCustomerGetCustomerGet
   */
  static readonly ApiCustomerGetCustomerGetPath = '/api/Customer/GetCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGetCustomerGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetCustomerGet$Plain$Response(params?: {
    CustomerId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CustomerResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerGetCustomerGetPath, 'get');
    if (params) {
      rb.query('CustomerId', params.CustomerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGetCustomerGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetCustomerGet$Plain(params?: {
    CustomerId?: number;
    context?: HttpContext
  }
): Observable<CustomerResultCustomModel> {

    return this.apiCustomerGetCustomerGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerResultCustomModel>) => r.body as CustomerResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerGetCustomerGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetCustomerGet$Json$Response(params?: {
    CustomerId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CustomerResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerGetCustomerGetPath, 'get');
    if (params) {
      rb.query('CustomerId', params.CustomerId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerGetCustomerGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerGetCustomerGet$Json(params?: {
    CustomerId?: number;
    context?: HttpContext
  }
): Observable<CustomerResultCustomModel> {

    return this.apiCustomerGetCustomerGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerResultCustomModel>) => r.body as CustomerResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCustomerUpdateCustomerPost
   */
  static readonly ApiCustomerUpdateCustomerPostPath = '/api/Customer/UpdateCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerUpdateCustomerPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerUpdateCustomerPost$Plain$Response(params?: {
    context?: HttpContext
    body?: UpdateCustomerRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerUpdateCustomerPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCustomerUpdateCustomerPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerUpdateCustomerPost$Plain(params?: {
    context?: HttpContext
    body?: UpdateCustomerRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCustomerUpdateCustomerPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerUpdateCustomerPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerUpdateCustomerPost$Json$Response(params?: {
    context?: HttpContext
    body?: UpdateCustomerRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerUpdateCustomerPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCustomerUpdateCustomerPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerUpdateCustomerPost$Json(params?: {
    context?: HttpContext
    body?: UpdateCustomerRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCustomerUpdateCustomerPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCustomerCreateCustomerPost
   */
  static readonly ApiCustomerCreateCustomerPostPath = '/api/Customer/CreateCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerCreateCustomerPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreateCustomerPost$Plain$Response(params?: {
    context?: HttpContext
    body?: CreateCustomerRequest
  }
): Observable<StrictHttpResponse<CustomerResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerCreateCustomerPostPath, 'post');
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
        return r as StrictHttpResponse<CustomerResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerCreateCustomerPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreateCustomerPost$Plain(params?: {
    context?: HttpContext
    body?: CreateCustomerRequest
  }
): Observable<CustomerResultCustomModel> {

    return this.apiCustomerCreateCustomerPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerResultCustomModel>) => r.body as CustomerResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerCreateCustomerPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreateCustomerPost$Json$Response(params?: {
    context?: HttpContext
    body?: CreateCustomerRequest
  }
): Observable<StrictHttpResponse<CustomerResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerCreateCustomerPostPath, 'post');
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
        return r as StrictHttpResponse<CustomerResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerCreateCustomerPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreateCustomerPost$Json(params?: {
    context?: HttpContext
    body?: CreateCustomerRequest
  }
): Observable<CustomerResultCustomModel> {

    return this.apiCustomerCreateCustomerPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerResultCustomModel>) => r.body as CustomerResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCustomerDeleteCustomerDelete
   */
  static readonly ApiCustomerDeleteCustomerDeletePath = '/api/Customer/DeleteCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerDeleteCustomerDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerDeleteCustomerDelete$Plain$Response(params?: {
    context?: HttpContext
    body?: DeleteCustomerRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerDeleteCustomerDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCustomerDeleteCustomerDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerDeleteCustomerDelete$Plain(params?: {
    context?: HttpContext
    body?: DeleteCustomerRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCustomerDeleteCustomerDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerDeleteCustomerDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerDeleteCustomerDelete$Json$Response(params?: {
    context?: HttpContext
    body?: DeleteCustomerRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerDeleteCustomerDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCustomerDeleteCustomerDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerDeleteCustomerDelete$Json(params?: {
    context?: HttpContext
    body?: DeleteCustomerRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCustomerDeleteCustomerDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCustomerExportExcelCustomerPost
   */
  static readonly ApiCustomerExportExcelCustomerPostPath = '/api/Customer/ExportExcelCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerExportExcelCustomerPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerExportExcelCustomerPost$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ByteArrayResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerExportExcelCustomerPostPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ByteArrayResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerExportExcelCustomerPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerExportExcelCustomerPost$Plain(params?: {
    context?: HttpContext
  }
): Observable<ByteArrayResultCustomModel> {

    return this.apiCustomerExportExcelCustomerPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ByteArrayResultCustomModel>) => r.body as ByteArrayResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerExportExcelCustomerPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerExportExcelCustomerPost$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ByteArrayResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerExportExcelCustomerPostPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ByteArrayResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerExportExcelCustomerPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerExportExcelCustomerPost$Json(params?: {
    context?: HttpContext
  }
): Observable<ByteArrayResultCustomModel> {

    return this.apiCustomerExportExcelCustomerPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ByteArrayResultCustomModel>) => r.body as ByteArrayResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCustomerImportCustomerPost
   */
  static readonly ApiCustomerImportCustomerPostPath = '/api/Customer/ImportCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerImportCustomerPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerImportCustomerPost$Plain$Response(params?: {
    context?: HttpContext
    body?: ImportCustomerRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerImportCustomerPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCustomerImportCustomerPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerImportCustomerPost$Plain(params?: {
    context?: HttpContext
    body?: ImportCustomerRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCustomerImportCustomerPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerImportCustomerPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerImportCustomerPost$Json$Response(params?: {
    context?: HttpContext
    body?: ImportCustomerRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerImportCustomerPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCustomerImportCustomerPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerImportCustomerPost$Json(params?: {
    context?: HttpContext
    body?: ImportCustomerRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCustomerImportCustomerPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCustomerCreateOrderFromCustomerPost
   */
  static readonly ApiCustomerCreateOrderFromCustomerPostPath = '/api/Customer/CreateOrderFromCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerCreateOrderFromCustomerPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreateOrderFromCustomerPost$Plain$Response(params?: {
    context?: HttpContext
    body?: CreateOrderFromCustomer
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerCreateOrderFromCustomerPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCustomerCreateOrderFromCustomerPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreateOrderFromCustomerPost$Plain(params?: {
    context?: HttpContext
    body?: CreateOrderFromCustomer
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCustomerCreateOrderFromCustomerPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerCreateOrderFromCustomerPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreateOrderFromCustomerPost$Json$Response(params?: {
    context?: HttpContext
    body?: CreateOrderFromCustomer
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerCreateOrderFromCustomerPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCustomerCreateOrderFromCustomerPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreateOrderFromCustomerPost$Json(params?: {
    context?: HttpContext
    body?: CreateOrderFromCustomer
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCustomerCreateOrderFromCustomerPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCustomerCreateHistoryCallCustomerPost
   */
  static readonly ApiCustomerCreateHistoryCallCustomerPostPath = '/api/Customer/CreateHistoryCallCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerCreateHistoryCallCustomerPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreateHistoryCallCustomerPost$Plain$Response(params?: {
    context?: HttpContext
    body?: HistoryCallCustomerRequest
  }
): Observable<StrictHttpResponse<HistoryCallCustomerResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerCreateHistoryCallCustomerPostPath, 'post');
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
        return r as StrictHttpResponse<HistoryCallCustomerResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerCreateHistoryCallCustomerPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreateHistoryCallCustomerPost$Plain(params?: {
    context?: HttpContext
    body?: HistoryCallCustomerRequest
  }
): Observable<HistoryCallCustomerResultCustomModel> {

    return this.apiCustomerCreateHistoryCallCustomerPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<HistoryCallCustomerResultCustomModel>) => r.body as HistoryCallCustomerResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerCreateHistoryCallCustomerPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreateHistoryCallCustomerPost$Json$Response(params?: {
    context?: HttpContext
    body?: HistoryCallCustomerRequest
  }
): Observable<StrictHttpResponse<HistoryCallCustomerResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerCreateHistoryCallCustomerPostPath, 'post');
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
        return r as StrictHttpResponse<HistoryCallCustomerResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerCreateHistoryCallCustomerPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreateHistoryCallCustomerPost$Json(params?: {
    context?: HttpContext
    body?: HistoryCallCustomerRequest
  }
): Observable<HistoryCallCustomerResultCustomModel> {

    return this.apiCustomerCreateHistoryCallCustomerPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<HistoryCallCustomerResultCustomModel>) => r.body as HistoryCallCustomerResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCustomerListHistoryCallCustomerGet
   */
  static readonly ApiCustomerListHistoryCallCustomerGetPath = '/api/Customer/ListHistoryCallCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerListHistoryCallCustomerGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerListHistoryCallCustomerGet$Plain$Response(params?: {
    CustomerId?: number;
    UserId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<HistoryCallCustomerListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerListHistoryCallCustomerGetPath, 'get');
    if (params) {
      rb.query('CustomerId', params.CustomerId, {});
      rb.query('UserId', params.UserId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HistoryCallCustomerListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerListHistoryCallCustomerGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerListHistoryCallCustomerGet$Plain(params?: {
    CustomerId?: number;
    UserId?: number;
    context?: HttpContext
  }
): Observable<HistoryCallCustomerListResultCustomModel> {

    return this.apiCustomerListHistoryCallCustomerGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<HistoryCallCustomerListResultCustomModel>) => r.body as HistoryCallCustomerListResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerListHistoryCallCustomerGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerListHistoryCallCustomerGet$Json$Response(params?: {
    CustomerId?: number;
    UserId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<HistoryCallCustomerListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CustomerService.ApiCustomerListHistoryCallCustomerGetPath, 'get');
    if (params) {
      rb.query('CustomerId', params.CustomerId, {});
      rb.query('UserId', params.UserId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<HistoryCallCustomerListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCustomerListHistoryCallCustomerGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerListHistoryCallCustomerGet$Json(params?: {
    CustomerId?: number;
    UserId?: number;
    context?: HttpContext
  }
): Observable<HistoryCallCustomerListResultCustomModel> {

    return this.apiCustomerListHistoryCallCustomerGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<HistoryCallCustomerListResultCustomModel>) => r.body as HistoryCallCustomerListResultCustomModel)
    );
  }

}
