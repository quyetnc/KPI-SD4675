/* tslint:disable */
/* eslint-disable */
import { Product } from './product';
export interface ProductHistory {
  createBy?: null | string;
  createByUserId?: number;
  createOn?: string;
  priceInput?: number;
  priceOutput?: number;
  product?: Product;
  productHistoryId?: number;
  productId?: number;
  saleOff?: number;
}
