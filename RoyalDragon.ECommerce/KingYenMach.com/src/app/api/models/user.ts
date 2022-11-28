/* tslint:disable */
/* eslint-disable */
import { HistoryCallCustomer } from './history-call-customer';
import { Order } from './order';
import { UserRole } from './user-role';
export interface User {
  address?: null | string;
  avatar?: null | string;
  birthday?: null | string;
  createOn?: string;
  email?: null | string;
  fullname?: null | string;
  historyCallCustomer?: null | Array<HistoryCallCustomer>;
  isActive?: null | boolean;
  order?: null | Array<Order>;
  password?: null | string;
  phone?: null | string;
  position?: null | string;
  userId?: number;
  userRole?: null | Array<UserRole>;
  username?: null | string;
}
