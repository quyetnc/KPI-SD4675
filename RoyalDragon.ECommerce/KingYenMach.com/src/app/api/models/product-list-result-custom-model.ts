/* tslint:disable */
/* eslint-disable */
import { Product } from './product';
export interface ProductListResultCustomModel {
  code?: null | number;
  data?: null | Array<Product>;
  message?: null | string;
  other?: null | {
[key: string]: any;
};
  success?: boolean;
}
