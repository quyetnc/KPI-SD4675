import { __decorate, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, ViewChild } from '@angular/core';
let NavbarSearchComponent = class NavbarSearchComponent {
    /**
     *
     * @param document
     * @param router
     * @param _searchService
     */
    constructor(document, _elementRef, router, _searchService) {
        this.document = document;
        this._elementRef = _elementRef;
        this.router = router;
        this._searchService = _searchService;
        // Public
        this.searchText = '';
        this.openSearchRef = false;
        this.activeIndex = 0;
        this.pages = [];
        this.files = [];
        this.contacts = [];
    }
    fn() {
        this.removeOverlay();
        this.openSearchRef = false;
        this.searchText = '';
    }
    clickout(event) {
        if (event.target.className === 'content-overlay') {
            this.removeOverlay();
            this.openSearchRef = false;
            this.searchText = '';
        }
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Next Active Match
     */
    nextActiveMatch() {
        this.activeIndex = this.activeIndex < this.pageSearchLimit - 1 ? ++this.activeIndex : this.activeIndex;
    }
    /**
     * Previous Active Match
     */
    prevActiveMatch() {
        this.activeIndex = this.activeIndex > 0 ? --this.activeIndex : 0;
    }
    /**
     * Remove Overlay
     */
    removeOverlay() {
        this.document.querySelector('.app-content').classList.remove('show-overlay');
    }
    /**
     * Auto Suggestion
     *
     * @param event
     */
    autoSuggestion(event) {
        if (38 === event.keyCode) {
            return this.prevActiveMatch();
        }
        if (40 === event.keyCode) {
            return this.nextActiveMatch();
        }
        if (13 === event.keyCode) {
            // Navigate to activeIndex
            // ! Todo: Improve this code
            let current_item = this._pageListElement.nativeElement.getElementsByClassName('current_item');
            current_item[0]?.children[0].click();
        }
    }
    /**
     * Toggle Search
     */
    toggleSearch() {
        this._searchService.onIsBookmarkOpenChange.next(false);
        this.removeOverlay();
        this.openSearchRef = !this.openSearchRef;
        this.activeIndex = 0;
        setTimeout(() => {
            this._inputElement.nativeElement.focus();
        });
        if (this.openSearchRef === false) {
            this.document.querySelector('.app-content').classList.remove('show-overlay');
            this.searchText = '';
        }
    }
    /**
     * Search Update
     *
     * @param event
     */
    searchUpdate(event) {
        const val = event.target.value.toLowerCase();
        if (val !== '') {
            this.document.querySelector('.app-content').classList.add('show-overlay');
        }
        else {
            this.document.querySelector('.app-content').classList.remove('show-overlay');
        }
        this.autoSuggestion(event);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this._searchService.onApiDataChange.subscribe(res => {
            this.apiData = res;
            this.pages = this.apiData[0].data;
            this.pageSearchLimit = this.apiData[0].searchLimit;
            this.files = this.apiData[1].data;
            this.contacts = this.apiData[2].data;
        });
    }
};
__decorate([
    ViewChild('openSearch')
], NavbarSearchComponent.prototype, "_inputElement", void 0);
__decorate([
    ViewChild('pageList')
], NavbarSearchComponent.prototype, "_pageListElement", void 0);
__decorate([
    HostListener('keydown.escape')
], NavbarSearchComponent.prototype, "fn", null);
__decorate([
    HostListener('document:click', ['$event'])
], NavbarSearchComponent.prototype, "clickout", null);
NavbarSearchComponent = __decorate([
    Component({
        selector: 'app-navbar-search',
        templateUrl: './navbar-search.component.html'
    }),
    __param(0, Inject(DOCUMENT))
], NavbarSearchComponent);
export { NavbarSearchComponent };
//# sourceMappingURL=navbar-search.component.js.map