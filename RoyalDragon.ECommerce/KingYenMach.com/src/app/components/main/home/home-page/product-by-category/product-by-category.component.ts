import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VListCategoryHomePage } from 'app/api/models';
import { environment } from 'environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-by-category',
  templateUrl: './product-by-category.component.html',
  styleUrls: ['./product-by-category.component.scss']
})
export class ProductByCategoryComponent implements OnInit {
  @Input() listCategory : Array<VListCategoryHomePage> = [];
  constructor(
    public router: Router
  ) {
    this.env = environment.apiUrl + '/'; 
   }
  public env: string = '';
  ngOnInit(): void { }

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