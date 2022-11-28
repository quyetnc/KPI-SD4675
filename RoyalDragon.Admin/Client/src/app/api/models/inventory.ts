/* tslint:disable */
/* eslint-disable */
import { InventoryHistory } from './inventory-history';
import { Product } from './product';
export interface Inventory {
  createOn?: string;
  inventoryHistory?: null | Array<InventoryHistory>;
  inventoryId?: number;
  isActive?: boolean;
  product?: Product;
  productId?: number;
  quantity?: number;
  saleOff?: number;
}
