import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/progress/progress.snippetcode';
let ProgressComponent = class ProgressComponent {
    constructor() {
        this.progressbarHeight = '.857rem';
        // snippet code variables
        this._snippetCodeBasicProgress = snippet.snippetCodeBasicProgress;
        this._snippetCodeColoredProgress = snippet.snippetCodeColoredProgress;
        this._snippetCodeLabeledProgress = snippet.snippetCodeLabeledProgress;
        this._snippetCodeStripedProgress = snippet.snippetCodeStripedProgress;
        this._snippetCodeAnimatedProgress = snippet.snippetCodeAnimatedProgress;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Progress',
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
                        name: 'Progress',
                        isLink: false
                    }
                ]
            }
        };
    }
};
ProgressComponent = __decorate([
    Component({
        selector: 'app-progress',
        templateUrl: './progress.component.html'
    })
], ProgressComponent);
export { ProgressComponent };
//# sourceMappingURL=progress.component.js.map