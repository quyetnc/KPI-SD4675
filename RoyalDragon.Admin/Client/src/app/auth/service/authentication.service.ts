import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User, Role } from 'app/auth/models';
import { ToastrService } from 'ngx-toastr';
import { LoginResponse } from 'app/api/models';
import { CommonService } from 'app/common/common.service';

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
  constructor(private _http: HttpClient, private _toastrService: ToastrService, private _commonService: CommonService) {
    this.currentUserSubject = new BehaviorSubject<LoginResponse>(JSON.parse(localStorage.getItem('currentUser')));
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
      .post<any>(`${environment.apiUrl}/Login`, { username: email, password: password })
      .pipe(
        map(user => {
          // login successful if there's a jwt token in the response
          if (user.success) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user.data));
            // Display welcome toast!
            setTimeout(() => {
              this._toastrService.success(
                'Bạn đang đăng nhập với quyền ' +
                user.data.roleName +
                '.Bây giờ, bạn có thể làm bất kỳ cái gì bạn thích! 🎉',
                '👋 Welcome, ' + user.data.fullName + '!',
                { toastClass: 'toast ngx-toastr', closeButton: true }
              );
            }, 2500);

            // notify
            this.currentUserSubject.next(user.data);
          }
          else {
            debugger;
            this._commonService.sweetAlert(
              'Thông báo',
              user.message,
              false
            );
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
    // notify
    this.currentUserSubject.next(null);
  }
}
