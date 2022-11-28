import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { SpinnerComponent } from 'app/main/components/spinner/spinner.component';
const routes = [
    {
        path: 'spinner',
        component: SpinnerComponent,
        data: { animation: 'spinner' }
    }
];
let SpinnerModule = class SpinnerModule {
};
SpinnerModule = __decorate([
    NgModule({
        declarations: [SpinnerComponent],
        imports: [RouterModule.forChild(routes), CoreCommonModule, ContentHeaderModule, CardSnippetModule]
    })
], SpinnerModule);
export { SpinnerModule };
//# sourceMappingURL=spinner.module.js.map