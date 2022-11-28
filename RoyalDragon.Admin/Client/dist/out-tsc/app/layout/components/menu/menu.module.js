import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CoreCommonModule } from '@core/common.module';
import { MenuComponent } from 'app/layout/components/menu/menu.component';
import { VerticalMenuModule } from 'app/layout/components/menu/vertical-menu/vertical-menu.module';
import { HorizontalMenuModule } from 'app/layout/components/menu/horizontal-menu/horizontal-menu.module';
let MenuModule = class MenuModule {
};
MenuModule = __decorate([
    NgModule({
        declarations: [MenuComponent],
        imports: [CoreCommonModule, VerticalMenuModule, HorizontalMenuModule],
        exports: [MenuComponent]
    })
], MenuModule);
export { MenuModule };
//# sourceMappingURL=menu.module.js.map