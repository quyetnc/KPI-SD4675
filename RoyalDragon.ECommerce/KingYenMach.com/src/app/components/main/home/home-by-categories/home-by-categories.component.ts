import { Component, OnInit } from '@angular/core';
import { ECommerceService } from 'app/api/services';
import { InitHomePageResponse } from 'app/api/models';

@Component({
  selector: 'app-home-by-categories',
  templateUrl: './home-by-categories.component.html',
  styleUrls: ['./home-by-categories.component.scss']
})
export class HomeByCategoriesComponent implements OnInit {
  public initHomePage:InitHomePageResponse={};
  constructor(private _ecormerceService: ECommerceService) { }

  ngOnInit(): void {
    this.fetDataInitEcormerce();
  }
  fetDataInitEcormerce() {
    this._ecormerceService.apiECommerceInitHomePageGet$Json$Response()
    .subscribe(res => {
      if (res.body.success) {      
        this.initHomePage = {...res.body.data};
        console.log(this.initHomePage.banner)
      }
    })
  }
}
