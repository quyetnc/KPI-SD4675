import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import * as snippet from 'app/main/extensions/swiper/swiper.snippetcode';
let SwiperComponent = class SwiperComponent {
    constructor() {
        this.centeredSlideIndex = 2;
        this.centeredSlide2Index = 2;
        // snippet code variables
        this._snippetCodeSwiperDefault = snippet.snippetCodeSwiperDefault;
        this._snippetCodeSwiperNavigations = snippet.snippetCodeSwiperNavigations;
        this._snippetCodeSwiperPaginations = snippet.snippetCodeSwiperPaginations;
        this._snippetCodeSwiperProgress = snippet.snippetCodeSwiperProgress;
        this._snippetCodeSwiperMultiple = snippet.snippetCodeSwiperMultiple;
        this._snippetCodeSwiperCenteredSlides1 = snippet.snippetCodeSwiperCenteredSlides1;
        this._snippetCodeSwiperCenteredSlides2 = snippet.snippetCodeSwiperCenteredSlides2;
        this._snippetCodeSwiperFadeEffect = snippet.snippetCodeSwiperFadeEffect;
        this._snippetCodeSwiperCubeEffect = snippet.snippetCodeSwiperCubeEffect;
        this._snippetCodeSwiperCoverflow = snippet.snippetCodeSwiperCoverflow;
        this._snippetCodeSwiperAutoplay = snippet.snippetCodeSwiperAutoplay;
        this._snippetCodeSwiperLazy = snippet.snippetCodeSwiperLazy;
        this._snippetCodeSwiperResponsive = snippet.snippetCodeSwiperResponsive;
        // swiper
        this.swiperNavigations = {
            navigation: true
        };
        this.swiperPaginations = {
            pagination: true
        };
        this.swiperProgress = {
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar'
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
        this.swiperMultiple = {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        };
        this.swiperswiperCenteredSlides = {
            slidesPerView: 5,
            centeredSlides: true,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
        this.swiperCenteredSlides2 = {
            slidesPerView: 5,
            centeredSlides: true,
            spaceBetween: 30,
            slideToClickedSlide: true
        };
        this.swiperFadeEffect = {
            spaceBetween: 30,
            effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
        this.swiperCubeEffect = {
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            pagination: {
                el: '.swiper-pagination'
            }
        };
        this.swiperCoverflow = {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            pagination: {
                el: '.swiper-pagination'
            }
        };
        this.swiperAutoplay = {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
        this.swiperLazy = {
            lazy: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
        this.swiperResponsive = {
            slidesPerView: 5,
            spaceBetween: 50,
            // init: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        };
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Swiper',
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
                        name: 'Swiper',
                        isLink: false
                    }
                ]
            }
        };
    }
};
SwiperComponent = __decorate([
    Component({
        selector: 'app-swiper',
        templateUrl: './swiper.component.html',
        styleUrls: ['./swiper.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], SwiperComponent);
export { SwiperComponent };
//# sourceMappingURL=swiper.component.js.map