import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from 'app/auth/helpers';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { FaqComponent } from 'app/main/pages/faq/faq.component';
import { FAQService } from 'app/main/pages/faq/faq.service';
const routes = [
    {
        path: 'faq',
        component: FaqComponent,
        canActivate: [AuthGuard],
        resolve: {
            faqData: FAQService
        },
        data: { animation: 'faq' }
    }
];
let FaqModule = class FaqModule {
};
FaqModule = __decorate([
    NgModule({
        declarations: [FaqComponent],
        imports: [CommonModule, RouterModule.forChild(routes), NgbModule, CoreCommonModule, ContentHeaderModule],
        providers: [FAQService]
    })
], FaqModule);
export { FaqModule };
//# sourceMappingURL=faq.module.js.map