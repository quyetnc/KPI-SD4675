/* tslint:disable */
/* eslint-disable */
import { Category } from './category';
import { Inventory } from './inventory';
import { ProductHistory } from './product-history';
import { ProductOrder } from './product-order';
import { Review } from './review';
export interface Product {
  bannerImg?: null | string;
  category?: Category;
  categoryId?: number;
  description?: null | string;
  img?: null | string;
  img2?: null | string;
  img3?: null | string;
  introduceBannerHtml?: null | string;
  inventory?: null | Array<Inventory>;
  isActive?: null | boolean;
  isBanner?: boolean;
  isFeather?: boolean;
  isPopular?: boolean;
  isSell?: null | boolean;
  isSpecialOffer?: boolean;
  name?: null | string;
  priceInput?: number;
  priceOutput?: number;
  productHistory?: null | Array<ProductHistory>;
  productId?: number;
  productOrder?: null | Array<ProductOrder>;
  quantity?: number;
  review?: null | Array<Review>;
  saleOff?: number;
  shortDescription?: null | string;
  slug?: null | string;
}
