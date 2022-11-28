import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { FileUploaderComponent } from 'app/main/forms/form-elements/file-uploader/file-uploader.component';
// routing
const routes = [
    {
        path: 'form-elements/file-uploader',
        component: FileUploaderComponent,
        data: { animation: 'file-uploader' }
    }
];
let FileUploaderModule = class FileUploaderModule {
};
FileUploaderModule = __decorate([
    NgModule({
        declarations: [FileUploaderComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            NgbModule,
            ContentHeaderModule,
            CardSnippetModule,
            FileUploadModule,
            CoreCommonModule
        ]
    })
], FileUploaderModule);
export { FileUploaderModule };
//# sourceMappingURL=file-uploader.module.js.map