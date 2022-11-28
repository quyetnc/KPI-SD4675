import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { I18nComponent } from 'app/main/extensions/i18n/i18n.component';
// routing
const routes = [
    {
        path: 'i18n',
        component: I18nComponent,
        data: { animation: 'i18n' }
    }
];
let I18nModule = class I18nModule {
};
I18nModule = __decorate([
    NgModule({
        declarations: [I18nComponent],
        imports: [CommonModule, RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, TranslateModule]
    })
], I18nModule);
export { I18nModule };
//# sourceMappingURL=i18n.module.js.map