/* tslint:disable */
/* eslint-disable */
import { Product } from './product';
export interface Category {
  categoryId?: number;
  createOn?: string;
  image?: null | string;
  isActive?: boolean;
  name?: null | string;
  product?: null | Array<Product>;
  slug?: null | string;
  totalProduct?: null | number;
}
