/* tslint:disable */
/* eslint-disable */
import { CreateOrderFromCustomerModel } from './create-order-from-customer-model';
export interface CreateOrderFromCustomer {
  customerId?: number;
  listProductOrder?: null | Array<CreateOrderFromCustomerModel>;
  noteCustomer?: null | string;
  userId?: number;
}
