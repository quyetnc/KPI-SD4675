var UploadService_1;
import { __decorate } from "tslib";
/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { RequestBuilder } from '../request-builder';
import { map, filter } from 'rxjs/operators';
let UploadService = UploadService_1 = class UploadService extends BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUploadUploadPost$Plain()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUploadUploadPost$Plain$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UploadService_1.ApiUploadUploadPostPath, 'post');
        if (params) {
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
     * To access the full response (for headers, for example), `apiUploadUploadPost$Plain$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUploadUploadPost$Plain(params) {
        return this.apiUploadUploadPost$Plain$Response(params).pipe(map((r) => r.body));
    }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `apiUploadUploadPost$Json()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUploadUploadPost$Json$Response(params) {
        const rb = new RequestBuilder(this.rootUrl, UploadService_1.ApiUploadUploadPostPath, 'post');
        if (params) {
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
     * To access the full response (for headers, for example), `apiUploadUploadPost$Json$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    apiUploadUploadPost$Json(params) {
        return this.apiUploadUploadPost$Json$Response(params).pipe(map((r) => r.body));
    }
};
/**
 * Path part for operation apiUploadUploadPost
 */
UploadService.ApiUploadUploadPostPath = '/api/Upload/Upload';
UploadService = UploadService_1 = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UploadService);
export { UploadService };
//# sourceMappingURL=upload.service.js.map