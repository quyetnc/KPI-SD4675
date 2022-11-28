import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NavsComponent } from 'app/main/components/navs/navs.component';
const routes = [
    {
        path: 'navs',
        component: NavsComponent,
        data: { animation: 'navs' }
    }
];
let NavsModule = class NavsModule {
};
NavsModule = __decorate([
    NgModule({
        declarations: [NavsComponent],
        imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule]
    })
], NavsModule);
export { NavsModule };
//# sourceMappingURL=navs.module.js.map