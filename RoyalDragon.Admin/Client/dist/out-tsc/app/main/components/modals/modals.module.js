import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { ModalsComponent } from 'app/main/components/modals/modals.component';
const routes = [
    {
        path: 'modals',
        component: ModalsComponent,
        data: { animation: 'modals' }
    }
];
let ModalsModule = class ModalsModule {
};
ModalsModule = __decorate([
    NgModule({
        declarations: [ModalsComponent],
        imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule, CoreCommonModule]
    })
], ModalsModule);
export { ModalsModule };
//# sourceMappingURL=modals.module.js.map