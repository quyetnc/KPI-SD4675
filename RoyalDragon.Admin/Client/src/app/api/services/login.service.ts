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

import { CustomerLoginResponseeResultCustomModel } from '../models/customer-login-responsee-result-custom-model';
import { DataResultCustomModel } from '../models/data-result-custom-model';
import { LoginRequest } from '../models/login-request';
import { LoginResponseResultCustomModel } from '../models/login-response-result-custom-model';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation loginPost
   */
  static readonly LoginPostPath = '/Login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginPost$Plain$Response(params?: {
    context?: HttpContext
    body?: LoginRequest
  }
): Observable<StrictHttpResponse<LoginResponseResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.LoginPostPath, 'post');
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
        return r as StrictHttpResponse<LoginResponseResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginPost$Plain(params?: {
    context?: HttpContext
    body?: LoginRequest
  }
): Observable<LoginResponseResultCustomModel> {

    return this.loginPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<LoginResponseResultCustomModel>) => r.body as LoginResponseResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginPost$Json$Response(params?: {
    context?: HttpContext
    body?: LoginRequest
  }
): Observable<StrictHttpResponse<LoginResponseResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.LoginPostPath, 'post');
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
        return r as StrictHttpResponse<LoginResponseResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  loginPost$Json(params?: {
    context?: HttpContext
    body?: LoginRequest
  }
): Observable<LoginResponseResultCustomModel> {

    return this.loginPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<LoginResponseResultCustomModel>) => r.body as LoginResponseResultCustomModel)
    );
  }

  /**
   * Path part for operation customerLoginGoogleGet
   */
  static readonly CustomerLoginGoogleGetPath = '/CustomerLoginGoogle';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerLoginGoogleGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerLoginGoogleGet$Plain$Response(params?: {
    token?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CustomerLoginResponseeResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.CustomerLoginGoogleGetPath, 'get');
    if (params) {
      rb.query('token', params.token, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerLoginResponseeResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customerLoginGoogleGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerLoginGoogleGet$Plain(params?: {
    token?: string;
    context?: HttpContext
  }
): Observable<CustomerLoginResponseeResultCustomModel> {

    return this.customerLoginGoogleGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerLoginResponseeResultCustomModel>) => r.body as CustomerLoginResponseeResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerLoginGoogleGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerLoginGoogleGet$Json$Response(params?: {
    token?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<CustomerLoginResponseeResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.CustomerLoginGoogleGetPath, 'get');
    if (params) {
      rb.query('token', params.token, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CustomerLoginResponseeResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customerLoginGoogleGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerLoginGoogleGet$Json(params?: {
    token?: string;
    context?: HttpContext
  }
): Observable<CustomerLoginResponseeResultCustomModel> {

    return this.customerLoginGoogleGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerLoginResponseeResultCustomModel>) => r.body as CustomerLoginResponseeResultCustomModel)
    );
  }

  /**
   * Path part for operation customerLoginPost
   */
  static readonly CustomerLoginPostPath = '/CustomerLogin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerLoginPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  customerLoginPost$Plain$Response(params?: {
    context?: HttpContext
    body?: LoginRequest
  }
): Observable<StrictHttpResponse<CustomerLoginResponseeResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.CustomerLoginPostPath, 'post');
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
        return r as StrictHttpResponse<CustomerLoginResponseeResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customerLoginPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  customerLoginPost$Plain(params?: {
    context?: HttpContext
    body?: LoginRequest
  }
): Observable<CustomerLoginResponseeResultCustomModel> {

    return this.customerLoginPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerLoginResponseeResultCustomModel>) => r.body as CustomerLoginResponseeResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerLoginPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  customerLoginPost$Json$Response(params?: {
    context?: HttpContext
    body?: LoginRequest
  }
): Observable<StrictHttpResponse<CustomerLoginResponseeResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.CustomerLoginPostPath, 'post');
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
        return r as StrictHttpResponse<CustomerLoginResponseeResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customerLoginPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  customerLoginPost$Json(params?: {
    context?: HttpContext
    body?: LoginRequest
  }
): Observable<CustomerLoginResponseeResultCustomModel> {

    return this.customerLoginPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CustomerLoginResponseeResultCustomModel>) => r.body as CustomerLoginResponseeResultCustomModel)
    );
  }

  /**
   * Path part for operation customerLoginFacebookGet
   */
  static readonly CustomerLoginFacebookGetPath = '/CustomerLoginFacebook';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerLoginFacebookGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerLoginFacebookGet$Plain$Response(params?: {
    token?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<DataResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.CustomerLoginFacebookGetPath, 'get');
    if (params) {
      rb.query('token', params.token, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DataResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customerLoginFacebookGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerLoginFacebookGet$Plain(params?: {
    token?: string;
    context?: HttpContext
  }
): Observable<DataResultCustomModel> {

    return this.customerLoginFacebookGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<DataResultCustomModel>) => r.body as DataResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `customerLoginFacebookGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerLoginFacebookGet$Json$Response(params?: {
    token?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<DataResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, LoginService.CustomerLoginFacebookGetPath, 'get');
    if (params) {
      rb.query('token', params.token, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DataResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `customerLoginFacebookGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  customerLoginFacebookGet$Json(params?: {
    token?: string;
    context?: HttpContext
  }
): Observable<DataResultCustomModel> {

    return this.customerLoginFacebookGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<DataResultCustomModel>) => r.body as DataResultCustomModel)
    );
  }

}
