import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { PillBadgesComponent } from 'app/main/components/pill-badges/pill-badges.component';
const routes = [
    {
        path: 'pill-badges',
        component: PillBadgesComponent,
        data: { animation: 'pill-badges' }
    }
];
let PillBadgesModule = class PillBadgesModule {
};
PillBadgesModule = __decorate([
    NgModule({
        declarations: [PillBadgesComponent],
        imports: [RouterModule.forChild(routes), CoreCommonModule, ContentHeaderModule, CardSnippetModule]
    })
], PillBadgesModule);
export { PillBadgesModule };
//# sourceMappingURL=pill-badges.module.js.map