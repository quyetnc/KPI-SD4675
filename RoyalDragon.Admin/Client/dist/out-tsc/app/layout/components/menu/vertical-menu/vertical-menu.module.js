import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { CoreMenuModule } from '@core/components';
import { CoreCommonModule } from '@core/common.module';
import { VerticalMenuComponent } from 'app/layout/components/menu/vertical-menu/vertical-menu.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
let VerticalMenuModule = class VerticalMenuModule {
};
VerticalMenuModule = __decorate([
    NgModule({
        declarations: [VerticalMenuComponent],
        imports: [CoreMenuModule, CoreCommonModule, PerfectScrollbarModule, RouterModule],
        providers: [
            {
                provide: PERFECT_SCROLLBAR_CONFIG,
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ],
        exports: [VerticalMenuComponent]
    })
], VerticalMenuModule);
export { VerticalMenuModule };
//# sourceMappingURL=vertical-menu.module.js.map