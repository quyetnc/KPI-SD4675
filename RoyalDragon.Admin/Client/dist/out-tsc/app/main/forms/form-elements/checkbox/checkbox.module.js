import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CheckboxComponent } from 'app/main/forms/form-elements/checkbox/checkbox.component';
const routes = [
    {
        path: 'form-elements/checkbox',
        component: CheckboxComponent,
        data: { animation: 'checkbox' }
    }
];
let CheckboxModule = class CheckboxModule {
};
CheckboxModule = __decorate([
    NgModule({
        declarations: [CheckboxComponent],
        imports: [CommonModule, RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule, FormsModule]
    })
], CheckboxModule);
export { CheckboxModule };
//# sourceMappingURL=checkbox.module.js.map