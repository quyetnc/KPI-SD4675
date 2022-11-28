import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import * as snippet from 'app/main/components/popovers/popovers.snippetcode';
let PopoversComponent = class PopoversComponent {
    constructor() {
        // snippet code variables
        this._snippetCodePopoverPositions = snippet.snippetCodePopoverPositions;
        this._snippetCodePopoverTriggers = snippet.snippetCodePopoverTriggers;
        this._snippetCodePopoverOptions = snippet.snippetCodePopoverOptions;
        this._snippetCodePopoverMethods = snippet.snippetCodePopoverMethods;
        this._snippetCodePopoverEvents = snippet.snippetCodePopoverEvents;
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
            headerTitle: 'Popovers',
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
                        name: 'Popovers',
                        isLink: false
                    }
                ]
            }
        };
    }
};
__decorate([
    ViewChild('OpenEvent')
], PopoversComponent.prototype, "OpenEvent", void 0);
__decorate([
    ViewChild('OpenEventAfter')
], PopoversComponent.prototype, "OpenEventAfter", void 0);
__decorate([
    ViewChild('CloseEvent')
], PopoversComponent.prototype, "CloseEvent", void 0);
__decorate([
    ViewChild('CloseEventAfter')
], PopoversComponent.prototype, "CloseEventAfter", void 0);
PopoversComponent = __decorate([
    Component({
        selector: 'app-popovers',
        templateUrl: './popovers.component.html'
    })
], PopoversComponent);
export { PopoversComponent };
//# sourceMappingURL=popovers.component.js.map