import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { InputComponent } from 'app/main/forms/form-elements/input/input.component';
const routes = [
    {
        path: 'form-elements/input',
        component: InputComponent,
        data: { animation: 'input' }
    }
];
let InputModule = class InputModule {
};
InputModule = __decorate([
    NgModule({
        declarations: [InputComponent],
        imports: [CommonModule, RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule, FormsModule]
    })
], InputModule);
export { InputModule };
//# sourceMappingURL=input.module.js.map