import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import * as snippet from 'app/main/extensions/drag-drop/drag-drop.snippetcode';
let DragDropComponent = class DragDropComponent {
    constructor(dragulaService) {
        this.dragulaService = dragulaService;
        // snippet code variables
        this._snippetCodeBasic = snippet.snippetCodeBasic;
        this._snippetCodeMultiple = snippet.snippetCodeMultiple;
        this._snippetCodeClone = snippet.snippetCodeClone;
        this._snippetCodeDefault = snippet.snippetCodeDefault;
        // Drag And Drop With Handle
        dragulaService.createGroup('handle-list', {
            moves: function (el, container, handle) {
                return handle.classList.contains('handle');
            }
        });
        dragulaService.createGroup('badge-list-copy', {
            copy: true
        });
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Drag & Drop',
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
                        name: 'Drag & Drop',
                        isLink: false
                    }
                ]
            }
        };
    }
};
DragDropComponent = __decorate([
    Component({
        selector: 'app-drag-drop',
        templateUrl: './drag-drop.component.html',
        styleUrls: ['./drag-drop.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], DragDropComponent);
export { DragDropComponent };
//# sourceMappingURL=drag-drop.component.js.map