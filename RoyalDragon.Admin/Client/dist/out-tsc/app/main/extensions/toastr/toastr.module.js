import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { ToastrComponent } from 'app/main/extensions/toastr/toastr.component';
import { CustomToastrComponent } from 'app/main/extensions/toastr/custom-toastr/custom-toastr.component';
// routing
const routes = [
    {
        path: 'toastr',
        component: ToastrComponent,
        data: { animation: 'toastr' }
    }
];
let ToastrsModule = class ToastrsModule {
};
ToastrsModule = __decorate([
    NgModule({
        declarations: [ToastrComponent, CustomToastrComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            CoreCommonModule,
            NgbModule,
            ContentHeaderModule,
            CardSnippetModule,
            ToastrModule
        ]
    })
], ToastrsModule);
export { ToastrsModule };
//# sourceMappingURL=toastr.module.js.map