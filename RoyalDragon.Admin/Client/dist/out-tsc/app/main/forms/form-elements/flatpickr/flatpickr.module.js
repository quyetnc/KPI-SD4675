import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { FlatpickrComponent } from 'app/main/forms/form-elements/flatpickr/flatpickr.component';
// routing
const routes = [
    {
        path: 'form-elements/flatpickr',
        component: FlatpickrComponent,
        data: { animation: 'flatpickr' }
    }
];
let FlatpickrModule = class FlatpickrModule {
};
FlatpickrModule = __decorate([
    NgModule({
        declarations: [FlatpickrComponent],
        imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule, Ng2FlatpickrModule]
    })
], FlatpickrModule);
export { FlatpickrModule };
//# sourceMappingURL=flatpickr.module.js.map