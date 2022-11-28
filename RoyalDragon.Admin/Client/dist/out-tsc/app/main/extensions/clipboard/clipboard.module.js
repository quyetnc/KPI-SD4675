import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { ClipboardComponent } from 'app/main/extensions/clipboard/clipboard.component';
// routing
const routes = [
    {
        path: 'clipboard',
        component: ClipboardComponent,
        data: { animation: 'clipboard' }
    }
];
let ClipboardModule = class ClipboardModule {
};
ClipboardModule = __decorate([
    NgModule({
        declarations: [ClipboardComponent],
        imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, CoreCommonModule]
    })
], ClipboardModule);
export { ClipboardModule };
//# sourceMappingURL=clipboard.module.js.map