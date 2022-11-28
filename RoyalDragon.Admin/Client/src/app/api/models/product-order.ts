/* tslint:disable */
/* eslint-disable */
import { Order } from './order';
import { Product } from './product';
export interface ProductOrder {
  order?: Order;
  orderId?: number;
  priceInput?: number;
  priceOutput?: number;
  product?: Product;
  productId?: number;
  productOrderId?: number;
  quantity?: number;
  saleOff?: number;
}
