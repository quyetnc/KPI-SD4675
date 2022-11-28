import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/media-objects/media-objects.snippetcode';
let MediaObjectsComponent = class MediaObjectsComponent {
    constructor() {
        // snippet code variables
        this._snippetCodeLeftAligned = snippet.snippetCodeLeftAligned;
        this._snippetCodeRightAligned = snippet.snippetCodeRightAligned;
        this._snippetCodeLeftAlignedBordered = snippet.snippetCodeLeftAlignedBordered;
        this._snippetCodeBordered = snippet.snippetCodeBordered;
        this._snippetCodeNested = snippet.snippetCodeNested;
        this._snippetCodeAlignedLeft = snippet.snippetCodeAlignedLeft;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Media Objects',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Components',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Media Objects',
                        isLink: false
                    }
                ]
            }
        };
    }
};
MediaObjectsComponent = __decorate([
    Component({
        selector: 'app-media-objects',
        templateUrl: './media-objects.component.html'
    })
], MediaObjectsComponent);
export { MediaObjectsComponent };
//# sourceMappingURL=media-objects.component.js.map