/* tslint:disable */
/* eslint-disable */
import { UserRole } from './user-role';
export interface Role {
  name?: null | string;
  roleId?: number;
  userRole?: null | Array<UserRole>;
}
