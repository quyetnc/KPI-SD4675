import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TooltipsComponent } from 'app/main/components/tooltips/tooltips.component';
const routes = [
    {
        path: 'tooltips',
        component: TooltipsComponent,
        data: { animation: 'tooltips' }
    }
];
let TooltipsModule = class TooltipsModule {
};
TooltipsModule = __decorate([
    NgModule({
        declarations: [TooltipsComponent],
        imports: [RouterModule.forChild(routes), NgbModule, CoreCommonModule, ContentHeaderModule, CardSnippetModule]
    })
], TooltipsModule);
export { TooltipsModule };
//# sourceMappingURL=tooltips.module.js.map