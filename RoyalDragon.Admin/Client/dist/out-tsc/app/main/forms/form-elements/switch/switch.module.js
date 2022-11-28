import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { SwitchComponent } from 'app/main/forms/form-elements/switch/switch.component';
const routes = [
    {
        path: 'form-elements/switch',
        component: SwitchComponent,
        data: { animation: 'switch' }
    }
];
let SwitchModule = class SwitchModule {
};
SwitchModule = __decorate([
    NgModule({
        declarations: [SwitchComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            NgbModule,
            ContentHeaderModule,
            CardSnippetModule,
            FormsModule,
            CoreCommonModule
        ]
    })
], SwitchModule);
export { SwitchModule };
//# sourceMappingURL=switch.module.js.map