import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TextareaComponent } from 'app/main/forms/form-elements/textarea/textarea.component';
const routes = [
    {
        path: 'form-elements/textarea',
        component: TextareaComponent,
        data: { animation: 'textarea' }
    }
];
let TextareaModule = class TextareaModule {
};
TextareaModule = __decorate([
    NgModule({
        declarations: [TextareaComponent],
        imports: [CommonModule, RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule, FormsModule]
    })
], TextareaModule);
export { TextareaModule };
//# sourceMappingURL=textarea.module.js.map