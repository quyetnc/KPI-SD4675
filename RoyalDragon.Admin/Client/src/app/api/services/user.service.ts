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
import { ChangePasswordRequest } from '../models/change-password-request';
import { CreateUserRequest } from '../models/create-user-request';
import { ListUserRequest } from '../models/list-user-request';
import { ListUserResponseResultCustomModel } from '../models/list-user-response-result-custom-model';
import { StringResultCustomModel } from '../models/string-result-custom-model';
import { UpdateUserRequest } from '../models/update-user-request';
import { UserResultCustomModel } from '../models/user-result-custom-model';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserListUserGet
   */
  static readonly ApiUserListUserGetPath = '/api/User/ListUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserListUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserListUserGet$Plain$Response(params?: {
    request?: ListUserRequest;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ListUserResponseResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserListUserGetPath, 'get');
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
        return r as StrictHttpResponse<ListUserResponseResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserListUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserListUserGet$Plain(params?: {
    request?: ListUserRequest;
    context?: HttpContext
  }
): Observable<ListUserResponseResultCustomModel> {

    return this.apiUserListUserGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ListUserResponseResultCustomModel>) => r.body as ListUserResponseResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserListUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserListUserGet$Json$Response(params?: {
    request?: ListUserRequest;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ListUserResponseResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserListUserGetPath, 'get');
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
        return r as StrictHttpResponse<ListUserResponseResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserListUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserListUserGet$Json(params?: {
    request?: ListUserRequest;
    context?: HttpContext
  }
): Observable<ListUserResponseResultCustomModel> {

    return this.apiUserListUserGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ListUserResponseResultCustomModel>) => r.body as ListUserResponseResultCustomModel)
    );
  }

  /**
   * Path part for operation apiUserGetUserGet
   */
  static readonly ApiUserGetUserGetPath = '/api/User/GetUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserGet$Plain$Response(params?: {
    UserId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UserResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetUserGetPath, 'get');
    if (params) {
      rb.query('UserId', params.UserId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserGet$Plain(params?: {
    UserId?: number;
    context?: HttpContext
  }
): Observable<UserResultCustomModel> {

    return this.apiUserGetUserGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserResultCustomModel>) => r.body as UserResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserGetUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserGet$Json$Response(params?: {
    UserId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UserResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserGetUserGetPath, 'get');
    if (params) {
      rb.query('UserId', params.UserId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserGetUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserGetUserGet$Json(params?: {
    UserId?: number;
    context?: HttpContext
  }
): Observable<UserResultCustomModel> {

    return this.apiUserGetUserGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserResultCustomModel>) => r.body as UserResultCustomModel)
    );
  }

  /**
   * Path part for operation apiUserUpdateUserPost
   */
  static readonly ApiUserUpdateUserPostPath = '/api/User/UpdateUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserPost$Plain$Response(params?: {
    context?: HttpContext
    body?: UpdateUserRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUpdateUserPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUserUpdateUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserPost$Plain(params?: {
    context?: HttpContext
    body?: UpdateUserRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiUserUpdateUserPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUpdateUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserPost$Json$Response(params?: {
    context?: HttpContext
    body?: UpdateUserRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUpdateUserPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUserUpdateUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUpdateUserPost$Json(params?: {
    context?: HttpContext
    body?: UpdateUserRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiUserUpdateUserPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * Path part for operation apiUserCreateUserPost
   */
  static readonly ApiUserCreateUserPostPath = '/api/User/CreateUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserCreateUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserCreateUserPost$Plain$Response(params?: {
    context?: HttpContext
    body?: CreateUserRequest
  }
): Observable<StrictHttpResponse<UserResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserCreateUserPostPath, 'post');
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
        return r as StrictHttpResponse<UserResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserCreateUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserCreateUserPost$Plain(params?: {
    context?: HttpContext
    body?: CreateUserRequest
  }
): Observable<UserResultCustomModel> {

    return this.apiUserCreateUserPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserResultCustomModel>) => r.body as UserResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserCreateUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserCreateUserPost$Json$Response(params?: {
    context?: HttpContext
    body?: CreateUserRequest
  }
): Observable<StrictHttpResponse<UserResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserCreateUserPostPath, 'post');
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
        return r as StrictHttpResponse<UserResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserCreateUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserCreateUserPost$Json(params?: {
    context?: HttpContext
    body?: CreateUserRequest
  }
): Observable<UserResultCustomModel> {

    return this.apiUserCreateUserPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserResultCustomModel>) => r.body as UserResultCustomModel)
    );
  }

  /**
   * Path part for operation apiUserResetPasswordUserPost
   */
  static readonly ApiUserResetPasswordUserPostPath = '/api/User/ResetPasswordUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserResetPasswordUserPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserResetPasswordUserPost$Plain$Response(params?: {
    UserId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<StringResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserResetPasswordUserPostPath, 'post');
    if (params) {
      rb.query('UserId', params.UserId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StringResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserResetPasswordUserPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserResetPasswordUserPost$Plain(params?: {
    UserId?: number;
    context?: HttpContext
  }
): Observable<StringResultCustomModel> {

    return this.apiUserResetPasswordUserPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<StringResultCustomModel>) => r.body as StringResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserResetPasswordUserPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserResetPasswordUserPost$Json$Response(params?: {
    UserId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<StringResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserResetPasswordUserPostPath, 'post');
    if (params) {
      rb.query('UserId', params.UserId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StringResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserResetPasswordUserPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserResetPasswordUserPost$Json(params?: {
    UserId?: number;
    context?: HttpContext
  }
): Observable<StringResultCustomModel> {

    return this.apiUserResetPasswordUserPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<StringResultCustomModel>) => r.body as StringResultCustomModel)
    );
  }

  /**
   * Path part for operation apiUserChangePasswordUserPost
   */
  static readonly ApiUserChangePasswordUserPostPath = '/api/User/ChangePasswordUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserChangePasswordUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangePasswordUserPost$Plain$Response(params?: {
    context?: HttpContext
    body?: ChangePasswordRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserChangePasswordUserPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUserChangePasswordUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangePasswordUserPost$Plain(params?: {
    context?: HttpContext
    body?: ChangePasswordRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiUserChangePasswordUserPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserChangePasswordUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangePasswordUserPost$Json$Response(params?: {
    context?: HttpContext
    body?: ChangePasswordRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserChangePasswordUserPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUserChangePasswordUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserChangePasswordUserPost$Json(params?: {
    context?: HttpContext
    body?: ChangePasswordRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiUserChangePasswordUserPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * Path part for operation apiUserDisableUserDelete
   */
  static readonly ApiUserDisableUserDeletePath = '/api/User/DisableUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDisableUserDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDisableUserDelete$Plain$Response(params?: {
    ListProductId?: Array<number>;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserDisableUserDeletePath, 'delete');
    if (params) {
      rb.query('ListProductId', params.ListProductId, {});
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
   * To access the full response (for headers, for example), `apiUserDisableUserDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDisableUserDelete$Plain(params?: {
    ListProductId?: Array<number>;
    context?: HttpContext
  }
): Observable<BooleanResultCustomModel> {

    return this.apiUserDisableUserDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDisableUserDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDisableUserDelete$Json$Response(params?: {
    ListProductId?: Array<number>;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserDisableUserDeletePath, 'delete');
    if (params) {
      rb.query('ListProductId', params.ListProductId, {});
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
   * To access the full response (for headers, for example), `apiUserDisableUserDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDisableUserDelete$Json(params?: {
    ListProductId?: Array<number>;
    context?: HttpContext
  }
): Observable<BooleanResultCustomModel> {

    return this.apiUserDisableUserDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

}
