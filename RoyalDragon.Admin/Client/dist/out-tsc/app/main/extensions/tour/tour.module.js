import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TourComponent } from 'app/main/extensions/tour/tour.component';
// routing
const routes = [
    {
        path: 'tour',
        component: TourComponent,
        data: { animation: 'tour' }
    }
];
let TourModule = class TourModule {
};
TourModule = __decorate([
    NgModule({
        declarations: [TourComponent],
        imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule]
    })
], TourModule);
export { TourModule };
//# sourceMappingURL=tour.module.js.map