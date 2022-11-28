import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homefour-banner',
    templateUrl: './homefour-banner.component.html',
    styleUrls: ['./homefour-banner.component.scss']
})
export class HomefourBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    creativeHomeSlides: OwlOptions = {
		items: 1,
		nav: true,
		margin: 25,
		loop: true,
		dots: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-long-arrow-alt-left'></i>",
			"<i class='fas fa-long-arrow-alt-right'></i>",
		]
    }

}