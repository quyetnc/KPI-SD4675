/* tslint:disable */
/* eslint-disable */
import { Metadata } from './metadata';
export interface Data {
  app_id?: number;
  application?: null | string;
  expires_at?: number;
  is_valid?: boolean;
  issued_at?: number;
  metadata?: Metadata;
  scopes?: null | Array<string>;
  type?: null | string;
  user_id?: null | string;
}
