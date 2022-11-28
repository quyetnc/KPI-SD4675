import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { FeatherComponent } from 'app/main/ui/icons/feather/feather.component';
// routing
const routes = [
    {
        path: 'icons/feather',
        component: FeatherComponent,
        data: { animation: 'feather' }
    }
];
let FeatherModule = class FeatherModule {
};
FeatherModule = __decorate([
    NgModule({
        declarations: [FeatherComponent],
        imports: [CommonModule, RouterModule.forChild(routes), ContentHeaderModule, CoreCommonModule, NgbModule]
    })
], FeatherModule);
export { FeatherModule };
//# sourceMappingURL=feather.module.js.map