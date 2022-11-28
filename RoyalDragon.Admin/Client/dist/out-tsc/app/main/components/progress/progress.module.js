import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { ProgressComponent } from 'app/main/components/progress/progress.component';
const routes = [
    {
        path: 'progress',
        component: ProgressComponent,
        data: { animation: 'progress' }
    }
];
let ProgressModule = class ProgressModule {
};
ProgressModule = __decorate([
    NgModule({
        declarations: [ProgressComponent],
        imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule]
    })
], ProgressModule);
export { ProgressModule };
//# sourceMappingURL=progress.module.js.map