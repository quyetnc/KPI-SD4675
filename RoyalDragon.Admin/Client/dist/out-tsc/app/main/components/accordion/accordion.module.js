import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { AccordionComponent } from 'app/main/components/accordion/accordion.component';
const routes = [
    {
        path: 'accordion',
        component: AccordionComponent,
        data: { animation: 'accordion' }
    }
];
let AccordionModule = class AccordionModule {
};
AccordionModule = __decorate([
    NgModule({
        declarations: [AccordionComponent],
        imports: [RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule]
    })
], AccordionModule);
export { AccordionModule };
//# sourceMappingURL=accordion.module.js.map