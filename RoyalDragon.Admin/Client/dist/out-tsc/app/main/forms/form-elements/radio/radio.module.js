import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { RadioComponent } from 'app/main/forms/form-elements/radio/radio.component';
const routes = [
    {
        path: 'form-elements/radio',
        component: RadioComponent,
        data: { animation: 'radio' }
    }
];
let RadioModule = class RadioModule {
};
RadioModule = __decorate([
    NgModule({
        declarations: [RadioComponent],
        imports: [CommonModule, RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule, FormsModule]
    })
], RadioModule);
export { RadioModule };
//# sourceMappingURL=radio.module.js.map