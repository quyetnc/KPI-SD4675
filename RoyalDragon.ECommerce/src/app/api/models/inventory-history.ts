/* tslint:disable */
/* eslint-disable */
import { Inventory } from './inventory';
export interface InventoryHistory {
  createBy?: null | string;
  createByUserId?: number;
  createOn?: string;
  currentQuantity?: number;
  inventory?: Inventory;
  inventoryHistoryId?: number;
  inventoryId?: number;
  isActive?: boolean;
  priceInput?: number;
  priceOutput?: number;
  quantity?: number;
}
