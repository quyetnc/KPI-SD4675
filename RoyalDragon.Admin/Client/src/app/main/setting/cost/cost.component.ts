import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';
import * as snippet from 'app/main/tables/datatables/datatables.snippetcode';
import { CategoryService } from 'app/api/services';
import { CommonService } from 'app/common/common.service';
import { environment } from 'environments/environment';
import { Cost } from 'app/api/models/cost';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CostService } from 'app/api/services/cost.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { VCost } from 'app/api/models/v-cost';
@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CostComponent implements OnInit {
  @ViewChild("modalShowHistory", { static: false })
  modalShowHistory: any;
  // Private
  private _unsubscribeAll: Subject<any>;
  private tempData = [];

  // public
  public contentHeader: object;
  public rows: any;
  public selected: Array<Cost> = [];
  public kitchenSinkRows: any;
  public imageFile: Blob;
  public listCost: Array<VCost> = [];
  public product: Cost = {};//Single Cost Selected or Create Cost
  public basicSelectedOption: number = 10;
  public ColumnMode = ColumnMode;
  public expanded = {};
  public editingName = {};
  public editingStatus = {};
  public editingAge = {};
  public editingSalary = {};
  public chkBoxSelected = [];
  public SelectionType = SelectionType;
  public exportCSVData;
  public isCreate: boolean = false;
  public productForm: FormGroup;
  public avatarImage: string;
  apiUrl: string;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;

  // snippet code variables
  public _snippetCodeKitchenSink = snippet.snippetCodeKitchenSink;
  public _snippetCodeInlineEditing = snippet.snippetCodeInlineEditing;
  public _snippetCodeRowDetails = snippet.snippetCodeRowDetails;
  public _snippetCodeCustomCheckbox = snippet.snippetCodeCustomCheckbox;
  public _snippetCodeResponsive = snippet.snippetCodeResponsive;
  public _snippetCodeMultilangual = snippet.snippetCodeMultilangual;
  uploadImage(event: any) {
   
  }
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
    this.product = { ...selected[0] };
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }

  customChkboxOnSelect({ selected }) {
    this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
    this.chkBoxSelected.push(...selected);
  }

  constructor(
    private _costService: CostService,
    private _categoryService: CategoryService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _httpService: HttpClient,
    private _commonService: CommonService
  ) {
    this._unsubscribeAll = new Subject();
    this.avatarImage = "assets/images/portrait/small/avatar-s-11.jpg";
  }

  ngOnInit() {
    this.apiUrl = environment.apiUrl + "/";

    this.initForm();
    this.fetchDataListCategorys();
    this.fetchDataListCosts();
    // content header
    this.contentHeader = {
      headerTitle: 'Danh sách Chi phí',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Trang chủ',
            isLink: true,
            link: '/'
          },
          {
            name: 'Thiết lập',
            isLink: false,
            link: '/'
          },
          {
            name: 'Chi phí',
            isLink: false
          }
        ]
      }
    };
  }
  initForm() {

  }
  fViewHistoryUpdateCost(productId) {

  }
  removeCost() {
   
  }
  resetForm() {
    this.product = {};
    this.productForm.controls["name"].patchValue("");
    this.productForm.controls["img"].patchValue("");
    this.productForm.controls["shortDescription"].patchValue("");
    this.productForm.controls["description"].patchValue("");
    this.productForm.controls["productId"].patchValue(0);
    this.productForm.controls["priceInput"].patchValue(0);
    this.productForm.controls["priceOutput"].patchValue(0);
  }
  validate(param: string) {
    return (
      this.productForm.value[param] != null &&
      this.productForm.value[param] != ""
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
        title: "Thông báo",
        text: this.isCreate ? "Thêm thành công!" : "Cập nhật thành công",
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
          title: this.isCreate ? "Không thể tạo!" : "Không thể cập nhật",
          text: message,
          customClass: {
            confirmButton: "btn btn-success",
          },
        });
      }
    }
  }
  createOrUpdateCost() {
  }

  modalOpenSLCIM(modalSLCIM, isCreate) {
    this.isCreate = isCreate;
    this.avatarImage = "assets/images/portrait/small/avatar-s-11.jpg";
    if (isCreate) {
      this.resetForm();
    } else {
      console.log("this.product", this.product);

      this.productForm.patchValue(this.product);
    }
    this.modalService.open(modalSLCIM, {
      scrollable: true,
      centered: true,
      size: "lg",
    });
  }
  fetchDataListCosts(): void {
    this._costService.apiCostListCostGet$Json$Response().subscribe(
      (result) => {
        if (result.body.success)
          this.listCost = [...result.body.data];
        else
          Swal.fire({
            icon: "error",
            title: "Lỗi!",
            text: "Lỗi xảy ra khi hiển thị danh sách Cost!!!",
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
  fetchDataListCategorys(): void {
   
  }
}