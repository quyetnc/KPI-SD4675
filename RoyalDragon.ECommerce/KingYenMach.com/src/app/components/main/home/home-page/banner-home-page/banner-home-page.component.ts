import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'app/product';
import { environment } from 'environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner-home-page',
  templateUrl: './banner-home-page.component.html',
  styleUrls: ['./banner-home-page.component.scss']
})
export class BannerHomePageComponent implements OnInit {
  @Input() listBanner = [] as Array<Product>;
  public env: string = '';
  constructor() { this.env = environment.apiUrl + '/'; }

  ngOnInit(): void { }

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
  showImage(img: string): string {
    if (img == null) {
      return '';
    }
    return this.env + img.replace('\\', '/');
  }
}
