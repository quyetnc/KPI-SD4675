import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { NouiSliderComponent } from 'app/main/extensions/noui-slider/noui-slider.component';
// routing
const routes = [
    {
        path: 'noui-slider',
        component: NouiSliderComponent,
        data: { animation: 'slider' }
    }
];
let NouiSliderModule = class NouiSliderModule {
};
NouiSliderModule = __decorate([
    NgModule({
        declarations: [NouiSliderComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            ContentHeaderModule,
            CardSnippetModule,
            NouisliderModule,
            FormsModule,
            CoreCommonModule
        ]
    })
], NouiSliderModule);
export { NouiSliderModule };
//# sourceMappingURL=noui-slider.module.js.map