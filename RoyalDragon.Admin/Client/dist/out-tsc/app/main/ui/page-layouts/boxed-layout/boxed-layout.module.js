import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { BoxedLayoutComponent } from 'app/main/ui/page-layouts/boxed-layout/boxed-layout.component';
import { DashboardModule } from 'app/main/dashboard/dashboard.module';
import { DashboardService } from 'app/main/dashboard/dashboard.service';
const routes = [
    {
        path: 'page-layouts/boxed-layout',
        component: BoxedLayoutComponent,
        resolve: {
            css: DashboardService
        }
    }
];
let BoxedLayoutModule = class BoxedLayoutModule {
};
BoxedLayoutModule = __decorate([
    NgModule({
        declarations: [BoxedLayoutComponent],
        imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, DashboardModule],
        providers: [DashboardService]
    })
], BoxedLayoutModule);
export { BoxedLayoutModule };
//# sourceMappingURL=boxed-layout.module.js.map