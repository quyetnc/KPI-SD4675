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
import { CostResultCustomModel } from '../models/cost-result-custom-model';
import { CreateCostRequest } from '../models/create-cost-request';
import { DeleteCostRequest } from '../models/delete-cost-request';
import { ListCostRequest } from '../models/list-cost-request';
import { UpdateCostRequest } from '../models/update-cost-request';
import { VCostListResultCustomModel } from '../models/v-cost-list-result-custom-model';

@Injectable({
  providedIn: 'root',
})
export class CostService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCostListCostGet
   */
  static readonly ApiCostListCostGetPath = '/api/Cost/ListCost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCostListCostGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCostListCostGet$Plain$Response(params?: {
    request?: ListCostRequest;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<VCostListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CostService.ApiCostListCostGetPath, 'get');
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
        return r as StrictHttpResponse<VCostListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCostListCostGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCostListCostGet$Plain(params?: {
    request?: ListCostRequest;
    context?: HttpContext
  }
): Observable<VCostListResultCustomModel> {

    return this.apiCostListCostGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<VCostListResultCustomModel>) => r.body as VCostListResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCostListCostGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCostListCostGet$Json$Response(params?: {
    request?: ListCostRequest;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<VCostListResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CostService.ApiCostListCostGetPath, 'get');
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
        return r as StrictHttpResponse<VCostListResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCostListCostGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCostListCostGet$Json(params?: {
    request?: ListCostRequest;
    context?: HttpContext
  }
): Observable<VCostListResultCustomModel> {

    return this.apiCostListCostGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<VCostListResultCustomModel>) => r.body as VCostListResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCostUpdateCostPost
   */
  static readonly ApiCostUpdateCostPostPath = '/api/Cost/UpdateCost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCostUpdateCostPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCostUpdateCostPost$Plain$Response(params?: {
    context?: HttpContext
    body?: UpdateCostRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CostService.ApiCostUpdateCostPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCostUpdateCostPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCostUpdateCostPost$Plain(params?: {
    context?: HttpContext
    body?: UpdateCostRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCostUpdateCostPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCostUpdateCostPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCostUpdateCostPost$Json$Response(params?: {
    context?: HttpContext
    body?: UpdateCostRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CostService.ApiCostUpdateCostPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiCostUpdateCostPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCostUpdateCostPost$Json(params?: {
    context?: HttpContext
    body?: UpdateCostRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCostUpdateCostPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCostApproveCostGet
   */
  static readonly ApiCostApproveCostGetPath = '/api/Cost/ApproveCost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCostApproveCostGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCostApproveCostGet$Plain$Response(params?: {
    'Cost.CostId'?: number;
    'Cost.CreateOn'?: string;
    'Cost.AmountOfMoney'?: number;
    'Cost.UserId'?: number;
    'Cost.Reason'?: string;
    'Cost.IsActive'?: boolean;
    'Cost.IsApprove'?: boolean;
    'Cost.ApproveBy'?: string;
    UserId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CostService.ApiCostApproveCostGetPath, 'get');
    if (params) {
      rb.query('Cost.CostId', params['Cost.CostId'], {});
      rb.query('Cost.CreateOn', params['Cost.CreateOn'], {});
      rb.query('Cost.AmountOfMoney', params['Cost.AmountOfMoney'], {});
      rb.query('Cost.UserId', params['Cost.UserId'], {});
      rb.query('Cost.Reason', params['Cost.Reason'], {});
      rb.query('Cost.IsActive', params['Cost.IsActive'], {});
      rb.query('Cost.IsApprove', params['Cost.IsApprove'], {});
      rb.query('Cost.ApproveBy', params['Cost.ApproveBy'], {});
      rb.query('UserId', params.UserId, {});
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
   * To access the full response (for headers, for example), `apiCostApproveCostGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCostApproveCostGet$Plain(params?: {
    'Cost.CostId'?: number;
    'Cost.CreateOn'?: string;
    'Cost.AmountOfMoney'?: number;
    'Cost.UserId'?: number;
    'Cost.Reason'?: string;
    'Cost.IsActive'?: boolean;
    'Cost.IsApprove'?: boolean;
    'Cost.ApproveBy'?: string;
    UserId?: number;
    context?: HttpContext
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCostApproveCostGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCostApproveCostGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCostApproveCostGet$Json$Response(params?: {
    'Cost.CostId'?: number;
    'Cost.CreateOn'?: string;
    'Cost.AmountOfMoney'?: number;
    'Cost.UserId'?: number;
    'Cost.Reason'?: string;
    'Cost.IsActive'?: boolean;
    'Cost.IsApprove'?: boolean;
    'Cost.ApproveBy'?: string;
    UserId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CostService.ApiCostApproveCostGetPath, 'get');
    if (params) {
      rb.query('Cost.CostId', params['Cost.CostId'], {});
      rb.query('Cost.CreateOn', params['Cost.CreateOn'], {});
      rb.query('Cost.AmountOfMoney', params['Cost.AmountOfMoney'], {});
      rb.query('Cost.UserId', params['Cost.UserId'], {});
      rb.query('Cost.Reason', params['Cost.Reason'], {});
      rb.query('Cost.IsActive', params['Cost.IsActive'], {});
      rb.query('Cost.IsApprove', params['Cost.IsApprove'], {});
      rb.query('Cost.ApproveBy', params['Cost.ApproveBy'], {});
      rb.query('UserId', params.UserId, {});
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
   * To access the full response (for headers, for example), `apiCostApproveCostGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCostApproveCostGet$Json(params?: {
    'Cost.CostId'?: number;
    'Cost.CreateOn'?: string;
    'Cost.AmountOfMoney'?: number;
    'Cost.UserId'?: number;
    'Cost.Reason'?: string;
    'Cost.IsActive'?: boolean;
    'Cost.IsApprove'?: boolean;
    'Cost.ApproveBy'?: string;
    UserId?: number;
    context?: HttpContext
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCostApproveCostGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCostCreateCostPost
   */
  static readonly ApiCostCreateCostPostPath = '/api/Cost/CreateCost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCostCreateCostPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCostCreateCostPost$Plain$Response(params?: {
    context?: HttpContext
    body?: CreateCostRequest
  }
): Observable<StrictHttpResponse<CostResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CostService.ApiCostCreateCostPostPath, 'post');
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
        return r as StrictHttpResponse<CostResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCostCreateCostPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCostCreateCostPost$Plain(params?: {
    context?: HttpContext
    body?: CreateCostRequest
  }
): Observable<CostResultCustomModel> {

    return this.apiCostCreateCostPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CostResultCustomModel>) => r.body as CostResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCostCreateCostPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCostCreateCostPost$Json$Response(params?: {
    context?: HttpContext
    body?: CreateCostRequest
  }
): Observable<StrictHttpResponse<CostResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CostService.ApiCostCreateCostPostPath, 'post');
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
        return r as StrictHttpResponse<CostResultCustomModel>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCostCreateCostPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCostCreateCostPost$Json(params?: {
    context?: HttpContext
    body?: CreateCostRequest
  }
): Observable<CostResultCustomModel> {

    return this.apiCostCreateCostPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CostResultCustomModel>) => r.body as CostResultCustomModel)
    );
  }

  /**
   * Path part for operation apiCostDeleteCostDelete
   */
  static readonly ApiCostDeleteCostDeletePath = '/api/Cost/DeleteCost';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCostDeleteCostDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCostDeleteCostDelete$Plain$Response(params?: {
    context?: HttpContext
    body?: DeleteCostRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CostService.ApiCostDeleteCostDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCostDeleteCostDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCostDeleteCostDelete$Plain(params?: {
    context?: HttpContext
    body?: DeleteCostRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCostDeleteCostDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCostDeleteCostDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCostDeleteCostDelete$Json$Response(params?: {
    context?: HttpContext
    body?: DeleteCostRequest
  }
): Observable<StrictHttpResponse<BooleanResultCustomModel>> {

    const rb = new RequestBuilder(this.rootUrl, CostService.ApiCostDeleteCostDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiCostDeleteCostDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCostDeleteCostDelete$Json(params?: {
    context?: HttpContext
    body?: DeleteCostRequest
  }
): Observable<BooleanResultCustomModel> {

    return this.apiCostDeleteCostDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BooleanResultCustomModel>) => r.body as BooleanResultCustomModel)
    );
  }

}
