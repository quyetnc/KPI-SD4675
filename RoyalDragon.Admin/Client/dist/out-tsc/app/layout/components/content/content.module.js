import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { ContentComponent } from 'app/layout/components/content/content.component';
let ContentModule = class ContentModule {
};
ContentModule = __decorate([
    NgModule({
        declarations: [ContentComponent],
        imports: [RouterModule, CoreCommonModule],
        exports: [ContentComponent]
    })
], ContentModule);
export { ContentModule };
//# sourceMappingURL=content.module.js.map