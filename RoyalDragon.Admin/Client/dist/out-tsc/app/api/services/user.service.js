var UserService_1;
import { __decorate } from "tslib";
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { RequestBuilder } from '../request-builder';
import { map, filter } from 'rxjs/operators';
let UserService = UserService_1 = class UserService extends BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUserListUserGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserListUserGet$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UserService_1.ApiUserListUserGetPath, 'get');
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
     * To access the full response (for headers, for example), `apiUserListUserGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserListUserGet$Plain(params) {
        return this.apiUserListUserGet$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUserListUserGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserListUserGet$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UserService_1.ApiUserListUserGetPath, 'get');
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
     * To access the full response (for headers, for example), `apiUserListUserGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserListUserGet$Json(params) {
        return this.apiUserListUserGet$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUserGetUserGet$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserGetUserGet$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UserService_1.ApiUserGetUserGetPath, 'get');
        if (params) {
            rb.query('UserId', params.UserId, {});
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
     * To access the full response (for headers, for example), `apiUserGetUserGet$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserGetUserGet$Plain(params) {
        return this.apiUserGetUserGet$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUserGetUserGet$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserGetUserGet$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UserService_1.ApiUserGetUserGetPath, 'get');
        if (params) {
            rb.query('UserId', params.UserId, {});
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
     * To access the full response (for headers, for example), `apiUserGetUserGet$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserGetUserGet$Json(params) {
        return this.apiUserGetUserGet$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUserUpdateUserPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUserUpdateUserPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UserService_1.ApiUserUpdateUserPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiUserUpdateUserPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUserUpdateUserPost$Plain(params) {
        
        return this.apiUserUpdateUserPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUserUpdateUserPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUserUpdateUserPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UserService_1.ApiUserUpdateUserPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiUserUpdateUserPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUserUpdateUserPost$Json(params) {
        return this.apiUserUpdateUserPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUserCreateUserPost$Plain()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUserCreateUserPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UserService_1.ApiUserCreateUserPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiUserCreateUserPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUserCreateUserPost$Plain(params) {
        return this.apiUserCreateUserPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUserCreateUserPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUserCreateUserPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UserService_1.ApiUserCreateUserPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiUserCreateUserPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUserCreateUserPost$Json(params) {
        
        return this.apiUserCreateUserPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUserResetPasswordUserPost$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserResetPasswordUserPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UserService_1.ApiUserResetPasswordUserPostPath, 'post');
        if (params) {
            rb.query('UserId', params.UserId, {});
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
     * To access the full response (for headers, for example), `apiUserResetPasswordUserPost$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserResetPasswordUserPost$Plain(params) {
        return this.apiUserResetPasswordUserPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUserResetPasswordUserPost$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserResetPasswordUserPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UserService_1.ApiUserResetPasswordUserPostPath, 'post');
        if (params) {
            rb.query('UserId', params.UserId, {});
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
     * To access the full response (for headers, for example), `apiUserResetPasswordUserPost$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserResetPasswordUserPost$Json(params) {
        return this.apiUserResetPasswordUserPost$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUserDisableUserDelete$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserDisableUserDelete$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UserService_1.ApiUserDisableUserDeletePath, 'delete');
        if (params) {
            rb.query('ListProductId', params.ListProductId, {});
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
     * To access the full response (for headers, for example), `apiUserDisableUserDelete$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserDisableUserDelete$Plain(params) {
        return this.apiUserDisableUserDelete$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUserDisableUserDelete$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserDisableUserDelete$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UserService_1.ApiUserDisableUserDeletePath, 'delete');
        if (params) {
            rb.query('ListProductId', params.ListProductId, {});
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
     * To access the full response (for headers, for example), `apiUserDisableUserDelete$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUserDisableUserDelete$Json(params) {
        return this.apiUserDisableUserDelete$Json$Response(params).pipe(map((r) => r.body));
    }
    /**
    * This method provides access to the full `HttpResponse`, allowing access to response headers.
    * To access only the response body, use `apiUserUpdateUserPost$Plain()` instead.
    *
    * This method sends `application/*+json` and handles request body of type `application/*+json`.
    */
    apiUserChangePasswordUserPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UserService_1.ApiUserChangePasswordUserPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiUserUpdateUserPost$Plain$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUserChangePasswordUserPost$Plain(params) {
        return this.apiUserChangePasswordUserPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUserUpdateUserPost$Json()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUserChangePasswordUserPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UserService_1.ApiUserChangePasswordUserPostPath, 'post');
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
     * To access the full response (for headers, for example), `apiUserUpdateUserPost$Json$Response()` instead.
     *
     * This method sends `application/*+json` and handles request body of type `application/*+json`.
     */
    apiUserChangePasswordUserPost$Json(params) {
        
        return this.apiUserChangePasswordUserPost$Json$Response(params).pipe(map((r) => r.body));
    }
};
/**
 * Path part for operation apiUserListUserGet
 */
UserService.ApiUserListUserGetPath = '/api/User/ListUser';
/**
 * Path part for operation apiUserGetUserGet
 */
UserService.ApiUserGetUserGetPath = '/api/User/GetUser';
/**
 * Path part for operation apiUserUpdateUserPost
 */
UserService.ApiUserUpdateUserPostPath = '/api/User/UpdateUser';
/**
 * Path part for operation apiUserCreateUserPost
 */
UserService.ApiUserCreateUserPostPath = '/api/User/CreateUser';
/**
 * Path part for operation apiUserResetPasswordUserPost
 */
UserService.ApiUserResetPasswordUserPostPath = '/api/User/ResetPasswordUser';
/**
 * Path part for operation apiUserDisableUserDelete
 */
UserService.ApiUserDisableUserDeletePath = '/api/User/DisableUser';
UserService.ApiUserChangePasswordUserPostPath = '/api/User/ChangePasswordUser';
UserService = UserService_1 = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map