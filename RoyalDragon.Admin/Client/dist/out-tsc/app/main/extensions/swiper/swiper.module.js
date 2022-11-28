import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { CoreCommonModule } from '@core/common.module';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { SwiperComponent } from 'app/main/extensions/swiper/swiper.component';
// swiper configuration
const DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};
// routing
const routes = [
    {
        path: 'swiper',
        component: SwiperComponent,
        data: { animation: 'swiper' }
    }
];
let SwipersModule = class SwipersModule {
};
SwipersModule = __decorate([
    NgModule({
        declarations: [SwiperComponent],
        imports: [RouterModule.forChild(routes), CoreCommonModule, ContentHeaderModule, CardSnippetModule, SwiperModule],
        providers: [
            {
                provide: SWIPER_CONFIG,
                useValue: DEFAULT_SWIPER_CONFIG
            }
        ]
    })
], SwipersModule);
export { SwipersModule };
//# sourceMappingURL=swiper.module.js.map