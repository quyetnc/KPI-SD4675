import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { QuillEditorComponent } from 'app/main/forms/form-elements/quill-editor/quill-editor.component';
// routing
const routes = [
    {
        path: 'form-elements/quill-editor',
        component: QuillEditorComponent,
        data: { animation: 'quill-editor' }
    }
];
let QuillEditorModule = class QuillEditorModule {
};
QuillEditorModule = __decorate([
    NgModule({
        declarations: [QuillEditorComponent],
        imports: [
            RouterModule.forChild(routes),
            ContentHeaderModule,
            CardSnippetModule,
            QuillModule.forRoot(),
            CoreCommonModule
        ]
    })
], QuillEditorModule);
export { QuillEditorModule };
//# sourceMappingURL=quill-editor.module.js.map