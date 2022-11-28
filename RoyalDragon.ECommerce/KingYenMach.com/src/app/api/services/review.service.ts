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
import { CreateReviewRequest } from '../models/create-review-request';
import { ShowReviewRequest } from '../models/show-review-request';
import { VReviewResultCustomModel } from '../models/v-review-result-custom-model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiReviewCreateReviewPost
   */
  static readonly ApiReviewCreateReviewPostPath = '/api/Review/CreateReview';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewCreateReviewPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewCreateReviewPost$Plain$Response(params?: {
    context?: HttpContext
    body?: CreateReviewRequest
  }
): Observable<StrictHttpResponse<VReviewResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ReviewService.ApiReviewCreateReviewPostPath, 'post');
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
        return r as StrictHttpResponse<VReviewResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReviewCreateReviewPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewCreateReviewPost$Plain(params?: {
    context?: HttpContext
    body?: CreateReviewRequest
  }
): Observable<VReviewResultCustomModel> {

    return this.apiReviewCreateReviewPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<VReviewResultCustomModel>) => r.body as VReviewResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewCreateReviewPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewCreateReviewPost$Json$Response(params?: {
    context?: HttpContext
    body?: CreateReviewRequest
  }
): Observable<StrictHttpResponse<VReviewResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ReviewService.ApiReviewCreateReviewPostPath, 'post');
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
        return r as StrictHttpResponse<VReviewResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiReviewCreateReviewPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewCreateReviewPost$Json(params?: {
    context?: HttpContext
    body?: CreateReviewRequest
  }
): Observable<VReviewResultCustomModel> {

    return this.apiReviewCreateReviewPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<VReviewResultCustomModel>) => r.body as VReviewResultCustomModel)
    );
  }

  /**
   * Path part for operation apiReviewShowReviewPost
   */
  static readonly ApiReviewShowReviewPostPath = '/api/Review/ShowReview';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewShowReviewPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewShowReviewPost$Plain$Response(params?: {
    context?: HttpContext
    body?: ShowReviewRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ReviewService.ApiReviewShowReviewPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiReviewShowReviewPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewShowReviewPost$Plain(params?: {
    context?: HttpContext
    body?: ShowReviewRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiReviewShowReviewPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiReviewShowReviewPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewShowReviewPost$Json$Response(params?: {
    context?: HttpContext
    body?: ShowReviewRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, ReviewService.ApiReviewShowReviewPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiReviewShowReviewPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiReviewShowReviewPost$Json(params?: {
    context?: HttpContext
    body?: ShowReviewRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiReviewShowReviewPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

}
