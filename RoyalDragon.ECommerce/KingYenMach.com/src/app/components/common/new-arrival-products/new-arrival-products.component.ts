import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-arrival-products',
    templateUrl: './new-arrival-products.component.html',
    styleUrls: ['./new-arrival-products.component.scss']
})
export class NewArrivalProductsComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

}