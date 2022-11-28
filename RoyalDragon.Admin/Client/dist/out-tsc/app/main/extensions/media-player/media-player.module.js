import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlyrModule } from 'ngx-plyr';
import { CardSnippetModule } from '@core/components/card-snippet/card-snippet.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { MediaPlayerComponent } from 'app/main/extensions/media-player/media-player.component';
// routing
const routes = [
    {
        path: 'media-player',
        component: MediaPlayerComponent,
        data: { animation: 'player' }
    }
];
let MediaPlayerModule = class MediaPlayerModule {
};
MediaPlayerModule = __decorate([
    NgModule({
        declarations: [MediaPlayerComponent],
        imports: [RouterModule.forChild(routes), ContentHeaderModule, CardSnippetModule, PlyrModule]
    })
], MediaPlayerModule);
export { MediaPlayerModule };
//# sourceMappingURL=media-player.module.js.map