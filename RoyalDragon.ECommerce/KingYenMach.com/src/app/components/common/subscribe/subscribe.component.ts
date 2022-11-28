import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

    bgImage = [
        {
            img: `assets/img/home-seven/overview-bg.jpg`
        }
    ]

}