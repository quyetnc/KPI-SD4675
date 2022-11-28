import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homefive-banner',
    templateUrl: './homefive-banner.component.html',
    styleUrls: ['./homefive-banner.component.scss']
})
export class HomefiveBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    skinCareHomeSlides: OwlOptions = {
		items: 1,
		nav: true,
		margin: 25,
		loop: true,
		dots: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		autoplay: false,
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-long-arrow-alt-left'></i>",
			"<i class='fas fa-long-arrow-alt-right'></i>",
		]
    }

}