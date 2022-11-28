/* tslint:disable */
/* eslint-disable */
import { Customer } from './customer';
export interface CustomerListResultCustomModel {
  code?: null | number;
  data?: null | Array<Customer>;
  message?: null | string;
  other?: null | {
[key: string]: any;
};
  success?: boolean;
}
