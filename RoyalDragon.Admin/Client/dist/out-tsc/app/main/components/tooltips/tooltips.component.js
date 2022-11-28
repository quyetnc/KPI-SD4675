import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import * as snippet from 'app/main/components/tooltips/tooltips.snippetcode';
let TooltipsComponent = class TooltipsComponent {
    constructor() {
        // snippet code variables
        this._snippetCodeTooltipPositions = snippet.snippetCodeTooltipPositions;
        this._snippetCodeTooltipTriggers = snippet.snippetCodeTooltipTriggers;
        this._snippetCodeTooltipOptions = snippet.snippetCodeTooltipOptions;
        this._snippetCodeTooltipMethods = snippet.snippetCodeTooltipMethods;
        this._snippetCodeTooltipEvents = snippet.snippetCodeTooltipEvents;
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    openEvent() {
        alert('Open event!');
        this.OpenEvent.open();
    }
    openEventAfter() {
        setTimeout(() => {
            alert('Opened After event!');
        }, 300);
        this.OpenEventAfter.open();
    }
    closeEvent() {
        alert('Close event!');
        this.CloseEvent.close();
    }
    closeEventAfter() {
        setTimeout(() => {
            alert('Closed After event!');
        }, 300);
        this.CloseEventAfter.close();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'tooltips',
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
                        name: 'tooltips',
                        isLink: false
                    }
                ]
            }
        };
    }
};
__decorate([
    ViewChild('OpenEvent')
], TooltipsComponent.prototype, "OpenEvent", void 0);
__decorate([
    ViewChild('OpenEventAfter')
], TooltipsComponent.prototype, "OpenEventAfter", void 0);
__decorate([
    ViewChild('CloseEvent')
], TooltipsComponent.prototype, "CloseEvent", void 0);
__decorate([
    ViewChild('CloseEventAfter')
], TooltipsComponent.prototype, "CloseEventAfter", void 0);
TooltipsComponent = __decorate([
    Component({
        selector: 'app-tooltips',
        templateUrl: './tooltips.component.html'
    })
], TooltipsComponent);
export { TooltipsComponent };
//# sourceMappingURL=tooltips.component.js.map