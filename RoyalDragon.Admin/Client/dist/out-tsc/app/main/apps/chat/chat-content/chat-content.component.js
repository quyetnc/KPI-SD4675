import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let ChatContentComponent = class ChatContentComponent {
    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     * @param {CoreSidebarService} _coreSidebarService
     */
    constructor(_chatService, _coreSidebarService) {
        this._chatService = _chatService;
        this._coreSidebarService = _coreSidebarService;
        this.scrolltop = null;
        this.chatMessage = '';
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Update Chat
     */
    updateChat() {
        this.newChat = {
            message: this.chatMessage,
            time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)',
            senderId: this.userProfile.id
        };
        // If chat data is available (update chat)
        if (this.chats.chat) {
            if (this.newChat.message !== '') {
                this.chats.chat.push(this.newChat);
                this._chatService.updateChat(this.chats);
                this.chatMessage = '';
                setTimeout(() => {
                    this.scrolltop = this.scrollMe?.nativeElement.scrollHeight;
                }, 0);
            }
        }
        // Else create new chat
        else {
            this._chatService.createNewChat(this.chatUser.id, this.newChat);
        }
    }
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
        // Subscribe to Chat Change
        this._chatService.onChatOpenChange.subscribe(res => {
            this.chatMessage = '';
            this.activeChat = res;
            setTimeout(() => {
                this.scrolltop = this.scrollMe?.nativeElement.scrollHeight;
            }, 0);
        });
        // Subscribe to Selected Chat Change
        this._chatService.onSelectedChatChange.subscribe(res => {
            this.chats = res;
        });
        // Subscribe to Selected Chat User Change
        this._chatService.onSelectedChatUserChange.subscribe(res => {
            this.chatUser = res;
        });
        this.userProfile = this._chatService.userProfile;
    }
};
__decorate([
    ViewChild('scrollMe')
], ChatContentComponent.prototype, "scrollMe", void 0);
ChatContentComponent = __decorate([
    Component({
        selector: 'app-chat-content',
        templateUrl: './chat-content.component.html'
    })
], ChatContentComponent);
export { ChatContentComponent };
//# sourceMappingURL=chat-content.component.js.map