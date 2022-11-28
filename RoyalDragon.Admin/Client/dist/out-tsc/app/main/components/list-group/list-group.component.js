import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/list-group/list-group.snippetcode';
let ListGroupComponent = class ListGroupComponent {
    constructor() {
        // snippet code variables
        this._snippetCodeSimpleListGroup = snippet.snippetCodeSimpleListGroup;
        this._snippetCodeDisabledItems = snippet.snippetCodeDisabledItems;
        this._snippetCodeIcons = snippet.snippetCodeIcons;
        this._snippetCodeBadges = snippet.snippetCodeBadges;
        this._snippetCodeAnchors = snippet.snippetCodeAnchors;
        this._snippetCodeButtons = snippet.snippetCodeButtons;
        this._snippetCodeContextualclasses = snippet.snippetCodeContextualclasses;
        this._snippetCodeCustomContent = snippet.snippetCodeCustomContent;
        this._snippetCodeFlush = snippet.snippetCodeFlush;
        this._snippetCodeHorizontal = snippet.snippetCodeHorizontal;
        this._snippetCodeListGroupNavigation = snippet.snippetCodeListGroupNavigation;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'List Group',
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
                        name: 'List Group',
                        isLink: false
                    }
                ]
            }
        };
    }
};
ListGroupComponent = __decorate([
    Component({
        selector: 'app-list-group',
        templateUrl: './list-group.component.html'
    })
], ListGroupComponent);
export { ListGroupComponent };
//# sourceMappingURL=list-group.component.js.map