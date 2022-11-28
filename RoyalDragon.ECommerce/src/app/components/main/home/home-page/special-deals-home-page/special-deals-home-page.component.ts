import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'app/common/services/common.service';
import { Product } from 'app/product';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-special-deals-home-page',
  templateUrl: './special-deals-home-page.component.html',
  styleUrls: ['./special-deals-home-page.component.scss']
})
export class SpecialDealsHomePageComponent implements OnInit {
  @Input() listProductsBySpecial : Array<Product> = [];
  public env : string = '';

  constructor(public _commonService: CommonService) { 
    this.env = environment.apiUrl + '/'
  }

  ngOnInit(): void {
  }

}
