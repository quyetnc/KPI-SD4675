import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import {  Role } from 'app/auth/models';
import { ToastrService } from 'ngx-toastr';
import { LoginResponse } from 'app/api/models';
import { NotifierService } from 'angular-notifier';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  //public
  public currentUser: Observable<LoginResponse>;

  //private
  private currentUserSubject: BehaviorSubject<LoginResponse>;

  /**
   *
   * @param {HttpClient} _http
   * @param {ToastrService} _toastrService
   */
  constructor(
    private _http: HttpClient, private _toastrService: ToastrService,
    private notifierService: NotifierService
    ) {
    this.currentUserSubject = new BehaviorSubject<LoginResponse>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // getter: currentUserValue
  public get currentUserValue(): LoginResponse {
    return this.currentUserSubject.value;
  }

  /**
   *  Confirms if user is admin
   */
  get isAdmin() {
    return this.currentUser && this.currentUserSubject.value.roleName === Role.Admin;
  }

  /**
   *  Confirms if user is client
   */
  get isClient() {
    return this.currentUser && this.currentUserSubject.value.roleName === Role.Client;
  }

  /**
   * User login
   *
   * @param email
   * @param password
   * @returns user
   */
  login(email: string, password: string) {
    return this._http
      .post<any>(`${environment.apiUrl}/CustomerLogin`, { username: email, password: password })
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user.success) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user.data));
            // Display welcome toast!
            // setTimeout(() => {
            //   this._toastrService.success(
            //     'Bạn đã đăng nhập thành công! 🎉',
            //     '👋 Welcome, ' + user.data.fullName + '!',
            //     { toastClass: 'toast ngx-toastr', closeButton: true }
            //   );
            // }, 2500);
            this.notifierService.notify('success', `Bạn đã đăng nhập thành công`);
            // notify
            this.currentUserSubject.next(user.data);
          }else {
            this.notifierService.notify('error', `Bạn đã đăng nhập thất bại`);

          }

          return user.data;
        })
      );
  }

  /**
   * User logout
   *
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    // notify
    this.currentUserSubject.next(null!);
    this.notifierService.notify('success', `Đăng xuất thành công`);

  }
}
