import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'app/auth/service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  ngModalRef: NgbModalRef;
  @ViewChild("LoginModal", { static: false })
  LoginModal: any;
  email: string = "";
  password: string = "";
  public loginForm: UntypedFormGroup;
  public loading = false;
  public submitted = false;
  public passwordTextType: boolean;

  constructor(private _modalService: NgbModal,
    private _authenticationService: AuthenticationService,
    private _formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });

  }
  openDialog() {

    this.ngModalRef = this._modalService.open(
      this.LoginModal,
      {
        scrollable: true,
        centered: true,
        size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'
      }
    );
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }
  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // Login
    this.loading = true;
    this._authenticationService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        user => {
          this.loading = false;
        },
        error => {
          this.loading = false;
        }
      );
  }
}
