import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
let ChatSidebarComponent = class ChatSidebarComponent {
    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(_chatService, _coreSidebarService) {
        this._chatService = _chatService;
        this._coreSidebarService = _coreSidebarService;
        this.selectedIndex = null;
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Open Chat
     *
     * @param id
     * @param newChat
     */
    openChat(id) {
        this._chatService.openChat(id);
        // Reset unread Message to zero
        this.chatUsers.map(user => {
            if (user.id === id) {
                user.unseenMsgs = 0;
            }
        });
    }
    /**
     * Toggle Sidebar
     *
     * @param name
     */
    toggleSidebar(name) {
        this._coreSidebarService.getSidebarRegistry(name).toggleOpen();
    }
    /**
     * Set Index
     *
     * @param index
     */
    setIndex(index) {
        this.selectedIndex = index;
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // Subscribe to contacts
        this._chatService.onContactsChange.subscribe(res => {
            this.contacts = res;
        });
        let skipFirst = 0;
        // Subscribe to chat users
        this._chatService.onChatUsersChange.subscribe(res => {
            this.chatUsers = res;
            // Skip setIndex first time when initialized
            if (skipFirst >= 1) {
                this.setIndex(this.chatUsers.length - 1);
            }
            skipFirst++;
        });
        // Subscribe to selected Chats
        this._chatService.onSelectedChatChange.subscribe(res => {
            this.chats = res;
        });
        // Add Unseen Message To Chat User
        this._chatService.onChatsChange.pipe(first()).subscribe(chats => {
            chats.map(chat => {
                this.chatUsers.map(user => {
                    if (user.id === chat.userId) {
                        user.unseenMsgs = chat.unseenMsgs;
                    }
                });
            });
        });
        // Subscribe to User Profile
        this._chatService.onUserProfileChange.subscribe(response => {
            this.userProfile = response;
        });
    }
};
ChatSidebarComponent = __decorate([
    Component({
        selector: 'app-chat-sidebar',
        templateUrl: './chat-sidebar.component.html'
    })
], ChatSidebarComponent);
export { ChatSidebarComponent };
//# sourceMappingURL=chat-sidebar.component.js.map