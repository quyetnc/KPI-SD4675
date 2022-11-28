import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TabsComponent } from 'app/main/components/tabs/tabs.component';
const routes = [
    {
        path: 'tabs',
        component: TabsComponent,
        data: { animation: 'tabs' }
    }
];
let TabsModule = class TabsModule {
};
TabsModule = __decorate([
    NgModule({
        declarations: [TabsComponent],
        imports: [RouterModule.forChild(routes), NgbModule, CoreCommonModule, ContentHeaderModule, CardSnippetModule]
    })
], TabsModule);
export { TabsModule };
//# sourceMappingURL=tabs.module.js.map