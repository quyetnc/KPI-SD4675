import { __decorate, __param } from "tslib";
import { Component, Inject, EventEmitter, HostBinding, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';
import { animate, style } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let CoreSidebarComponent = class CoreSidebarComponent {
    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {Renderer2} _renderer
     * @param {ElementRef} _elementRef
     * @param {CoreConfigService} _coreConfigService
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {CoreMediaService} _coreMediaService
     * @param {CoreSidebarService} _coreSidebarService
     * @param {AnimationBuilder} _animationBuilder
     * @param {MediaObserver} _mediaObserver
     */
    constructor(document, _renderer, _elementRef, _coreConfigService, _changeDetectorRef, _coreMediaService, _coreSidebarService, _animationBuilder, _mediaObserver) {
        this.document = document;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._coreConfigService = _coreConfigService;
        this._changeDetectorRef = _changeDetectorRef;
        this._coreMediaService = _coreMediaService;
        this._coreSidebarService = _coreSidebarService;
        this._animationBuilder = _animationBuilder;
        this._mediaObserver = _mediaObserver;
        this._overlay = null;
        // Set Defaults
        this.isOpened = false;
        this.overlayVisibility = true;
        this.hideOnEsc = false;
        // Layout root element
        this.rootElement =
            this.document.querySelectorAll('.vertical-layout')[0] || this.document.querySelectorAll('.horizontal-layout')[0];
        this.collapsedChangedEvent = new EventEmitter();
        this.openedChangedEvent = new EventEmitter();
        // Set Private Defaults
        this._collapsed = false;
        this._unsubscribeAll = new Subject();
    }
    onKeydownHandler(event) {
        if (this.hideOnEsc) {
            this.close();
        }
    }
    // Accessors
    // -----------------------------------------------------------------------------------------------------
    /**
     * Collapsed
     *
     * @param {boolean} value
     */
    set collapsed(value) {
        // Set the collapsed value
        this._collapsed = value;
        // If the sidebar is closed, return
        if (!this.isOpened) {
            this.rootElement.classList.add('menu-expanded'); // Add menu expanded class default
            return;
        }
        // If Collapsed
        if (value) {
            // Collapse the sidebar
            this.collapse();
            // Add menu-collapsed in body and remove menu-expanded
            this.rootElement.classList.add('menu-collapsed');
            this.rootElement.classList.remove('menu-expanded');
        }
        // If Expanded
        else {
            // Expanded the sidebar
            this.expand();
            // Add menu-expanded in body and remove menu-collapsed
            this.rootElement.classList.add('menu-expanded');
            this.rootElement.classList.remove('menu-collapsed');
        }
        // Emit the 'collapsedChangedEvent' event
        this.collapsedChangedEvent.emit(this.collapsed);
    }
    get collapsed() {
        return this._collapsed;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to app-config changes
        this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
            this._coreConfig = config;
            if (config.layout.type == 'vertical') {
                this.menuClass = 'vertical-menu-modern';
            }
            else {
                this.menuClass = 'horizontal-menu';
            }
        });
        // Register the sidebar
        this._coreSidebarService.setSidebarRegistry(this.name, this);
        // Setup collapsibleSidebar
        this._setupCollapsibleSidebar();
        // Default collapsed
        this._defaultCollapsed();
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        // If the sidebar is collapsed, expand it to reset changes
        if (this.collapsed) {
            this.expand();
        }
        // Remove sidebar registry
        this._coreSidebarService.removeSidebarRegistry(this.name);
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    // Private Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Setup the collapsible sidebar handler
     *
     * @private
     */
    _setupCollapsibleSidebar() {
        // Return if the collapsible sidebar breakpoint was not set from the layout
        if (!this.collapsibleSidebar) {
            return;
        }
        // Set the _wasCollapsible false for the first time
        this._wasCollapsible = false;
        // Set the wasCollapsed from the layout
        this._wasCollapsed = this.collapsed;
        // On every media(screen) change
        this._coreMediaService.onMediaUpdate.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
            // Get the collapsible status
            const isCollapsible = this._mediaObserver.isActive(this.collapsibleSidebar);
            //! On screen resize set the config collapsed state if we have else this.collapsed
            this._wasCollapsed = this._coreConfig.layout.menu.collapsed || this.collapsed;
            // If sidebar is not collapsible, switch to overlay menu (On page load without resize the window)
            // ? Improve this menu condition
            if (!isCollapsible && this.name === 'menu') {
                this.rootElement.classList.remove(this.menuClass);
                this.rootElement.classList.add('vertical-overlay-menu');
            }
            // If the both status are the same, then return
            if (this._wasCollapsible === isCollapsible) {
                return;
            }
            // If isCollapsible is true, use collapsible sidebar
            if (isCollapsible) {
                // Set the collapsibleSidebar status
                this.iscollapsibleSidebar = true;
                // Set the the opened status to true
                this.isOpened = true;
                this.expanded = true; // Adde expanded class init
                // Emit the 'openedChangedEvent' event
                this.openedChangedEvent.emit(this.isOpened);
                // If the sidebar was collapsed, forcefully collapse it again
                if (this._wasCollapsed) {
                    // Collapse
                    this.collapsed = true;
                    this.expanded = false; // Remove expanded class
                    // Change detector
                    this._changeDetectorRef.markForCheck();
                }
                // If sidebar is collapsible, switch to collapsible menu (modern-menu)
                if (this.name === 'menu') {
                    this.rootElement.classList.add(this.menuClass);
                    this.rootElement.classList.remove('vertical-overlay-menu', 'menu-hide');
                }
                // Hide the overlay if any exists
                this._hideOverlay();
            }
            // Else use overlay sidebar
            else {
                // Set the collapsibleSidebar status
                this.iscollapsibleSidebar = false;
                // Expanded the sidebar in case if it was collapsed
                this.expand();
                // Force the the opened status to close
                this.isOpened = false;
                // Emit the 'openedChangedEvent' event
                this.openedChangedEvent.emit(this.isOpened);
                // If sidebar is not collapsible, switch to overlay menu (On window resize)
                this.rootElement.classList.remove(this.menuClass);
                this.rootElement.classList.add('vertical-overlay-menu');
                // Hide the sidebar
                this._hideSidebar();
            }
            // Set the new active status
            this._wasCollapsible = isCollapsible;
        });
    }
    /**
     * Setup the initial collapsed status
     *
     * @private
     */
    _defaultCollapsed() {
        // Return, if sidebar is not collapsed
        if (!this.collapsed) {
            return;
        }
        // Return if the sidebar is closed
        if (!this.isOpened) {
            return;
        }
        // Collapse the sidebar
        this.collapse();
    }
    /**
     * Show the overlay
     *
     * @private
     */
    _showOverlay() {
        // Create the overlay element
        this._overlay = this._renderer.createElement('div');
        // Add a class to the overlay element and make it visible
        this._overlay.classList.add(this.overlayClass);
        this._overlay.classList.add('show');
        // If overlayVisibility is false, set the bg transparent
        if (!this.overlayVisibility) {
            this._overlay.classList.add('bg-transparent');
        }
        // Append the overlay element to the parent element of the sidebar
        this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this._overlay);
        // Overlay enter animation and attach it to the animationPlayer
        this._animationPlayer = this._animationBuilder
            .build([animate('300ms ease', style({ opacity: 1 }))])
            .create(this._overlay);
        // Play the overlay animation
        this._animationPlayer.play();
        // Add an event listener to the overlay, on click of it close the sidebar
        this._overlay.addEventListener('click', () => {
            this.close();
        });
        // Change detector
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Hide the overlay
     *
     * @private
     */
    _hideOverlay() {
        // If overlay is already hidden, return
        if (!this._overlay) {
            return;
        }
        // Overlay leave animation and attach it to the animationPlayer
        this._animationPlayer = this._animationBuilder
            .build([animate('300ms ease', style({ opacity: 0 }))])
            .create(this._overlay);
        // Play the overlay leave animation
        this._animationPlayer.play();
        // Once the animation is done...
        this._animationPlayer.onDone(() => {
            // If the overlay still exists...
            if (this._overlay) {
                // Remove the overlay
                this._overlay.parentNode.removeChild(this._overlay);
                this._overlay = null;
            }
        });
        // Change detector
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Change sidebar properties to make it visible
     *
     * @private
     */
    _showSidebar() {
        // If menu as sidebar, add relevant classes to body to show menu
        if (this.name == 'menu') {
            // Open overlay menu
            this.rootElement.classList.add('menu-open');
            this.rootElement.classList.remove('menu-hide');
        }
        // For default sidebar add show class to make it visible
        else {
            this._renderer.addClass(this._elementRef.nativeElement, 'show');
            // Add .modal-open from body to remove browser scroll
            if (this.overlayClass === 'modal-backdrop') {
                this.rootElement.classList.add('modal-open');
            }
        }
        // Change detector
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Change sidebar properties to make it invisible
     *
     * @private
     */
    _hideSidebar() {
        // If menu as sidebar, add relevant classes to body to show menu
        if (this.name == 'menu') {
            // Hide overlay menu
            this.rootElement.classList.remove('menu-open');
            this.rootElement.classList.add('menu-hide');
        }
        // For default sidebar remove show class to make it visible
        else {
            this._renderer.removeClass(this._elementRef.nativeElement, 'show');
            // Remove .modal-open from body
            if (this.overlayClass === 'modal-backdrop') {
                this.rootElement.classList.remove('modal-open');
            }
        }
        // Change detector
        this._changeDetectorRef.markForCheck();
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    // For Collapsible Sidebar
    /**
     * Collapse the temporarily expanded sidebar
     */
    collapseTemporarily() {
        // Only work if the sidebar is collapsed
        if (!this.collapsed) {
            return;
        }
        // Collapse the sidebar back
        this.expanded = false;
        this.collapsed = true; // Set the menu collapsed while collapsed temp.
        // Change detector
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Expanded the sidebar temporarily
     */
    expandTemporarily() {
        // Only work if the sidebar is collapsed
        if (!this.collapsed) {
            return;
        }
        // Expanded the sidebar temporarily
        this.expanded = true;
        this.collapsed = true; // Set the menu collapsed while collapsed temp.
        // Change detector
        this._changeDetectorRef.markForCheck();
    }
    /**
     * On Sidebar's Mouseenter Event
     */
    onMouseEnter() {
        // Expand the sidebar temporarily
        this.expandTemporarily();
    }
    /**
     * On Sidebar's Mouseleave Event
     */
    onMouseLeave() {
        // Collapse the sidebar temporarily
        this.collapseTemporarily();
    }
    /**
     * Collapse the sidebar permanently
     */
    collapse() {
        // If the sidebar is not collapsed
        if (this.collapsed) {
            return;
        }
        // Set collapse true
        this.collapsed = true;
        // Change detector
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Expanded the sidebar permanently
     */
    expand() {
        // If the sidebar is collapsed
        if (!this.collapsed) {
            return;
        }
        // Set collapse false (expanded)
        this.collapsed = false;
        // Change detector
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Toggle the sidebar expand/collapse permanently
     */
    toggleCollapsible() {
        if (this.collapsed) {
            this.expand();
        }
        else {
            this.collapse();
        }
    }
    // For Overlay Sidebar
    /**
     * Open the sidebar
     */
    open() {
        // If sidebar already open or collapsible, then return
        if (this.isOpened || this.iscollapsibleSidebar) {
            return;
        }
        // Show the sidebar
        this._showSidebar();
        // Show the overlay
        this._showOverlay();
        // Set the sidebar opened status
        this.isOpened = true;
        // Emit the 'openedChangedEvent' event
        this.openedChangedEvent.emit(this.isOpened);
        // Change detector
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Close the sidebar
     */
    close() {
        // If sidebar is not open or collapsible, then return
        if (!this.isOpened || this.iscollapsibleSidebar) {
            return;
        }
        // Hide the overlay
        this._hideOverlay();
        // Set the opened status
        this.isOpened = false;
        // Emit the 'openedChangedEvent' event
        this.openedChangedEvent.emit(this.isOpened);
        // Hide overlay menu
        this._hideSidebar();
        // Change detector
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Toggle open/close the sidebar
     */
    toggleOpen() {
        if (this.isOpened) {
            this.close();
        }
        else {
            this.open();
        }
    }
};
__decorate([
    Input()
], CoreSidebarComponent.prototype, "name", void 0);
__decorate([
    Input()
], CoreSidebarComponent.prototype, "overlayClass", void 0);
__decorate([
    Input()
], CoreSidebarComponent.prototype, "collapsibleSidebar", void 0);
__decorate([
    HostBinding('class.expanded')
], CoreSidebarComponent.prototype, "expanded", void 0);
__decorate([
    Output()
], CoreSidebarComponent.prototype, "collapsedChangedEvent", void 0);
__decorate([
    Output()
], CoreSidebarComponent.prototype, "openedChangedEvent", void 0);
__decorate([
    Input()
], CoreSidebarComponent.prototype, "overlayVisibility", void 0);
__decorate([
    Input()
], CoreSidebarComponent.prototype, "hideOnEsc", void 0);
__decorate([
    HostListener('document:keydown.escape', ['$event'])
], CoreSidebarComponent.prototype, "onKeydownHandler", null);
__decorate([
    Input()
], CoreSidebarComponent.prototype, "collapsed", null);
__decorate([
    HostListener('mouseenter')
], CoreSidebarComponent.prototype, "onMouseEnter", null);
__decorate([
    HostListener('mouseleave')
], CoreSidebarComponent.prototype, "onMouseLeave", null);
CoreSidebarComponent = __decorate([
    Component({
        selector: 'core-sidebar',
        templateUrl: './core-sidebar.component.html',
        encapsulation: ViewEncapsulation.None
    }),
    __param(0, Inject(DOCUMENT))
], CoreSidebarComponent);
export { CoreSidebarComponent };
//# sourceMappingURL=core-sidebar.component.js.map