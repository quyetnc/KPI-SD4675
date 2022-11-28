/* tslint:disable */
/* eslint-disable */
import { VProductDetail } from './v-product-detail';
import { VReview } from './v-review';
export interface ProductDetailResponse {
  productDetail?: VProductDetail;
  reviews?: null | Array<VReview>;
}
