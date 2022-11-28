/* tslint:disable */
/* eslint-disable */
import { Customer } from './customer';
export interface CustomerResultCustomModel {
  code?: null | number;
  data?: Customer;
  message?: null | string;
  other?: null | {
[key: string]: any;
};
  success?: boolean;
}
