import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

import { CoreTranslationService } from '@core/services/translation.service';

import { locale as german } from 'app/main/tables/datatables/i18n/de';
import { locale as english } from 'app/main/tables/datatables/i18n/en';
import { locale as french } from 'app/main/tables/datatables/i18n/fr';
import { locale as portuguese } from 'app/main/tables/datatables/i18n/pt';

import * as snippet from 'app/main/tables/datatables/datatables.snippetcode';

import { DatatablesService } from 'app/main/tables/datatables/datatables.service';
import { User, UpdateUserRequest, Role, UserRole } from 'app/api/models';
import { UserService } from 'app/api/services';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CommonService } from 'app/common/common.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  // Private
  private _unsubscribeAll: Subject<any>;
  private tempData = [];

  // public
  public contentHeader: object;
  public rows: any;
  public selected: Array<User> = [];
  public kitchenSinkRows: any;
  public listUser: Array<User> = [];
  public listRoles: Array<Role> = [];
  public user: User = {};//Single User Selected or Create User
  public basicSelectedOption: number = 10;
  public ColumnMode = ColumnMode;
  public expanded = {};
  public birthday: NgbDateStruct;
  public editingName = {};
  public editingStatus = {};
  public editingAge = {};
  public editingSalary = {};
  public chkBoxSelected = [];
  public SelectionType = SelectionType;
  public exportCSVData;
  // Select Custom Tag
  public customTagselected: Array<Role> = [];
  public customTag: any[] = [];
  public customTagNames = ['Uber', 'Microsoft', 'Flexigen'];
  public isCreate: boolean = false;
  public userForm: FormGroup;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;

  // snippet code variables
  public _snippetCodeKitchenSink = snippet.snippetCodeKitchenSink;
  public _snippetCodeInlineEditing = snippet.snippetCodeInlineEditing;
  public _snippetCodeRowDetails = snippet.snippetCodeRowDetails;
  public _snippetCodeCustomCheckbox = snippet.snippetCodeCustomCheckbox;
  public _snippetCodeResponsive = snippet.snippetCodeResponsive;
  public _snippetCodeMultilangual = snippet.snippetCodeMultilangual;

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Inline editing Name
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateName(event, cell, rowIndex) {
    this.editingName[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Age
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateAge(event, cell, rowIndex) {
    this.editingAge[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Salary
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateSalary(event, cell, rowIndex) {
    this.editingSalary[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Status
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateStatus(event, cell, rowIndex) {
    this.editingStatus[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Search (filter)
   *
   * @param event
   */
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.kitchenSinkRows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /**
   * Row Details Toggle
   *
   * @param row
   */
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }

  /**
   * For ref only, log selected values
   *
   * @param selected
   */
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
    this.user = { ...selected[0] };
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  /**
   * For ref only, log activate events
   *
   * @param selected
   */
  onActivate(event) {
    // console.log('Activate Event', event);
  }

  /**
   * Custom Chkbox On Select
   *
   * @param { selected }
   */
  customChkboxOnSelect({ selected }) {
    this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
    this.chkBoxSelected.push(...selected);
  }
  public minDate: Date = void 0; 
  /**
   * Constructor
   *
   * @param {DatatablesService} _datatablesService
   * @param {CoreTranslationService} _coreTranslationService
   */
  constructor(
    private _datatablesService: DatatablesService,
    private _coreTranslationService: CoreTranslationService,
    private _userService: UserService,
    private modalService: NgbModal,
    private _commonService: CommonService,
    private fb: FormBuilder,
  ) {
    this.minDate = new Date(1980, 1, 1);
    this._unsubscribeAll = new Subject();
    this._coreTranslationService.translate(english, french, german, portuguese);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
      this.kitchenSinkRows = this.rows;
      this.exportCSVData = this.rows;
    });
    this.customTagNames.forEach((c, i) => {
      this.customTag.push({ id: i, name: c });
    });
    this.initForm();
    this.fetchDataListUsers();
    // content header
    this.contentHeader = {
      headerTitle: 'Danh s??ch s???n ph???m',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Trang ch???',
            isLink: true,
            link: '/'
          },
          {
            name: 'Qu???n l??',
            isLink: false,
            link: '/'
          },
          {
            name: 'S???n ph???m',
            isLink: false
          }
        ]
      }
    };
  }
  initForm() {
    this.userForm = this.fb.group({
      userId: [0, [Validators.required]],
      username: ["", [Validators.required, Validators.maxLength(200)]],
      fullname: ["", [Validators.maxLength(200)]],
      password: ["", [Validators.maxLength(200)]],
      birthday: [""],
      address: ["", [Validators.maxLength(200)]],
      phone: [""],
      role: [["", ""]],
      userRole: [[]],
      email: ["", [Validators.email, Validators.required]]
    });
  }
  selectAddTagMethod(name) {
    return { name: name, tag: true };
  }
  removeUser() {
    let arrUserId = this.selected.map(x => x.userId);
    Swal.fire({
      icon: "question",
      title: "X??c nh???n",
      text: `B???n ch???c ch???n xo?? ${arrUserId.length} s???n ph???m, B???n ??ang nh???m v???i "Ng???ng kinh doanh" nh???ng m???t h??ng n??y?`,
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-default"
      }
    }).then(result => {
      if (result.isConfirmed) {
        this._userService.apiUserDisableUserDelete$Json$Response({
          // ListProductId
        }).subscribe(
          (rs) => {
            Swal.fire({
              icon: rs.body.success ? "success" : "error",
              title: "Th??ng b??o",
              text: rs.body.message,
              customClass: {
                confirmButton: "btn btn-success",
              },
            });
          },
          (err) => {
            this.modalService.dismissAll();
            this.resetForm();
            console.dir(err);
          }
        );
      }
    });
  }
  resetForm() {
    this.user = {};
    this.userForm.patchValue(this.user);
  }
  validate(param: string) {
    return (
      this.userForm.value[param] != null &&
      this.userForm.value[param] != ""
    );
  }
  errorMessage: string;
  clearErrorMessage() {
    this.errorMessage = "";
  }
  afterCallApi(isSuccess, message) {
    if (isSuccess == true) {
      Swal.fire({
        icon: "success",
        title: "Th??ng b??o",
        text: this.isCreate ? "Th??m th??nh c??ng!" : "C???p nh???t th??nh c??ng",
        customClass: {
          confirmButton: "btn btn-success",
        },
      });
      this.modalService.dismissAll();
      this.resetForm();
    } else {
      if (message) {
        Swal.fire({
          icon: "error",
          title: this.isCreate ? "Kh??ng th??? t???o!" : "Kh??ng th??? c???p nh???t",
          text: message,
          customClass: {
            confirmButton: "btn btn-success",
          },
        });
      }
    }
  }
  createOrUpdateUser() {
    
    if (
      this.validate("fullname") &&
      this.validate("username") &&
      this.validate("email") &&
      this.validate("phone") &&
      this.userForm.value["role"].length > 0
    ) {
      this.userForm.controls["birthday"].patchValue(this._commonService.ngbDateToDateLocal(this.userForm.value["birthday"]));
      let arrRoles: Array<UserRole> = [];
      for (let i = 0; i < this.userForm.value["role"].length; i++) {
        const role = this.userForm.value["role"][i] as Role;
        let userRole:UserRole={};
        userRole.role=role;
        userRole.user=this.userForm.value as User;
        arrRoles.push(userRole);
      }
      this.userForm.controls["userRole"].patchValue(arrRoles)
      this.clearErrorMessage();
      if (this.isCreate) {
        let params = {
          body: {
            user: this.userForm.value,
            userId: 0
          },
        };
        this._userService.apiUserCreateUserPost$Plain({
          body: {
            user: this.userForm.value as User
          }
        }).subscribe(
          (rs) => {
            if (rs.success) {
              this.listUser.push(rs.data);
              this.listUser = [...this.listUser];
            }
            this.afterCallApi(rs.success, rs.message);
          },
          (err) => {
            this.modalService.dismissAll();
            this.resetForm();
          }
        );
      } else {
        let params = {
          body: {
            product: this.userForm.value,
            userId: 0
          } as UpdateUserRequest,
        };
        
        this._userService.apiUserUpdateUserPost$Json$Response(params).subscribe(
          (rs) => {
            if (rs.body.success) {
              //Find index of specific object using findIndex method.    
              let objIndex = this.listUser.findIndex((obj => obj.userId == this.user.userId));
              //Log object to Console.
              console.log("Before update: ", this.listUser[objIndex])
              //Update object's name property.

              this.listUser = [...this.listUser];
            }
            this.afterCallApi(rs.body.success, rs.body.message);
          },
          (err) => {
            this.modalService.dismissAll();
            this.resetForm();
            console.dir(err);
          }
        );
      }
    } else {
      Swal.fire({
        icon: "error",
        title: this.isCreate ? "Th??m m???i!" : "C???p nh???t",
        text: "Vui l??ng nh???p ?????y ????? th??ng tin!!!",
        customClass: {
          confirmButton: "btn btn-success",
        },
      });
    }
  }

  modalOpenSLCIM(modalSLCIM, isCreate) {
    this.isCreate = isCreate;

    if (isCreate) {
      this.resetForm();
    } else {
      this.userForm.patchValue(this.user);
      var listRoleSelected = [];
      for (let i = 0; i < this.user.userRole.length; i++) {
        const element = this.user.userRole[i];
        listRoleSelected.push(element.role);
      }
      this.customTagselected = listRoleSelected;
      console.log(this.userForm);
    }
    this.modalService.open(modalSLCIM, {
      scrollable: true,
      centered: true,
      size: "lg",
    });
  }
  fetchDataListUsers(): void {
    this._userService.apiUserListUserGet$Json$Response().subscribe(
      (result) => {
        if (result.body.success) {
          this.listUser = [...result.body.data.users];
          this.listRoles = [...result.body.data.roles];
        }
        else
          Swal.fire({
            icon: "error",
            title: "L???i!",
            text: "L???i x???y ra khi hi???n th??? danh s??ch  nh??n vi??n!!!",
            customClass: {
              confirmButton: "btn btn-success",
            },
          });
      },
      (err) => {
        console.dir(err);
      }
    );
  }
}