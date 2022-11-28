import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreCardModule } from '@core/components/core-card/core-card.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CardActionsComponent } from 'app/main/ui/card/card-actions/card-actions.component';
// routing
const routes = [
    {
        path: 'card/actions',
        component: CardActionsComponent,
        data: { animation: 'actions' }
    }
];
let CardActionsModule = class CardActionsModule {
};
CardActionsModule = __decorate([
    NgModule({
        declarations: [CardActionsComponent],
        imports: [RouterModule.forChild(routes), ContentHeaderModule, CoreCardModule],
        providers: []
    })
], CardActionsModule);
export { CardActionsModule };
//# sourceMappingURL=card-actions.module.js.map