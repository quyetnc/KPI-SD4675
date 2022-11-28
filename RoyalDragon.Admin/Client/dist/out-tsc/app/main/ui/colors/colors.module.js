import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { ColorsComponent } from 'app/main/ui/colors/colors.component';
// routing
const routes = [
    {
        path: 'colors',
        component: ColorsComponent,
        data: { animation: 'colors' }
    }
];
let ColorsModule = class ColorsModule {
};
ColorsModule = __decorate([
    NgModule({
        declarations: [ColorsComponent],
        imports: [ContentHeaderModule, RouterModule.forChild(routes), CoreCommonModule]
    })
], ColorsModule);
export { ColorsModule };
//# sourceMappingURL=colors.module.js.map