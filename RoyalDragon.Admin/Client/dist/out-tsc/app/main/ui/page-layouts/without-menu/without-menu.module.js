import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { DashboardModule } from 'app/main/dashboard/dashboard.module';
import { DashboardService } from 'app/main/dashboard/dashboard.service';
import { WithoutMenuComponent } from 'app/main/ui/page-layouts/without-menu/without-menu.component';
const routes = [
    {
        path: 'page-layouts/without-menu',
        component: WithoutMenuComponent,
        resolve: {
            css: DashboardService
        }
    }
];
let WithoutMenuModule = class WithoutMenuModule {
};
WithoutMenuModule = __decorate([
    NgModule({
        declarations: [WithoutMenuComponent],
        imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, DashboardModule],
        providers: [DashboardModule]
    })
], WithoutMenuModule);
export { WithoutMenuModule };
//# sourceMappingURL=without-menu.module.js.map