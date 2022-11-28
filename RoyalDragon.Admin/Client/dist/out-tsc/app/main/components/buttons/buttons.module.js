import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ButtonsComponent } from 'app/main/components/buttons/buttons.component';
const routes = [
    {
        path: 'buttons',
        component: ButtonsComponent,
        data: { animation: 'buttons' }
    }
];
let ButtonsModule = class ButtonsModule {
};
ButtonsModule = __decorate([
    NgModule({
        declarations: [ButtonsComponent],
        imports: [RouterModule.forChild(routes), NgbModule, CoreCommonModule, ContentHeaderModule, CardSnippetModule]
    })
], ButtonsModule);
export { ButtonsModule };
//# sourceMappingURL=buttons.module.js.map