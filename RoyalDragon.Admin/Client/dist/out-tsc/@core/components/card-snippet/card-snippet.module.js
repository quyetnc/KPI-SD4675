import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { CoreCommonModule } from '@core/common.module';
import { CoreCardSnippetComponent } from '@core/components/card-snippet/card-snippet.component';
let CardSnippetModule = class CardSnippetModule {
};
CardSnippetModule = __decorate([
    NgModule({
        declarations: [CoreCardSnippetComponent],
        imports: [CommonModule, NgbModule, HighlightModule, CoreCommonModule],
        providers: [
            {
                provide: HIGHLIGHT_OPTIONS,
                useValue: {
                    fullLibraryLoader: () => import('highlight.js')
                }
            }
        ],
        exports: [CoreCardSnippetComponent]
    })
], CardSnippetModule);
export { CardSnippetModule };
//# sourceMappingURL=card-snippet.module.js.map