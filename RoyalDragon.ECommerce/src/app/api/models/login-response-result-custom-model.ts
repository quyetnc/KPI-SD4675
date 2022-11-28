/* tslint:disable */
/* eslint-disable */
import { LoginResponse } from './login-response';
export interface LoginResponseResultCustomModel {
  code?: null | number;
  data?: LoginResponse;
  message?: null | string;
  other?: null | {
[key: string]: any;
};
  success?: boolean;
}
