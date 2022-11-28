import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CardStatisticsService } from 'app/main/ui/card/card-statistics/card-statistics.service';
import { CardStatisticsComponent } from 'app/main/ui/card/card-statistics/card-statistics.component';
// routing
const routes = [
    {
        path: 'card/statistics',
        component: CardStatisticsComponent,
        resolve: {
            css: CardStatisticsService
        },
        data: { animation: 'statistics' }
    }
];
let CardStatisticsModule = class CardStatisticsModule {
};
CardStatisticsModule = __decorate([
    NgModule({
        declarations: [CardStatisticsComponent],
        imports: [RouterModule.forChild(routes), ContentHeaderModule, NgApexchartsModule, CoreCommonModule],
        providers: [CardStatisticsService]
    })
], CardStatisticsModule);
export { CardStatisticsModule };
//# sourceMappingURL=card-statistics.module.js.map