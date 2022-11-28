import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/timeline/timeline.snippetcode';
let TimelineComponent = class TimelineComponent {
    constructor() {
        this.showReportBasic = true;
        this.showReportIcons = true;
        // snippet code variables
        this._snippetCodeBasic = snippet.snippetCodeBasic;
        this._snippetCodeIcons = snippet.snippetCodeIcons;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Timeline',
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
                        name: 'Timeline',
                        isLink: false
                    }
                ]
            }
        };
    }
};
TimelineComponent = __decorate([
    Component({
        selector: 'app-timeline',
        templateUrl: './timeline.component.html',
        styleUrls: ['./timeline.component.scss']
    })
], TimelineComponent);
export { TimelineComponent };
//# sourceMappingURL=timeline.component.js.map