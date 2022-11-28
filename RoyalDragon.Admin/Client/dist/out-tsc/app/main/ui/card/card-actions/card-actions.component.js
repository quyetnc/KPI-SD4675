import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CardActionsComponent = class CardActionsComponent {
    constructor() {
        this.isReload = false;
    }
    /**
     * Emitted Events
     *
     * @param $event
     */
    emittedEvents($event) {
        console.log('Action : ', $event);
    }
    /**
     * Reload
     *
     * @param $event
     */
    reload($event) {
        // This is fake API call example for reload
        if ($event === 'reload') {
            console.log($event, ': Start');
            this.isReload = true;
            setTimeout(() => {
                this.isReload = false;
                console.log($event, ': End');
            }, 5000);
        }
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Card Actions',
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
                        name: 'Cards',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Card Actions ',
                        isLink: false
                    }
                ]
            }
        };
    }
};
CardActionsComponent = __decorate([
    Component({
        selector: 'app-card-actions',
        templateUrl: './card-actions.component.html'
    })
], CardActionsComponent);
export { CardActionsComponent };
//# sourceMappingURL=card-actions.component.js.map