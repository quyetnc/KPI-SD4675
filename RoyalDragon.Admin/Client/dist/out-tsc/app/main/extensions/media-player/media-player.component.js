import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { PlyrComponent } from 'ngx-plyr';
import * as snippet from 'app/main/extensions/media-player/media-player.snippetcode';
let MediaPlayerComponent = class MediaPlayerComponent {
    constructor() {
        this.plyrOptions = { tooltips: { controls: true } };
        // snippet code variables
        this._snippetCodeVideo = snippet.snippetCodeVideo;
        this._snippetCodeAudio = snippet.snippetCodeAudio;
        // video Sources
        this.videoSources = [
            {
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                type: 'video/mp4',
                size: 576
            },
            {
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
                type: 'video/mp4',
                size: 720
            },
            {
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
                type: 'video/mp4',
                size: 1080
            },
            {
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4',
                type: 'video/mp4',
                size: 1440
            }
        ];
        this.tracks = [
            {
                kind: 'captions',
                label: 'English',
                srclang: 'en',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
                default: true
            },
            {
                kind: 'captions',
                label: 'French',
                srclang: 'fr',
                src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt'
            }
        ];
        this.poster = 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg';
        // audio source
        this.audioSources = [
            {
                src: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3',
                type: 'audio/mp3'
            },
            {
                src: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg',
                type: 'audio/ogg'
            }
        ];
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Media Player',
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
                        name: 'Extensions',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Media Player',
                        isLink: false
                    }
                ]
            }
        };
    }
};
__decorate([
    ViewChild(PlyrComponent)
], MediaPlayerComponent.prototype, "plyr", void 0);
MediaPlayerComponent = __decorate([
    Component({
        selector: 'app-media-player',
        templateUrl: './media-player.component.html',
        styleUrls: ['./media-player.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], MediaPlayerComponent);
export { MediaPlayerComponent };
//# sourceMappingURL=media-player.component.js.map