/* tslint:disable */
/* eslint-disable */
import { User } from './user';
export interface HistoryCallCustomer {
  createOn?: string;
  customerId?: number;
  customerName?: null | string;
  historyCallCustomerId?: number;
  isBuy?: null | boolean;
  note?: null | string;
  user?: User;
  userId?: number;
}
