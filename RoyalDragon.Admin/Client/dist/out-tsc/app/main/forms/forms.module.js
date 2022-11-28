import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FormRepeaterModule } from 'app/main/forms/form-repeater/form-repeater.module';
import { FormElementsModule } from 'app/main/forms/form-elements/form-elements.module';
import { FormLayoutModule } from 'app/main/forms/form-layout/form-layout.module';
import { FormValidationModule } from 'app/main/forms/form-validation/form-validation.module';
import { FormWizardModule } from 'app/main/forms/form-wizard/form-wizard.module';
let FormsModule = class FormsModule {
};
FormsModule = __decorate([
    NgModule({
        declarations: [],
        imports: [FormElementsModule, FormLayoutModule, FormWizardModule, FormValidationModule, FormRepeaterModule]
    })
], FormsModule);
export { FormsModule };
//# sourceMappingURL=forms.module.js.map