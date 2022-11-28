import { __decorate, __param } from "tslib";
import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
let ScrollTopComponent = class ScrollTopComponent {
    constructor(document) {
        this.document = document;
        this.topOffset = 150; // Top offset to display scroll to top button
    }
    onWindowScroll() {
        if (window.pageYOffset > this.topOffset ||
            document.documentElement.scrollTop > this.topOffset ||
            document.body.scrollTop > this.topOffset) {
            this.windowScrolled = true;
        }
        else if ((this.windowScrolled && window.pageYOffset) ||
            document.documentElement.scrollTop ||
            document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - currentScroll / 8);
            }
        })();
    }
    ngOnInit() { }
};
__decorate([
    HostListener('window:scroll', [])
], ScrollTopComponent.prototype, "onWindowScroll", null);
ScrollTopComponent = __decorate([
    Component({
        selector: 'app-scroll-top',
        templateUrl: './scroll-top.component.html',
        styleUrls: ['./scroll-top.component.scss']
    }),
    __param(0, Inject(DOCUMENT))
], ScrollTopComponent);
export { ScrollTopComponent };
//# sourceMappingURL=scroll-top.component.js.map