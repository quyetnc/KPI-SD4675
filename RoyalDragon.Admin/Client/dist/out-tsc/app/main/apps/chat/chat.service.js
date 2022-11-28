import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let ChatService = class ChatService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.isChatOpen = false;
        this.onContactsChange = new BehaviorSubject([]);
        this.onChatsChange = new BehaviorSubject([]);
        this.onSelectedChatChange = new BehaviorSubject([]);
        this.onSelectedChatUserChange = new BehaviorSubject([]);
        this.onChatUsersChange = new BehaviorSubject([]);
        this.onChatOpenChange = new BehaviorSubject(false);
        this.onUserProfileChange = new BehaviorSubject([]);
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getContacts(),
                this.getChats(),
                this.getUserProfile(),
                this.getActiveChats(),
                this.getChatUsers()
            ]).then(() => {
                resolve();
            }, reject);
        });
    }
    /**
     * Get Contacts
     */
    getContacts() {
        const url = `api/chat-contacts`;
        return new Promise((resolve, reject) => {
            this._httpClient.get(url).subscribe((response) => {
                this.contacts = response;
                this.onContactsChange.next(this.contacts);
                resolve(this.contacts);
            }, reject);
        });
    }
    /**
     * Get Chats
     */
    getChats() {
        const url = `api/chat-chats`;
        return new Promise((resolve, reject) => {
            this._httpClient.get(url).subscribe((response) => {
                this.chats = response;
                this.onChatsChange.next(this.chats);
                resolve(this.chats);
            }, reject);
        });
    }
    /**
     * Get User Profile
     */
    getUserProfile() {
        const url = `api/chat-profileUser`;
        return new Promise((resolve, reject) => {
            this._httpClient.get(url).subscribe((response) => {
                this.userProfile = response;
                this.onUserProfileChange.next(this.userProfile);
                resolve(this.userProfile);
            }, reject);
        });
    }
    /**
     * Get Selected Chat User
     *
     * @param userId
     */
    getSelectedChatUser(userId) {
        const selectUser = this.contacts.find(contact => contact.id === userId);
        this.selectedChatUser = selectUser;
        this.onSelectedChatUserChange.next(this.selectedChatUser);
    }
    /**
     * Get Active Chats
     */
    getActiveChats() {
        const chatArr = this.chats.filter(chat => {
            return this.contacts.some(contact => {
                return contact.id === chat.userId;
            });
        });
    }
    /**
     * Get Chat Users
     */
    getChatUsers() {
        const contactArr = this.contacts.filter(contact => {
            return this.chats.some(chat => {
                return chat.userId === contact.id;
            });
        });
        this.chatUsers = contactArr;
        this.onChatUsersChange.next(this.chatUsers);
    }
    /**
     * Selected Chats
     *
     * @param id
     */
    selectedChats(id) {
        const selectChat = this.chats.find(chat => chat.userId === id);
        // If Chat is Avaiable of Selected Id
        if (selectChat !== undefined) {
            this.selectedChat = selectChat;
            this.onSelectedChatChange.next(this.selectedChat);
            this.getSelectedChatUser(id);
        }
        // Else Create New Chat
        else {
            const newChat = {
                userId: id,
                unseenMsgs: 0
            };
            this.onSelectedChatChange.next(newChat);
            this.getSelectedChatUser(id);
        }
    }
    /**
     * Create New Chat
     *
     * @param id
     * @param chat
     */
    createNewChat(id, chat) {
        const newChat = {
            userId: id,
            unseenMsgs: 0,
            chat: [chat]
        };
        if (chat.message !== '') {
            return new Promise((resolve, reject) => {
                this._httpClient.post('api/chat-chats/', { ...newChat }).subscribe(() => {
                    this.getChats();
                    this.getChatUsers();
                    this.getSelectedChatUser(id);
                    this.openChat(id);
                    resolve();
                }, reject);
            });
        }
    }
    /**
     * Open Chat
     *
     * @param id
     */
    openChat(id) {
        this.isChatOpen = true;
        this.onChatOpenChange.next(this.isChatOpen);
        this.selectedChats(id);
    }
    /**
     * Update Chat
     *
     * @param chats
     */
    updateChat(chats) {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/chat-chats/' + chats.id, { ...chats }).subscribe(() => {
                this.getChats();
                resolve();
            }, reject);
        });
    }
    /**
     * Update User Profile
     *
     * @param userProfileRef
     */
    updateUserProfile(userProfileRef) {
        this.userProfile = userProfileRef;
        this.onUserProfileChange.next(this.userProfile);
    }
};
ChatService = __decorate([
    Injectable()
], ChatService);
export { ChatService };
//# sourceMappingURL=chat.service.js.map