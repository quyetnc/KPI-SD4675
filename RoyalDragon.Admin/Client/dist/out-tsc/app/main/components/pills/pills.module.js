import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { PillsComponent } from 'app/main/components/pills/pills.component';
const routes = [
    {
        path: 'pills',
        component: PillsComponent,
        data: { animation: 'pills' }
    }
];
let PillsModule = class PillsModule {
};
PillsModule = __decorate([
    NgModule({
        declarations: [PillsComponent],
        imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule]
    })
], PillsModule);
export { PillsModule };
//# sourceMappingURL=pills.module.js.map