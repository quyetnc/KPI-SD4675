import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CardActionsModule } from 'app/main/ui/card/card-actions/card-actions.module';
import { CardAdvanceModule } from 'app/main/ui/card/card-advance/card-advance.module';
import { CardAnalyticsModule } from 'app/main/ui/card/card-analytics/card-analytics.module';
import { CardBasicModule } from 'app/main/ui/card/card-basic/card-basic.module';
import { CardStatisticsModule } from 'app/main/ui/card/card-statistics/card-statistics.module';
let CardModule = class CardModule {
};
CardModule = __decorate([
    NgModule({
        declarations: [],
        imports: [CardActionsModule, CardStatisticsModule, CardAnalyticsModule, CardBasicModule, CardAdvanceModule],
        providers: []
    })
], CardModule);
export { CardModule };
//# sourceMappingURL=card.module.js.map