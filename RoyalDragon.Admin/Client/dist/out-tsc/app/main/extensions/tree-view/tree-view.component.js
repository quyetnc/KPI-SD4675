import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { v4 } from 'uuid';
import * as snippet from 'app/main/extensions/tree-view/tree-view.snippetcode';
let TreeViewComponent = class TreeViewComponent {
    constructor() {
        // basic
        this.nodesBasic = [
            {
                id: 1,
                name: 'root1',
                children: [
                    { id: 2, name: 'child1' },
                    { id: 3, name: 'child2' }
                ]
            },
            {
                id: 4,
                name: 'root2',
                children: [
                    { id: 5, name: 'child2.1' },
                    {
                        id: 6,
                        name: 'child2.2',
                        children: [{ id: 7, name: 'subsub' }]
                    }
                ]
            }
        ];
        this.optionsBasic = {};
        // async
        this.optionsAsync = {
            getChildren: this.getAsyncChildren.bind(this),
            useCheckbox: true
        };
        this.nodesAsync = [];
        this.asyncChildren = [
            {
                name: 'child1',
                hasChildren: true
            },
            {
                name: 'child2'
            }
        ];
        // filter
        this.optionsFilter = {
            useCheckbox: true
        };
        this.nodesFilter = [
            {
                name: 'North America',
                children: [
                    {
                        name: 'United States',
                        children: [{ name: 'New York' }, { name: 'California' }, { name: 'Florida' }]
                    },
                    { name: 'Canada' }
                ]
            },
            {
                name: 'South America',
                children: [{ name: 'Argentina', children: [] }, { name: 'Brazil' }]
            },
            {
                name: 'Europe',
                children: [{ name: 'England' }, { name: 'Germany' }, { name: 'France' }, { name: 'Italy' }, { name: 'Spain' }]
            }
        ];
        // Drag Drop
        this.stateDragDrop = {
            expandedNodeIds: {
                1: true,
                2: true
            },
            hiddenNodeIds: {},
            activeNodeIds: {}
        };
        this.optionsDragDrop = {
            allowDrag: node => node.isLeaf,
            getNodeClone: node => ({
                ...node.data,
                id: v4(),
                name: `copy of ${node.data.name}`
            })
        };
        this.nodesDragDrop = [
            {
                id: 1,
                name: 'root1',
                children: [{ name: 'child1' }, { name: 'child2' }]
            },
            {
                name: 'root2',
                id: 2,
                children: [
                    { name: 'child2.1', children: [] },
                    { name: 'child2.2', children: [{ name: 'grandchild2.2.1' }] }
                ]
            },
            { name: 'root3' },
            { name: 'root4', children: [] },
            { name: 'root5', children: null }
        ];
        // checkbox
        this.nodesCheckbox = [
            {
                name: 'root1'
            },
            {
                name: 'root2',
                children: [
                    { name: 'child1' },
                    {
                        name: 'child2',
                        children: [{ name: 'grandchild1' }, { name: 'grandchild2' }]
                    }
                ]
            },
            {
                name: 'asyncroot',
                hasChildren: true
            }
        ];
        this.optionsCheckbox = {
            useCheckbox: true,
            getChildren: this.getCheckboxChildren.bind(this)
        };
        this.optionsDisabledCheckbox = {
            useCheckbox: true,
            getChildren: this.getCheckboxChildren.bind(this),
            useTriState: false
        };
        // snippet code variables
        this._snippetCodeBasic = snippet.snippetCodeBasic;
        this._snippetCodeAsync = snippet.snippetCodeAsync;
        this._snippetCodeFilter = snippet.snippetCodeFilter;
        this._snippetCodeDargDrop = snippet.snippetCodeDargDrop;
        this._snippetCodeCheckbox = snippet.snippetCodeCheckbox;
        this.nodesAsync = [
            {
                name: 'root1',
                children: [{ name: 'child1' }]
            },
            {
                name: 'root2',
                hasChildren: true
            },
            {
                name: 'root3'
            }
        ];
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * getAsyncChildren
     *
     */
    getAsyncChildren() {
        const newNodes = this.asyncChildren.map(c => Object.assign({}, c));
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(newNodes), 1000);
        });
    }
    /**
     * filterFn
     *
     * @param value
     * @param treeModel
     */
    filterFn(value, treeModel) {
        treeModel.filterNodes((node) => fuzzysearch(value, node.data.name));
    }
    /**
     * getCheckboxChildren
     *
     */
    getCheckboxChildren() {
        const newNodes = [
            {
                name: 'child1'
            },
            {
                name: 'child2'
            }
        ];
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(newNodes), 1000);
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
            headerTitle: 'Tree View',
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
                        name: 'Tree View',
                        isLink: false
                    }
                ]
            }
        };
    }
};
TreeViewComponent = __decorate([
    Component({
        selector: 'app-tree-view',
        templateUrl: './tree-view.component.html',
        styleUrls: ['./tree-view.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], TreeViewComponent);
export { TreeViewComponent };
// fuzzysearch function
function fuzzysearch(needle, haystack) {
    const haystackLC = haystack.toLowerCase();
    const needleLC = needle.toLowerCase();
    const hlen = haystack.length;
    const nlen = needleLC.length;
    if (nlen > hlen) {
        return false;
    }
    if (nlen === hlen) {
        return needleLC === haystackLC;
    }
    outer: for (let i = 0, j = 0; i < nlen; i++) {
        const nch = needleLC.charCodeAt(i);
        while (j < hlen) {
            if (haystackLC.charCodeAt(j++) === nch) {
                continue outer;
            }
        }
        return false;
    }
    return true;
}
//# sourceMappingURL=tree-view.component.js.map