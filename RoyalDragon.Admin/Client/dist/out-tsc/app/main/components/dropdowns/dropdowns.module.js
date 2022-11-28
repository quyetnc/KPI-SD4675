import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { DropdownsComponent } from 'app/main/components/dropdowns/dropdowns.component';
const routes = [
    {
        path: 'dropdowns',
        component: DropdownsComponent,
        data: { animation: 'dropdowns' }
    }
];
let DropdownsModule = class DropdownsModule {
};
DropdownsModule = __decorate([
    NgModule({
        declarations: [DropdownsComponent],
        imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule, CoreCommonModule]
    })
], DropdownsModule);
export { DropdownsModule };
//# sourceMappingURL=dropdowns.module.js.map