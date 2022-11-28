import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { MediaObjectsComponent } from 'app/main/components/media-objects/media-objects.component';
const routes = [
    {
        path: 'media-objects',
        component: MediaObjectsComponent,
        data: { animation: 'media-objects' }
    }
];
let MediaObjectsModule = class MediaObjectsModule {
};
MediaObjectsModule = __decorate([
    NgModule({
        declarations: [MediaObjectsComponent],
        imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule]
    })
], MediaObjectsModule);
export { MediaObjectsModule };
//# sourceMappingURL=media-objects.module.js.map