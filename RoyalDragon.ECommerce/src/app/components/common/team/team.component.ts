import { Component, OnInit } from '@angular/core';
import { ListStaffResponse } from 'app/api/models';
import { ECommerceService } from 'app/api/services';
import { environment } from 'environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public listUsers: Array<ListStaffResponse> = [];
  public env: string = '';
  constructor(private _ecommerceService: ECommerceService) { }

  async ngOnInit(): Promise<void> {
    this.env = environment.apiUrl + '/';
    this.fetchListStaff();
  }
  async fetchListStaff(): Promise<void> {
    await this._ecommerceService.apiECommerceListStaffGet$Json({})
      .subscribe(res => {
        this.listUsers=[...res.data];
      });
  }
  teamSlides: OwlOptions = {
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
      576: {
        items: 2
      },
      768: {
        items: 2
      },
      935: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  }
}
