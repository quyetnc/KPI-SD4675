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

import { UploadFileModelResultCustomModel } from '../models/upload-file-model-result-custom-model';

@Injectable({
  providedIn: 'root',
})
export class UploadService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUploadUploadPost
   */
  static readonly ApiUploadUploadPostPath = '/api/Upload/Upload';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUploadUploadPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUploadUploadPost$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UploadFileModelResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UploadService.ApiUploadUploadPostPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UploadFileModelResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUploadUploadPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUploadUploadPost$Plain(params?: {
    context?: HttpContext
  }
): Observable<UploadFileModelResultCustomModel> {

    return this.apiUploadUploadPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UploadFileModelResultCustomModel>) => r.body as UploadFileModelResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUploadUploadPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUploadUploadPost$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UploadFileModelResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, UploadService.ApiUploadUploadPostPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UploadFileModelResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUploadUploadPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUploadUploadPost$Json(params?: {
    context?: HttpContext
  }
): Observable<UploadFileModelResultCustomModel> {

    return this.apiUploadUploadPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UploadFileModelResultCustomModel>) => r.body as UploadFileModelResultCustomModel)
    );
  }

}
