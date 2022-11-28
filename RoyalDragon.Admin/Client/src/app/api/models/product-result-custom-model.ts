/* tslint:disable */
/* eslint-disable */
import { Product } from './product';
export interface ProductResultCustomModel {
  code?: null | number;
  data?: Product;
  message?: null | string;
  other?: null | {
[key: string]: any;
};
  success?: boolean;
}
