import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/tabs/tabs.snippetcode';
let TabsComponent = class TabsComponent {
    constructor() {
        // snippet code variables
        this._snippetCodeBasicTab = snippet.snippetCodeBasicTab;
        this._snippetCodeIconTab = snippet.snippetCodeIconTab;
        this._snippetCodeVerticalLeftTabs = snippet.snippetCodeVerticalLeftTabs;
        this._snippetCodeVerticalRightTabs = snippet.snippetCodeVerticalRightTabs;
        this._snippetCodeFilled = snippet.snippetCodeFilled;
        this._snippetCodeJustified = snippet.snippetCodeJustified;
        this._snippetCodeCenter = snippet.snippetCodeCenter;
        this._snippetCodeEnd = snippet.snippetCodeEnd;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Tabs',
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
                        name: 'tabs',
                        isLink: false
                    }
                ]
            }
        };
    }
};
TabsComponent = __decorate([
    Component({
        selector: 'app-tabs',
        templateUrl: './tabs.component.html'
    })
], TabsComponent);
export { TabsComponent };
//# sourceMappingURL=tabs.component.js.map