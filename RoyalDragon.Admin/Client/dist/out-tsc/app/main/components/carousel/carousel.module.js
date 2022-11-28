import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { CarouselComponent } from 'app/main/components/carousel/carousel.component';
import { CommonModule } from '@angular/common';
const routes = [
    {
        path: 'carousel',
        component: CarouselComponent,
        data: { animation: 'carousel' }
    }
];
let CarouselModule = class CarouselModule {
};
CarouselModule = __decorate([
    NgModule({
        declarations: [CarouselComponent],
        imports: [CommonModule, RouterModule.forChild(routes), NgbModule, ContentHeaderModule, CardSnippetModule]
    })
], CarouselModule);
export { CarouselModule };
//# sourceMappingURL=carousel.module.js.map