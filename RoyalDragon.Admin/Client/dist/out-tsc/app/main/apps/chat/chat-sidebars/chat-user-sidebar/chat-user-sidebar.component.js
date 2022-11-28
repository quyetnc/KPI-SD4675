import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ChatUserSidebarComponent = class ChatUserSidebarComponent {
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
    /**
     * Update User Status
     */
    updateUserStatus() {
        this._chatService.updateUserProfile(this.userProfile);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this.userProfile = this._chatService.userProfile;
    }
};
ChatUserSidebarComponent = __decorate([
    Component({
        selector: 'app-chat-user-sidebar',
        templateUrl: './chat-user-sidebar.component.html'
    })
], ChatUserSidebarComponent);
export { ChatUserSidebarComponent };
//# sourceMappingURL=chat-user-sidebar.component.js.map