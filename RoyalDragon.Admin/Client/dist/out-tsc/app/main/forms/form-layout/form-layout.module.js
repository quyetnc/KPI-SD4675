import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { FormLayoutComponent } from 'app/main/forms/form-layout/form-layout.component';
const routes = [
    {
        path: 'form-layout',
        component: FormLayoutComponent,
        data: { animation: 'layout' }
    }
];
let FormLayoutModule = class FormLayoutModule {
};
FormLayoutModule = __decorate([
    NgModule({
        declarations: [FormLayoutComponent],
        imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, FormsModule, CoreCommonModule]
    })
], FormLayoutModule);
export { FormLayoutModule };
//# sourceMappingURL=form-layout.module.js.map