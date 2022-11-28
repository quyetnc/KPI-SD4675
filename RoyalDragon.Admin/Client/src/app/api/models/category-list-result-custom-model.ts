/* tslint:disable */
/* eslint-disable */
import { Category } from './category';
export interface CategoryListResultCustomModel {
  code?: null | number;
  data?: null | Array<Category>;
  message?: null | string;
  other?: null | {
[key: string]: any;
};
  success?: boolean;
}
