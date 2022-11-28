import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ChatActiveSidebarComponent = class ChatActiveSidebarComponent {
    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(_chatService, _coreSidebarService) {
        this._chatService = _chatService;
        this._coreSidebarService = _coreSidebarService;
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle Sidebar
     *
     * @param name
     */
    toggleSidebar(name) {
        this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this._chatService.onSelectedChatUserChange.subscribe(res => {
            this.chatUser = res;
        });
    }
};
ChatActiveSidebarComponent = __decorate([
    Component({
        selector: 'app-chat-active-sidebar',
        templateUrl: './chat-active-sidebar.component.html'
    })
], ChatActiveSidebarComponent);
export { ChatActiveSidebarComponent };
//# sourceMappingURL=chat-active-sidebar.component.js.map