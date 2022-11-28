import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutBlankComponent } from 'app/main/ui/page-layouts/layout-blank/layout-blank.component';
// routing
const routes = [
    {
        path: 'page-layouts/layout-blank',
        component: LayoutBlankComponent
    }
];
let LayoutBlankModule = class LayoutBlankModule {
};
LayoutBlankModule = __decorate([
    NgModule({
        declarations: [LayoutBlankComponent],
        imports: [RouterModule.forChild(routes), NgbModule]
    })
], LayoutBlankModule);
export { LayoutBlankModule };
//# sourceMappingURL=layout-blank.module.js.map