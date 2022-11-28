import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchProductByNameRequest } from 'app/api/models';
import { ProductService } from 'app/api/services';
import { AuthenticationService } from 'app/auth/service';
import { LoginDialogComponent } from 'app/components/main/home/login-dialog/login-dialog.component';
import { WishListService } from 'app/wishlist.service';
import { CartService } from '../../../cart.serviceclient';
import {
    SocialAuthService,
    FacebookLoginProvider,
    SocialUser,
} from 'angularx-social-login';
import { FacebookService, InitParams } from 'ngx-facebook';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    @ViewChild("LoginModal")
    LoginModalSelector: LoginDialogComponent;
    socialUser!: SocialUser;
    isLoggedin?: boolean = undefined;
    // @ViewChild("dropdown") dropdown : ElementRef;
    cartProducts = this.cartService.getItems();
    wishListServices = this.cartService.getItemsWish();
    compareLists = this.cartService.getItemsCompare();
    valueSearch: string;
    dropdownActive: Boolean = false;
    public loginForm: UntypedFormGroup;
    public submitted = false;
    public loading = false;
    public token = null;
    auth2: any;
    @ViewChild('loginRef', { static: true }) loginElement!: ElementRef;
    constructor(
        public router: Router,
        private cartService: CartService,
        private _productService: ProductService,
        private _authenticationService: AuthenticationService,
        private socialAuthService: SocialAuthService,
        private _formBuilder: FormBuilder,
        private facebookService: FacebookService
    ) { }

    ngOnInit(): void {
        this.messengerSDK();
        this.loginForm = this._formBuilder.group({
            email: [null, Validators.required],
            password: [null, Validators.required]
        });
        this.token = localStorage.getItem('token');
        this.socialAuthService.authState.subscribe((user) => {
            this.socialUser = user;
            this.isLoggedin = user != null;
        });
        // this.socialAuthService.authState.subscribe((user) => {
        //     this.socialUser = user;
        //     this.isLoggedin = user != null;
        //     console.log(this.socialUser);
        // });
        this.googleAuthSDK();

    }
    loginWithFacebook(): void {
        this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
            x => {
                console.log("Facebook= ", x);

            }
        );
    }

    loginWithGoogle(): void {
        // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
        //     x => {
        //         console.log("Google= ", x);
        //     });
    }

    get f() {
        return this.loginForm.controls;
    }
    signOut(): void {
        this.socialAuthService.signOut();
    }
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }
    onClickSubmit(value: string) {
        this._productService
            .apiProductSearchProductByNamePost$Json({
                body: {
                    nameRequest: value,
                } as SearchProductByNameRequest,
            })
            .subscribe((rs) => {
                if (rs.success == true) {
                    this.router.navigate([`/search`],{ queryParams: { param: `${value}` } });
                }
            });

    }
    onSubmit() {
        // stop here if form is invalid
        console.log(`2`, this.loginForm.status, this.f.email.value, this.f.password.value)
        if (this.loginForm.status == "INVALID") {
            return;
        }
        console.log()

        // Login
        this.loading = true;
        this._authenticationService
            .login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                user => {
                    console.log(user);
                    localStorage.setItem('token', user.token);
                    this.token = localStorage.getItem('token')
                    this.loading = false;
                    this.dropdownActive = false;
                },
                error => {
                    this.loading = false;
                }
            );
    }
    logout() {
        this._authenticationService.logout();
        this.token = localStorage.getItem('token');
        if (this.token == null) {
            this.dropdownActive = false;
        }
    }
    openLogin() {
        // this.dropdown.nativeElement.className ="show";
        this.dropdownActive = !this.dropdownActive;
        // const currentUser = this._authenticationService.currentUserValue;
        // const isLoggedIn = currentUser && currentUser.token;
        // if (!isLoggedIn)
        //     this.LoginModalSelector.openDialog();
    }
    messengerSDK(){
        // const initParams: InitParams = { xfbml:true, version:'v3.2'};
        // this.facebookService.init(initParams);
    }
    googleAuthSDK() {

        (<any>window)['googleSDKLoaded'] = () => {
            (<any>window)['gapi'].load('auth2', () => {
                this.auth2 = (<any>window)['gapi'].auth2.init({
                    client_id: '832584484470-bvs6jdegen9tnh8lb72dndlu5ng0it11.apps.googleusercontent.com',
                    plugin_name: 'login',
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email'
                });
                this.callLogin();
            });
        }

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement('script');
            js.id = id;
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs?.parentNode?.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
    }
    callLogin() {

        this.auth2.attachClickHandler(document.getElementById("loginGoogle"), {},
            (googleAuthUser: any) => {

                //Print profile details in the console logs

                let profile = googleAuthUser.getBasicProfile();
                console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());

            }, (error: any) => {
                // alert(JSON.stringify(error, undefined, 2));
            });

    }
 
}
