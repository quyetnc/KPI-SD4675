import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TreeModule } from '@circlon/angular-tree-component';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TreeViewComponent } from 'app/main/extensions/tree-view/tree-view.component';
// routing
const routes = [
    {
        path: 'tree-view',
        component: TreeViewComponent,
        data: { animation: 'tree-view' }
    }
];
let TreeViewModule = class TreeViewModule {
};
TreeViewModule = __decorate([
    NgModule({
        declarations: [TreeViewComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            CoreCommonModule,
            ContentHeaderModule,
            CardSnippetModule,
            TreeModule
        ]
    })
], TreeViewModule);
export { TreeViewModule };
//# sourceMappingURL=tree-view.module.js.map