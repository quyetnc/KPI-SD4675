import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/breadcrumbs/breadcrumbs.snippetcode';
let BreadcrumbsComponent = class BreadcrumbsComponent {
    constructor() {
        // snippet code variables
        this._snippetCodeDefault = snippet.snippetCodeDefault;
        this._snippetCodeStyles = snippet.snippetCodeStyles;
        this._snippetCodeAlignment = snippet.snippetCodeAlignment;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // breadcrumb default
        this.breadcrumbDefault = {
            links: [
                {
                    name: 'Home',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Library',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Data',
                    isLink: false
                }
            ]
        };
        // breadcrumb slash
        this.breadcrumbSlash = {
            type: 'slash',
            links: [
                {
                    name: 'Home',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Library',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Data',
                    isLink: false
                }
            ]
        };
        // breadcrumb dots
        this.breadcrumbDots = {
            type: 'dots',
            links: [
                {
                    name: 'Home',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Library',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Data',
                    isLink: false
                }
            ]
        };
        // breadcrumb dashes
        this.breadcrumbDashes = {
            type: 'dashes',
            links: [
                {
                    name: 'Home',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Library',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Data',
                    isLink: false
                }
            ]
        };
        // breadcrumb pipes
        this.breadcrumbPipes = {
            type: 'pipes',
            links: [
                {
                    name: 'Home',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Library',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Data',
                    isLink: false
                }
            ]
        };
        // breadcrumb chevron
        this.breadcrumbChevron = {
            type: 'chevron',
            links: [
                {
                    name: 'Home',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Library',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Data',
                    isLink: false
                }
            ]
        };
        // breadcrumb left
        this.breadcrumbLeft = {
            links: [
                {
                    name: 'Home',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Library',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Data',
                    isLink: false
                }
            ]
        };
        // breadcrumb center
        this.breadcrumbCenter = {
            alignment: 'center',
            links: [
                {
                    name: 'Home',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Library',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Data',
                    isLink: false
                }
            ]
        };
        // breadcrumb right
        this.breadcrumbRight = {
            alignment: 'right',
            links: [
                {
                    name: 'Home',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Library',
                    isLink: true,
                    link: '/'
                },
                {
                    name: 'Data',
                    isLink: false
                }
            ]
        };
        // content header
        this.contentHeader = {
            headerTitle: 'Breadcrumbs',
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
                        name: 'Breadcrumbs',
                        isLink: false
                    }
                ]
            }
        };
    }
};
BreadcrumbsComponent = __decorate([
    Component({
        selector: 'app-breadcrumbs',
        templateUrl: './breadcrumbs.component.html'
    })
], BreadcrumbsComponent);
export { BreadcrumbsComponent };
//# sourceMappingURL=breadcrumbs.component.js.map