import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { ChartjsComponent } from './chartjs.component';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
// routing
const routes = [
    {
        path: 'chartjs',
        component: ChartjsComponent,
        data: { animation: 'chartJS' }
    }
];
let ChartjsModule = class ChartjsModule {
};
ChartjsModule = __decorate([
    NgModule({
        declarations: [ChartjsComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            ContentHeaderModule,
            CardSnippetModule,
            ChartsModule,
            Ng2FlatpickrModule,
            CoreCommonModule,
            NgbModule
        ]
    })
], ChartjsModule);
export { ChartjsModule };
//# sourceMappingURL=chartjs.module.js.map