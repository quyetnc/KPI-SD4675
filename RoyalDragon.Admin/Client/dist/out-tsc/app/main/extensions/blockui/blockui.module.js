import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlockUIModule } from 'ng-block-ui';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { BlockuiComponent } from 'app/main/extensions/blockui/blockui.component';
// routing
const routes = [
    {
        path: 'blockui',
        component: BlockuiComponent,
        data: { animation: 'blockui' }
    }
];
let BlockuiModule = class BlockuiModule {
};
BlockuiModule = __decorate([
    NgModule({
        declarations: [BlockuiComponent],
        imports: [
            RouterModule.forChild(routes),
            CommonModule,
            ContentHeaderModule,
            CardSnippetModule,
            CoreCommonModule,
            BlockUIModule.forRoot()
        ]
    })
], BlockuiModule);
export { BlockuiModule };
//# sourceMappingURL=blockui.module.js.map