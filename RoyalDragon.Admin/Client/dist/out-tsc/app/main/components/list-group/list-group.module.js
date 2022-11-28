import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { ListGroupComponent } from 'app/main/components/list-group/list-group.component';
const routes = [
    {
        path: 'list-group',
        component: ListGroupComponent,
        data: { animation: 'list-group' }
    }
];
let ListGroupModule = class ListGroupModule {
};
ListGroupModule = __decorate([
    NgModule({
        declarations: [ListGroupComponent],
        imports: [RouterModule.forChild(routes), NgbModule, CoreCommonModule, ContentHeaderModule, CardSnippetModule]
    })
], ListGroupModule);
export { ListGroupModule };
//# sourceMappingURL=list-group.module.js.map