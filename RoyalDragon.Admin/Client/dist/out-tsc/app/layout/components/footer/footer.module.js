import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { FooterComponent } from 'app/layout/components/footer/footer.component';
import { ScrollTopComponent } from 'app/layout/components/footer/scroll-to-top/scroll-top.component';
let FooterModule = class FooterModule {
};
FooterModule = __decorate([
    NgModule({
        declarations: [FooterComponent, ScrollTopComponent],
        imports: [RouterModule, CoreCommonModule],
        exports: [FooterComponent]
    })
], FooterModule);
export { FooterModule };
//# sourceMappingURL=footer.module.js.map