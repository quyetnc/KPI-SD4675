import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'app/api/models';
import { environment } from 'environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-homesix-banner',
	templateUrl: './homesix-banner.component.html',
	styleUrls: ['./homesix-banner.component.scss']
})
export class HomesixBannerComponent implements OnInit, OnChanges {
	@Input() listBanner: Array<Product>;
	public listBanners: Array<Product> = [];
	public env: string = '';
	constructor() {
		this.env = environment.apiUrl + '/';
	}
	ngOnChanges(changes: SimpleChanges) {
		if (this.listBanners.length == 0) {
			this.listBanners = [...this.listBanner]
			// this.listBanners = this.listBanner;
		}
	}
	showImage(img: string): string {
		if(img==null){
			return '';
		}
		return this.env+img.replace('\\','/');
	}
	ngOnInit(): void {
		// console.log("listBanner", this.listBanner);

	}

	retailHomeSlides: OwlOptions = {
		items: 1,
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
		autoplay: false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-long-arrow-alt-left'></i>",
			"<i class='fas fa-long-arrow-alt-right'></i>"
		]
	}

}