import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { LayoutEmptyComponent } from 'app/main/ui/page-layouts/layout-empty/layout-empty.component';
const routes = [
    {
        path: 'page-layouts/layout-empty',
        component: LayoutEmptyComponent
    }
];
let LayoutEmptyModule = class LayoutEmptyModule {
};
LayoutEmptyModule = __decorate([
    NgModule({
        declarations: [LayoutEmptyComponent],
        imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule]
    })
], LayoutEmptyModule);
export { LayoutEmptyModule };
//# sourceMappingURL=layout-empty.module.js.map