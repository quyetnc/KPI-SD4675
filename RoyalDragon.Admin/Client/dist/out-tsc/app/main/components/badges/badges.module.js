import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { BadgesComponent } from 'app/main/components/badges/badges.component';
const routes = [
    {
        path: 'badges',
        component: BadgesComponent,
        data: { animation: 'badges' }
    }
];
let BadgesModule = class BadgesModule {
};
BadgesModule = __decorate([
    NgModule({
        declarations: [BadgesComponent],
        imports: [RouterModule.forChild(routes), CoreCommonModule, ContentHeaderModule, CardSnippetModule]
    })
], BadgesModule);
export { BadgesModule };
//# sourceMappingURL=badges.module.js.map