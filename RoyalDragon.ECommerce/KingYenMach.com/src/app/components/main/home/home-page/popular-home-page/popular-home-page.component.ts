import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'app/common/services/common.service';
import { Product } from 'app/product';
import { environment } from 'environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-popular-home-page',
  templateUrl: './popular-home-page.component.html',
  styleUrls: ['./popular-home-page.component.scss']
})
export class PopularHomePageComponent implements OnInit {
  @Input() listProductByPopular : Array<Product> = [];
  public env : String = '';
  constructor(
      public router: Router
	  , public _commonService: CommonService
) {
  this.env = environment.apiUrl + '/';
 }
  ngOnInit(): void {
  }
  popularProductsSlides: OwlOptions = {
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-long-arrow-alt-left'></i>",
			"<i class='fas fa-long-arrow-alt-right'></i>"
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
			992: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
    }
}
