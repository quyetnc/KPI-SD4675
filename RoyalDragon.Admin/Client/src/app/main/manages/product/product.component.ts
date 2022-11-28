import { CategoryService } from './../../../api/services/category.service';
import { CommonService } from 'app/common/common.service';
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
import { AddProductRequest, DeleteProductRequest, Product, ProductHistory, UpdateProductRequest, Category } from 'app/api/models';
import { ProductService } from 'app/api/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { UploadFileModel } from 'app/api/models/upload-file-model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  @ViewChild("modalShowHistory", { static: false })
  modalShowHistory: any;
  // Private
  private _unsubscribeAll: Subject<any>;
  private tempData = [];

  // public
  public contentHeader: object;
  public rows: any;
  public selected: Array<Product> = [];
  public listProductUpdateHistory: Array<ProductHistory> = [];
  public kitchenSinkRows: any;
  public imageFile: Blob;
  public listProduct: Array<Product> = [];
  public listCategory: Array<Category> = [];
  public product: Product = {};//Single Product Selected or Create Product
  public basicSelectedOption: number = 6;
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
  public listAvatarImage: Array<any> = [];
  public avatarImage1: string;
  public avatarImage2: string;
  public avatarImage3: string;
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
  uploadFileModel1: UploadFileModel;
  uploadFileModel2: UploadFileModel;
  uploadFileModel3: UploadFileModel;
  uploadImage(event: any, imgNumber: number) {
    console.log(imgNumber, "imgNumber");

    if (event.target.files && event.target.files[0]) {
      for (var item in event.target.files) {
        this.listAvatarImage = event.target.files;
        
      }
      let reader = new FileReader();
      reader.onload = (event: any) => {
        switch (imgNumber) {
          case 1:
            this.avatarImage1 = event.target.result;
            break;
          case 2:
            this.avatarImage2 = event.target.result;
            break;
          case 3:
            this.avatarImage3 = event.target.result;
            break;
          default:
            break;
        }
      };

      reader.readAsDataURL(event.target.files[0]);
      // this.imageFile = event.target.files[0];
    }

    if (event.target.files.length === 0) {
      return;
    }
    let fileToUpload = event.target.files;
    const formData = new FormData();
    for ( let i = 0; i < fileToUpload.length; i++ ) {
      formData.append("file", fileToUpload[i], fileToUpload[i].name);
    }
    
    this._httpService.post(`${environment.apiUrl}/api/Upload/Upload`, formData).subscribe(
      (rs) => {
        console.log(rs);
        if (rs["success"]) {
          switch (imgNumber) {
            case 1:
              this.uploadFileModel1 = rs["data"];
              break;
            case 2:
              this.uploadFileModel2 = rs["data"];
              break;
            case 3:
              this.uploadFileModel3 = rs["data"];
              break;
            default:
              break;
          }

        }
        // this._commonService.sweetAlertResponse(rs);
      },
      (err) => {
        this._commonService.sweetAlertUnknownError();
      }
    );
  }
  onSelect({ selected }) {
    this.product = { ...selected[0] };
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    console.log(this.selected, "this.selectedthis.selectedthis.selected");
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }

  customChkboxOnSelect({ selected }) {
    this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
    this.chkBoxSelected.push(...selected);
  }

  constructor(
    private _datatablesService: DatatablesService,
    private _coreTranslationService: CoreTranslationService,
    private _productService: ProductService,
    private _categoryService: CategoryService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private _httpService: HttpClient,
    private _commonService: CommonService
  ) {
    this._unsubscribeAll = new Subject();
    this.avatarImage1 = "assets/images/portrait/small/avatar-s-11.jpg";
    this.avatarImage2 = "assets/images/portrait/small/avatar-s-11.jpg";
    this.avatarImage3 = "assets/images/portrait/small/avatar-s-11.jpg";
    this._coreTranslationService.translate(english, french, german, portuguese);
  }

  ngOnInit() {
    this.apiUrl = environment.apiUrl + "/";
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
      this.kitchenSinkRows = this.rows;
      this.exportCSVData = this.rows;
    });

    this.initForm();
    this.fetchDataListCategorys();
    this.fetchDataListProducts();
    // content header
    this.contentHeader = {
      headerTitle: 'Danh sách sản phẩm',
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
            name: 'Quản lý',
            isLink: false,
            link: '/'
          },
          {
            name: 'Sản phẩm',
            isLink: false
          }
        ]
      }
    };
  }
  initForm() {
    this.productForm = this.fb.group({
      productId: ["0", [Validators.required]],
      name: ["", [Validators.required, Validators.maxLength(200)]],
      shortDescription: ["", [Validators.maxLength(200)]],
      description: [""],
      img: [""],
      img2: [""],
      img3: [""],
      isSell: [true],
      priceInput: [0],
      quantity: [0],
      priceOutput: [0],
      categoryId: [0],
    });
  }
  fViewHistoryUpdateProduct(productId) {
    this._productService.apiProductHistoryUpdateProductGet$Json$Response({ ProductId: productId })
      .subscribe(res => {
        if (res.body.success) {
          this.modalService.open
            (this.modalShowHistory, {
              scrollable: true,
              centered: true,
              size: "xl",
            });
          console.log("fViewHistoryUpdateProduct", res.body.data);
          this.listProductUpdateHistory = [...res.body.data];
        }
      })
  }
  removeProduct() {
    let arrProductId = this.selected.map(x => x.productId);
    Swal.fire({
      icon: "question",
      title: "Xác nhận",
      text: `Bạn chắc chắn xoá ${arrProductId.length} sản phẩm, Bạn đang nhầm với "Ngừng kinh doanh" những mặt hàng này?`,
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-default"
      }
    }).then(result => {
      if (result.isConfirmed) {
        let params = {
          body: {
            listProductId: arrProductId
          } as DeleteProductRequest,
        };
        this._productService.apiProductDeleteProductDelete$Json$Response(params).subscribe(
          (rs) => {
            Swal.fire({
              icon: rs.body.success ? "success" : "error",
              title: "Thông báo",
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
    // this.fetchDataListProducts();
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
      this.isCreate && this.resetForm();

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
  createOrUpdateProduct() {

    if (this.uploadFileModel1?.pathSave != null) {
      this.productForm.controls["img"].patchValue(this.uploadFileModel1?.pathSave ?? "")
    }
    if (this.uploadFileModel2?.pathSave != null) {
      this.productForm.controls["img2"].patchValue(this.uploadFileModel2?.pathSave ?? "")
    }
    if (this.uploadFileModel3?.pathSave != null) {
      this.productForm.controls["img3"].patchValue(this.uploadFileModel3?.pathSave ?? "")
    }
    console.log(this.productForm.value, "this.productForm");

    if (
      this.validate("priceInput") &&
      this.validate("name") &&
      this.validate("priceOutput") &&
      this.validate("img")
    ) {
      this.clearErrorMessage();
      if (this.isCreate) {
        let params = {
          body: {
            product: this.productForm.value,
            userId: 0
          } as AddProductRequest,
        };
        this._productService.apiProductAddProductPost$Json$Response(params).subscribe(
          (rs) => {
            
            if (rs.body.success) {
              this.listProduct.push(rs.body.data);
              this.listProduct = [...this.listProduct];
            }
            this.afterCallApi(rs.body.success, rs.body.message);
          },
          (err) => {
            this.modalService.dismissAll();
            this.resetForm();
            console.dir(err);
          }
        );
      } else {
        let params = {
          body: {
            product: this.productForm.value,
            userId: 0
          } as UpdateProductRequest,
        };
        this._productService.apiProductUpdateProductPost$Json$Response(params).subscribe(
          (rs) => {
            if (rs.body.success) {
              //Find index of specific object using findIndex method.    
              let objIndex = this.listProduct.findIndex((obj => obj.productId == this.product.productId));
              //Log object to Console.
              console.log("Before update: ", this.listProduct[objIndex])
              //Update object's name property.
              this.listProduct[objIndex].name = this.productForm.controls["name"].value;
              this.listProduct[objIndex].shortDescription = this.productForm.controls["shortDescription"].value;
              this.listProduct[objIndex].description = this.productForm.controls["description"].value;
              this.listProduct[objIndex].img = this.productForm.controls["img"].value;
              this.listProduct[objIndex].img2 = this.productForm.controls["img2"].value;
              this.listProduct[objIndex].img3 = this.productForm.controls["img3"].value;
              this.listProduct[objIndex].isSell = this.productForm.controls["isSell"].value;
              this.listProduct[objIndex].priceInput = this.productForm.controls["priceInput"].value;
              this.listProduct[objIndex].priceOutput = this.productForm.controls["priceOutput"].value;
              this.listProduct = [...this.listProduct];
              this.product = this.listProduct[objIndex];
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
        title: this.isCreate ? "Thêm mới!" : "Cập nhật",
        text: "Vui lòng nhập đầy đủ thông tin!!!",
        customClass: {
          confirmButton: "btn btn-success",
        },
      });
    }
  }

  modalOpenSLCIM(modalSLCIM, isCreate) {
    this.isCreate = isCreate;
    this.avatarImage1 = "assets/images/portrait/small/avatar-s-11.jpg";
    this.avatarImage2 = "assets/images/portrait/small/avatar-s-11.jpg";
    this.avatarImage3 = "assets/images/portrait/small/avatar-s-11.jpg";
    if (isCreate) {
      this.resetForm();
    } else {
      console.log("this.product", this.product);

      this.productForm.patchValue(this.product);
      this.avatarImage1 = (this.product.img == null || this.product.img == "") ? "assets/images/portrait/small/avatar-s-11.jpg" : (environment.apiUrl + "/" + this.product.img);
      this.avatarImage2 = (this.product.img2 == null || this.product.img2 == "") ? "assets/images/portrait/small/avatar-s-11.jpg" : (environment.apiUrl + "/" + this.product.img2);
      this.avatarImage3 = (this.product.img3 == null || this.product.img3 == "") ? "assets/images/portrait/small/avatar-s-11.jpg" : (environment.apiUrl + "/" + this.product.img3);
    }
    this.modalService.open(modalSLCIM, {
      scrollable: true,
      centered: true,
      size: "xl",
    });
  }
  fetchDataListProducts(): void {
    this.product = {};
    this.selected = [];
    this.chkBoxSelected = [];
    this._productService.apiProductListProductGet$Json$Response().subscribe(
      (result) => {
        if (result.body.success) {
          this.listProduct = result.body.data;
          console.log("selected", this.selected);
        }
        else
          Swal.fire({
            icon: "error",
            title: "Lỗi!",
            text: "Lỗi xảy ra khi hiển thị danh sách sản phẩm!!!",
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
    this.listCategory = [];
    this._categoryService.apiCategoryListCategoryGet$Json().subscribe(
      (result) => {
        if (result.success)
          this.listCategory = [...result.data];
        else
          Swal.fire({
            icon: "error",
            title: "Lỗi!",
            text: "Lỗi xảy ra khi load danh mục!!!",
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