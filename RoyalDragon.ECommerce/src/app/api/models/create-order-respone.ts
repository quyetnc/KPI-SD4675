/* tslint:disable */
/* eslint-disable */
import { CreateOrderFromCustomerModel } from './create-order-from-customer-model';
export interface CreateOrderRespone {
  customerId?: number;
  listProductOrder?: null | Array<CreateOrderFromCustomerModel>;
  noteCustomer?: null | string;
}
