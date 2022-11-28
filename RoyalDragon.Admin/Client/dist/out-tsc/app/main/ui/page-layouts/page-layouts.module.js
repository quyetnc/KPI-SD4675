import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BoxedLayoutModule } from 'app/main/ui/page-layouts/boxed-layout/boxed-layout.module';
import { WithoutMenuModule } from 'app/main/ui/page-layouts/without-menu/without-menu.module';
import { LayoutEmptyModule } from 'app/main/ui/page-layouts/layout-empty/layout-empty.module';
import { LayoutBlankModule } from 'app/main/ui/page-layouts/layout-blank/layout-blank.module';
import { CollapsedMenuModule } from 'app/main/ui/page-layouts/collapsed-menu/collapsed-menu.module';
let PageLayoutsModule = class PageLayoutsModule {
};
PageLayoutsModule = __decorate([
    NgModule({
        imports: [BoxedLayoutModule, CollapsedMenuModule, LayoutBlankModule, LayoutEmptyModule, WithoutMenuModule],
        declarations: []
    })
], PageLayoutsModule);
export { PageLayoutsModule };
//# sourceMappingURL=page-layouts.module.js.map