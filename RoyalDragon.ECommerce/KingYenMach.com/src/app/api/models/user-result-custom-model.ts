/* tslint:disable */
/* eslint-disable */
import { User } from './user';
export interface UserResultCustomModel {
  code?: null | number;
  data?: User;
  message?: null | string;
  other?: null | {
[key: string]: any;
};
  success?: boolean;
}
