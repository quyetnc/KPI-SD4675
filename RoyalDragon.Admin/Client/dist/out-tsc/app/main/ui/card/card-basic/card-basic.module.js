import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreDirectivesModule } from '@core/directives/directives';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CardBasicComponent } from 'app/main/ui/card/card-basic/card-basic.component';
// routing
const routes = [
    {
        path: 'card/card-basic',
        component: CardBasicComponent,
        data: { animation: 'card-basic' }
    }
];
let CardBasicModule = class CardBasicModule {
};
CardBasicModule = __decorate([
    NgModule({
        declarations: [CardBasicComponent],
        imports: [RouterModule.forChild(routes), CoreDirectivesModule, ContentHeaderModule, NgbModule],
        providers: []
    })
], CardBasicModule);
export { CardBasicModule };
//# sourceMappingURL=card-basic.module.js.map