import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { BasicCustomContextMenuComponent } from 'app/main/extensions/context-menu/custom-context-menu/basic-custom-context-menu/basic-custom-context-menu.component';
import { AnimatedCustomContextMenuComponent } from 'app/main/extensions/context-menu/custom-context-menu/animated-custom-context-menu/animated-custom-context-menu.component';
import { SubMenuCustomContextMenuComponent } from 'app/main/extensions/context-menu/custom-context-menu/sub-menu-custom-context-menu/sub-menu-custom-context-menu.component';
import * as snippet from 'app/main/extensions/context-menu/context-menu.snippetcode';
let ContextMenuComponent = class ContextMenuComponent {
    constructor() {
        this.basicContextMenu = BasicCustomContextMenuComponent;
        this.animatedContextMenu = AnimatedCustomContextMenuComponent;
        this.subMenuContextMenu = SubMenuCustomContextMenuComponent;
        // snippet code variables
        this._snippetCodeBasicRight = snippet.snippetCodeBasicRight;
        this._snippetCodeAnimatedRight = snippet.snippetCodeAnimatedRight;
        this._snippetCodeSubMenuRight = snippet.snippetCodeSubMenuRight;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Context Menu',
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
                        name: 'Extensions',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Context Menu',
                        isLink: false
                    }
                ]
            }
        };
    }
};
ContextMenuComponent = __decorate([
    Component({
        selector: 'app-context-menu',
        templateUrl: './context-menu.component.html',
        styleUrls: ['./context-menu.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], ContextMenuComponent);
export { ContextMenuComponent };
//# sourceMappingURL=context-menu.component.js.map