/* tslint:disable */
/* eslint-disable */
import { Role } from './role';
import { User } from './user';
export interface ListUserResponse {
  roles?: null | Array<Role>;
  users?: null | Array<User>;
}
