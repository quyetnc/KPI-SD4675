import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { AlertsComponent } from 'app/main/components/alerts/alerts.component';
const routes = [
    {
        path: 'alerts',
        component: AlertsComponent,
        data: { animation: 'alerts' }
    }
];
let AlertsModule = class AlertsModule {
};
AlertsModule = __decorate([
    NgModule({
        declarations: [AlertsComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            NgbModule,
            CoreCommonModule,
            ContentHeaderModule,
            CardSnippetModule,
            FormsModule
        ]
    })
], AlertsModule);
export { AlertsModule };
//# sourceMappingURL=alerts.module.js.map