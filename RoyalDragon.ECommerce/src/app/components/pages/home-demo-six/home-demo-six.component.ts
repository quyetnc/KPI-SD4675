import { Component, OnInit } from '@angular/core';
import { InitHomePageResponse } from 'app/api/models';
import { ECommerceService } from 'app/api/services';

@Component({
  selector: 'app-home-demo-six',
  templateUrl: './home-demo-six.component.html',
  styleUrls: ['./home-demo-six.component.scss']
})
export class HomeDemoSixComponent implements OnInit {
  public initHomePage: InitHomePageResponse = {};
  constructor(private _ecormerceService: ECommerceService) { }

  async ngOnInit(): Promise<void> {
    await this.fetDataInitEcormerce();
  }
  async fetDataInitEcormerce() {
    await this._ecormerceService.apiECommerceInitHomePageGet$Json$Response()
      .subscribe(res => {
        if (res.body.success) {
          this.initHomePage = { ...res.body.data };
        }
      })
  }
}
