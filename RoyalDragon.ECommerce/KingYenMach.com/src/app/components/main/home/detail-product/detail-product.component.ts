import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'app/api/services';
import { environment } from 'environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-detail-product',
    templateUrl: './detail-product.component.html',
    styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent implements OnInit {
    id: any;
    products: {};
    constructor(private route: ActivatedRoute, private _productService : ProductService) {}
    apiUrl: string;
    ngOnInit(): void {
        this.apiUrl = environment.apiUrl+'/';
        this.id = this.route.snapshot.paramMap.get('id');
        // this.id = parseInt(this.id);
        this._productService.apiProductGetProductGet$Json({ProductId: this.id}).subscribe((rs)=>{
          console.log(rs)
          if(rs.success == true) {
            this.products = rs.data;
          }
        })
        // get list image test carousel

    }
    productsSlides: OwlOptions = {
      items: 1,
      nav: true,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
      ]
      }
  
    // Input Counter
    inputnumber = 1;
    plus(){
      this.inputnumber = this.inputnumber+1;
    }
    minus(){(this.inputnumber != 1)
      {
        this.inputnumber = this.inputnumber-1;
      }
    }
}
