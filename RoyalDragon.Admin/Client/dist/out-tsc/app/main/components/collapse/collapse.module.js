import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CollapseComponent } from 'app/main/components/collapse/collapse.component';
const routes = [
    {
        path: 'collapse',
        component: CollapseComponent,
        data: { animation: 'collapse' }
    }
];
let CollapseModule = class CollapseModule {
};
CollapseModule = __decorate([
    NgModule({
        declarations: [CollapseComponent],
        imports: [RouterModule.forChild(routes), NgbModule, CoreCommonModule, ContentHeaderModule, CardSnippetModule]
    })
], CollapseModule);
export { CollapseModule };
//# sourceMappingURL=collapse.module.js.map