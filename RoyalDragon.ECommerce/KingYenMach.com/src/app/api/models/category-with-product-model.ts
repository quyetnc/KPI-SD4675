/* tslint:disable */
/* eslint-disable */
import { Product } from './product';
export interface CategoryWithProductModel {
  categoryId?: number;
  categoryName?: null | string;
  listProduct?: null | Array<Product>;
}
