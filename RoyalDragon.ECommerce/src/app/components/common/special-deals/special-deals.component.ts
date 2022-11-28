import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'app/api/models';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-special-deals',
  templateUrl: './special-deals.component.html',
  styleUrls: ['./special-deals.component.scss']
})
export class SpecialDealsComponent implements OnInit, OnChanges {
  @Input() listProductsBySpecial : Array<Product> = [];
  public listProducts : Array<Product> = [];
  public env : string = '';
  constructor() { 
    this.env = environment.apiUrl + '/'
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.listProducts.length == 0) {
      this.listProducts = [...this.listProductsBySpecial]
    }
  }

  ngOnInit(): void {
  }

}
