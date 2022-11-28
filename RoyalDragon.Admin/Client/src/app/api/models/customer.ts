/* tslint:disable */
/* eslint-disable */
import { Order } from './order';
import { Review } from './review';
export interface Customer {
  address?: null | string;
  createBy?: null | string;
  createByUserId?: number;
  createOn?: string;
  customerId?: number;
  email?: null | string;
  fullName?: null | string;
  image?: null | string;
  isActive?: boolean;
  isBadCustomer?: boolean;
  order?: null | Array<Order>;
  password?: null | string;
  phone?: null | string;
  reasonBad?: null | string;
  review?: null | Array<Review>;
  username?: null | string;
}
