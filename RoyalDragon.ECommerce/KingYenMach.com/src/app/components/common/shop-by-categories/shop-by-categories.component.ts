import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
    selector: 'app-shop-by-categories',
    templateUrl: './shop-by-categories.component.html',
    styleUrls: ['./shop-by-categories.component.scss']
})
export class ShopByCategoriesComponent implements OnInit {
    constructor(
        public router: Router
	) { }

    ngOnInit(): void {}

    categoriesSlides: OwlOptions = {
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-long-arrow-alt-left'></i>",
			"<i class='fas fa-long-arrow-alt-right'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			515: {
				items: 2
			},
			695: {
				items: 3
			},
			935: {
				items: 4
			},
			1200: {
				items: 6
			}
		}
    }

}