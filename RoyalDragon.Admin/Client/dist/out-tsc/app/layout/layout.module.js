import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomBreakPointsProvider } from 'app/layout/custom-breakpoints';
import { VerticalLayoutModule } from 'app/layout/vertical/vertical-layout.module';
import { HorizontalLayoutModule } from 'app/layout/horizontal/horizontal-layout.module';
let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    NgModule({
        imports: [FlexLayoutModule.withConfig({ disableDefaultBps: true }), VerticalLayoutModule, HorizontalLayoutModule],
        providers: [CustomBreakPointsProvider],
        exports: [VerticalLayoutModule, HorizontalLayoutModule]
    })
], LayoutModule);
export { LayoutModule };
//# sourceMappingURL=layout.module.js.map