import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { InputMaskComponent } from 'app/main/forms/form-elements/input-mask/input-mask.component';
// routing
const routes = [
    {
        path: 'form-elements/input-mask',
        component: InputMaskComponent,
        data: { animation: 'input-mask' }
    }
];
let InputMaskModule = class InputMaskModule {
};
InputMaskModule = __decorate([
    NgModule({
        declarations: [InputMaskComponent],
        imports: [
            CommonModule,
            CardSnippetModule,
            ContentHeaderModule,
            RouterModule.forChild(routes),
            NgxMaskModule.forRoot()
        ]
    })
], InputMaskModule);
export { InputMaskModule };
//# sourceMappingURL=input-mask.module.js.map