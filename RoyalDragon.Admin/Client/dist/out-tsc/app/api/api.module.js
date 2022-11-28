var ApiModule_1;
import { __decorate, __param } from "tslib";
/* tslint:disable */
/* eslint-disable */
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { ApiConfiguration } from './api-configuration';
import { CategoryService } from './services/category.service';
import { CostService } from './services/cost.service';
import { CustomerService } from './services/customer.service';
import { LoginService } from './services/login.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { SaleService } from './services/sale.service';
import { UploadService } from './services/upload.service';
import { UserService } from './services/user.service';
/**
 * Module that provides all services and configuration.
 */
let ApiModule = ApiModule_1 = class ApiModule {
    static forRoot(params) {
        return {
            ngModule: ApiModule_1,
            providers: [
                {
                    provide: ApiConfiguration,
                    useValue: params
                }
            ]
        };
    }
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
};
ApiModule = ApiModule_1 = __decorate([
    NgModule({
        imports: [],
        exports: [],
        declarations: [],
        providers: [
            CategoryService,
            CostService,
            CustomerService,
            LoginService,
            OrderService,
            ProductService,
            SaleService,
            UploadService,
            UserService,
            ApiConfiguration
        ],
    }),
    __param(0, Optional()),
    __param(0, SkipSelf()),
    __param(1, Optional())
], ApiModule);
export { ApiModule };
//# sourceMappingURL=api.module.js.map