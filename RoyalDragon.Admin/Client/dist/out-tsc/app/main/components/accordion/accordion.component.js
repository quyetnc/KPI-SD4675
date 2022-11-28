import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as snippet from 'app/main/components/accordion/accordion.snippetcode';
let AccordionComponent = class AccordionComponent {
    constructor() {
        // private
        this.lastPanelId = null;
        this.defaultPanelId = 'panelShadow2';
        // snippet code variables
        this._snippetCodeAccordion = snippet.snippetCodeAccordion;
        this._snippetCodeShadow = snippet.snippetCodeShadow;
        this._snippetCodeBorder = snippet.snippetCodeBorder;
        this._snippetCodeMargin = snippet.snippetCodeMargin;
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Accordion with shadow
     *
     * onPanelChange
     *
     * @param {NgbPanelChangeEvent} $event
     * @param panelShadow
     */
    onPanelChange($event, panelShadow) {
        const activePanelId = $event.panelId;
        const activePanelElem = document.getElementById(activePanelId);
        if (!panelShadow.isExpanded(activePanelId)) {
            activePanelElem.parentElement.classList.add('open');
        }
        if (!this.lastPanelId)
            this.lastPanelId = this.defaultPanelId;
        if (this.lastPanelId) {
            const lastPanelElem = document.getElementById(this.lastPanelId);
            if (this.lastPanelId === activePanelId && $event.nextState === false)
                activePanelElem.parentElement.classList.remove('open');
            else if (this.lastPanelId !== activePanelId && $event.nextState === true) {
                lastPanelElem.parentElement.classList.remove('open');
            }
        }
        this.lastPanelId = activePanelId;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Accordion',
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
                        name: 'Accordion',
                        isLink: false
                    }
                ]
            }
        };
    }
};
AccordionComponent = __decorate([
    Component({
        selector: 'app-accordion',
        templateUrl: './accordion.component.html'
    })
], AccordionComponent);
export { AccordionComponent };
//# sourceMappingURL=accordion.component.js.map