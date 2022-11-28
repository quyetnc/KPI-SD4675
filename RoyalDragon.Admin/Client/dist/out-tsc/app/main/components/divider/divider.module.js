import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { DividerComponent } from 'app/main/components/divider/divider.component';
const routes = [
    {
        path: 'divider',
        component: DividerComponent,
        data: { animation: 'divider' }
    }
];
let DividerModule = class DividerModule {
};
DividerModule = __decorate([
    NgModule({
        declarations: [DividerComponent],
        imports: [RouterModule.forChild(routes), CoreCommonModule, ContentHeaderModule, CardSnippetModule]
    })
], DividerModule);
export { DividerModule };
//# sourceMappingURL=divider.module.js.map