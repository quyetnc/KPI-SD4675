import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CoreDirectivesModule } from '@core/directives/directives';
import { FormWizardComponent } from 'app/main/forms/form-wizard/form-wizard.component';
const routes = [
    {
        path: 'form-wizard',
        component: FormWizardComponent,
        data: { animation: 'wizard' }
    }
];
let FormWizardModule = class FormWizardModule {
};
FormWizardModule = __decorate([
    NgModule({
        declarations: [FormWizardComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            CoreCommonModule,
            ContentHeaderModule,
            CardSnippetModule,
            FormsModule,
            CoreDirectivesModule,
            NgSelectModule
        ]
    })
], FormWizardModule);
export { FormWizardModule };
//# sourceMappingURL=form-wizard.module.js.map