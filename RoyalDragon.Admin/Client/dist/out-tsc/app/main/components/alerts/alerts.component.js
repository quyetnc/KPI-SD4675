import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/alerts/alerts.snippetcode';
let AlertsComponent = class AlertsComponent {
    constructor() {
        this.alertClose = false;
        this.alertCustomClose = false;
        // snippet code variables
        this._snippetCodeDefault = snippet.snippetCodeDefault;
        this._snippetCodeTitle = snippet.snippetCodeTitle;
        this._snippetCodeColors = snippet.snippetCodeColors;
        this._snippetCodeClosableAlerts = snippet.snippetCodeClosableAlerts;
        this._snippetCodeIcon = snippet.snippetCodeColors;
        this._snippetCodeExample = snippet.snippetCodeExample;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Alerts',
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
                        name: 'Alerts',
                        isLink: false
                    }
                ]
            }
        };
    }
};
AlertsComponent = __decorate([
    Component({
        selector: 'app-alerts',
        templateUrl: './alerts.component.html'
    })
], AlertsComponent);
export { AlertsComponent };
//# sourceMappingURL=alerts.component.js.map