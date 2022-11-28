import { __decorate } from "tslib";
import { Component, Input, ViewChild, HostListener, EventEmitter, Output } from '@angular/core';
import { CoreBlockUiComponent } from '@core/components/core-card/core-block-ui/core-block-ui.component';
let CoreCardComponent = class CoreCardComponent {
    /**
     * Constructor
     *
     * @param {BlockUIService} blockUIService
     */
    constructor(blockUIService) {
        this.blockUIService = blockUIService;
        // public
        // Generate random string  assign to specific core-card to only block that specific card
        this.coreCardId = Math.random().toString(36).substring(2);
        // To pass core-block-ui component values to _CoreBlockUiComponent variable
        this._CoreBlockUiComponent = CoreBlockUiComponent;
        // default status before click event
        this.onclickEvent = {
            collapseStatus: false,
            expandStatus: false,
            reloadStatus: false,
            closeStatus: false
        };
        // default action-views
        this.actionsView = {
            collapse: false,
            expand: false,
            reload: false,
            close: false
        };
        this.isReload = false;
        this.reloadTime = 2500;
        this.events = new EventEmitter();
    }
    onKeydownHandler(event) {
        // on press of esc card will return to normal from full screen
        if (this.onclickEvent.expandStatus) {
            this.onclickEvent.expandStatus = false;
        }
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * ng On Init
     */
    ngOnInit() {
        // show collapse icon if actions includes 'collapse'
        if (this.actions.includes('collapse')) {
            this.actionsView.collapse = true;
        }
        // show expand icon if actions includes 'expand'
        if (this.actions.includes('expand')) {
            this.actionsView.expand = true;
        }
        // show reload icon if actions includes 'reload'
        if (this.actions.includes('reload')) {
            this.actionsView.reload = true;
        }
        // show close icon if actions includes 'close'
        if (this.actions.includes('close')) {
            this.actionsView.close = true;
        }
    }
    /**
     *
     * @param changes
     *
     * ng On Changes
     */
    ngOnChanges(changes) {
        if (changes.isReload?.currentValue === true) {
            this.events.emit('reload');
            this.blockUIService.start(this.coreCardId);
        }
        else if (changes.isReload?.currentValue === false) {
            this.blockUIService.stop(this.coreCardId);
        }
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Collapse
     */
    collapse() {
        this.events.emit('collapse');
        const cardHeaderEl = this.cardHeader.nativeElement;
        this.onclickEvent.collapseStatus = !this.onclickEvent.collapseStatus;
        if (this.onclickEvent.collapseStatus) {
            setTimeout(() => {
                cardHeaderEl.classList.add('pb-2');
            }, 350);
        }
        else {
            cardHeaderEl.classList.remove('pb-2');
        }
    }
    /**
     * Expand
     */
    expand() {
        this.events.emit('expand');
        this.onclickEvent.expandStatus = !this.onclickEvent.expandStatus;
    }
    /**
     * Close
     */
    close() {
        this.events.emit('close');
        this.coreCard.nativeElement.remove();
    }
    /**
     * Reload
     */
    reload() {
        this.isReload = true;
        this.events.emit('reload');
        this.blockUIService.start(this.coreCardId);
        // block-ui timeout
        setTimeout(() => {
            this.blockUIService.stop(this.coreCardId);
            this.isReload = false;
        }, this.reloadTime);
    }
};
__decorate([
    Input()
], CoreCardComponent.prototype, "actions", void 0);
__decorate([
    Input()
], CoreCardComponent.prototype, "isReload", void 0);
__decorate([
    Input()
], CoreCardComponent.prototype, "reloadTime", void 0);
__decorate([
    Output()
], CoreCardComponent.prototype, "events", void 0);
__decorate([
    HostListener('document:keydown.escape', ['$event'])
], CoreCardComponent.prototype, "onKeydownHandler", null);
__decorate([
    ViewChild('coreCard')
], CoreCardComponent.prototype, "coreCard", void 0);
__decorate([
    ViewChild('cardHeader')
], CoreCardComponent.prototype, "cardHeader", void 0);
CoreCardComponent = __decorate([
    Component({
        selector: 'core-card',
        templateUrl: './core-card.component.html'
    })
], CoreCardComponent);
export { CoreCardComponent };
//# sourceMappingURL=core-card.component.js.map