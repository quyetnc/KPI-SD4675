import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { RatingsComponent } from 'app/main/components/ratings/ratings.component';
const routes = [
    {
        path: 'ratings',
        component: RatingsComponent,
        data: { animation: 'ratings' }
    }
];
let RatingsModule = class RatingsModule {
};
RatingsModule = __decorate([
    NgModule({
        declarations: [RatingsComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            CoreCommonModule,
            NgbModule,
            ContentHeaderModule,
            CardSnippetModule,
            ReactiveFormsModule
        ]
    })
], RatingsModule);
export { RatingsModule };
//# sourceMappingURL=ratings.module.js.map