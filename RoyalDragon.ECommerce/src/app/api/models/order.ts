/* tslint:disable */
/* eslint-disable */
import { Customer } from './customer';
import { ProductOrder } from './product-order';
import { User } from './user';
export interface Order {
  createOn?: string;
  customer?: Customer;
  customerId?: number;
  note?: null | string;
  orderId?: number;
  productOrder?: null | Array<ProductOrder>;
  state?: number;
  user?: User;
  userId?: number;
}
