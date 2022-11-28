/* tslint:disable */
/* eslint-disable */
import { Data } from './data';
export interface DataResultCustomModel {
  code?: null | number;
  data?: Data;
  message?: null | string;
  other?: null | {
[key: string]: any;
};
  success?: boolean;
}
