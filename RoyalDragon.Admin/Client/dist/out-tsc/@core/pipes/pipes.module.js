import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FilterPipe } from '@core/pipes/filter.pipe';
import { InitialsPipe } from '@core/pipes/initials.pipe';
import { SafePipe } from '@core/pipes/safe.pipe';
import { StripHtmlPipe } from '@core/pipes/stripHtml.pipe';
let CorePipesModule = class CorePipesModule {
};
CorePipesModule = __decorate([
    NgModule({
        declarations: [InitialsPipe, FilterPipe, StripHtmlPipe, SafePipe],
        imports: [],
        exports: [InitialsPipe, FilterPipe, StripHtmlPipe, SafePipe]
    })
], CorePipesModule);
export { CorePipesModule };
//# sourceMappingURL=pipes.module.js.map