/* tslint:disable */
/* eslint-disable */
import { Customer } from './customer';
import { Product } from './product';
export interface Review {
  comment?: null | string;
  createOn?: string;
  customer?: Customer;
  customerId?: number;
  isActive?: null | boolean;
  product?: Product;
  productId?: number;
  reviewId?: number;
  star?: number;
}
