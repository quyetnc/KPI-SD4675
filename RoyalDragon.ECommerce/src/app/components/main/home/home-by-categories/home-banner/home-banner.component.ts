import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'environments/environment';
import { Product } from 'app/api/models';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit, OnChanges {
@Input() listBanner: Array<Product>;
public listBanners: Array<Product> = [];
public env: string = '';
  	constructor() {
		this.env = environment.apiUrl + '/';
	}

	ngOnInit(): void {
	}
	ngOnChanges(changes: SimpleChanges) {
		console.log(`changes`,changes)
		if (this.listBanners.length == 0) {
			this.listBanners = [...this.listBanner]
		}
		console.log(`listBanner`,this.listBanner)
	}
	showImage(img: string): string {
		if(img==null){
			return '';
		}
		return this.env+img.replace('\\','/');
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
