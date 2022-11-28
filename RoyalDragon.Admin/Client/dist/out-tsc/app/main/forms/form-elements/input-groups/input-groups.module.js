import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { InputGroupsComponent } from 'app/main/forms/form-elements/input-groups/input-groups.component';
const routes = [
    {
        path: 'form-elements/input-groups',
        component: InputGroupsComponent,
        data: { animation: 'input-groups' }
    }
];
let InputGroupsModule = class InputGroupsModule {
};
InputGroupsModule = __decorate([
    NgModule({
        declarations: [InputGroupsComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            NgbModule,
            ContentHeaderModule,
            CoreCommonModule,
            CardSnippetModule,
            FormsModule
        ]
    })
], InputGroupsModule);
export { InputGroupsModule };
//# sourceMappingURL=input-groups.module.js.map