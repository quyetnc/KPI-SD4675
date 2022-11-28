/* tslint:disable */
/* eslint-disable */
import { ConfigurationParameters } from './configuration-parameters';
import { ProductCustom } from './product-custom';
import { VListCategoryHomePage } from './v-list-category-home-page';
export interface InitHomePageResponse {
  banner?: null | Array<ProductCustom>;
  feather?: null | Array<ProductCustom>;
  listCategory?: null | Array<VListCategoryHomePage>;
  listConfigurationParameters?: null | Array<ConfigurationParameters>;
  popular?: null | Array<ProductCustom>;
  specialOffer?: null | Array<ProductCustom>;
}
