var CoreModule_1;
import { __decorate, __param } from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CORE_CUSTOM_CONFIG } from '@core/services/config.service';
let CoreModule = CoreModule_1 = class CoreModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('Import CoreModule in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: CoreModule_1,
            providers: [
                {
                    provide: CORE_CUSTOM_CONFIG,
                    useValue: config
                }
            ]
        };
    }
};
CoreModule = CoreModule_1 = __decorate([
    NgModule(),
    __param(0, Optional()),
    __param(0, SkipSelf())
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map