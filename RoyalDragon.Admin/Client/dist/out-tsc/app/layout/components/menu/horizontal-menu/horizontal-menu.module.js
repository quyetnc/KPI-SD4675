import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CoreMenuModule } from '@core/components';
import { CoreCommonModule } from '@core/common.module';
import { HorizontalMenuComponent } from 'app/layout/components/menu/horizontal-menu/horizontal-menu.component';
let HorizontalMenuModule = class HorizontalMenuModule {
};
HorizontalMenuModule = __decorate([
    NgModule({
        declarations: [HorizontalMenuComponent],
        imports: [CoreMenuModule, CoreCommonModule],
        exports: [HorizontalMenuComponent]
    })
], HorizontalMenuModule);
export { HorizontalMenuModule };
//# sourceMappingURL=horizontal-menu.module.js.map