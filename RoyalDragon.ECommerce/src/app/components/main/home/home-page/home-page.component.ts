import { Component, OnInit } from '@angular/core';
import { InitHomePageResponse, Product, VListCategoryHomePage } from 'app/api/models';
import { ECommerceService } from 'app/api/services';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public initHomePage: InitHomePageResponse = {};
  listBanner = [] as Array<Product>;
  listFeather = [] as Array<Product>;
  listProductsBySpecial = [] as Array<Product>;
  listProductByPopular = [] as Array<Product>;
  listCategory = [] as Array<VListCategoryHomePage>
  constructor(private _ecormerceService: ECommerceService) { }
  ngOnInit() {
    this.fetDataInitEcormerce();
  }
  fetDataInitEcormerce() {
    this._ecormerceService.apiECommerceInitHomePageGet$Json()
      .subscribe(rs => {
        if (rs.success) {
          this.initHomePage = { ...rs.data };
          this.listBanner = this.initHomePage.banner;
          this.listFeather = this.initHomePage.feather;
          this.listProductsBySpecial = this.initHomePage.specialOffer;
          this.listProductByPopular = this.initHomePage.popular;
          this.listCategory = this.initHomePage.listCategory;
        }
      })
  }
}
