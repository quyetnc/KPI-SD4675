import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CardAdvanceService } from 'app/main/ui/card/card-advance/card-advance.service';
import { CardAdvanceComponent } from 'app/main/ui/card/card-advance/card-advance.component';
// routing
const routes = [
    {
        path: 'card/advance',
        component: CardAdvanceComponent,
        resolve: {
            chatWidget: CardAdvanceService
        },
        data: { animation: 'advance' }
    }
];
let CardAdvanceModule = class CardAdvanceModule {
};
CardAdvanceModule = __decorate([
    NgModule({
        declarations: [CardAdvanceComponent],
        imports: [
            RouterModule.forChild(routes),
            ContentHeaderModule,
            PerfectScrollbarModule,
            CoreCommonModule,
            NgApexchartsModule,
            NgbModule
        ],
        providers: [CardAdvanceService]
    })
], CardAdvanceModule);
export { CardAdvanceModule };
//# sourceMappingURL=card-advance.module.js.map