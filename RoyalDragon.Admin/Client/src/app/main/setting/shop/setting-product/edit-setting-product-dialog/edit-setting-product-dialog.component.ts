import { HttpClient } from '@angular/common/http';
import { Product, UpdateSettingProductRequest, UpdateSettingProductRequestModel, UploadFileModel } from 'app/api/models';
import { ProductService } from './../../../../../api/services/product.service';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'app/common/common.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-edit-setting-product-dialog',
  templateUrl: './edit-setting-product-dialog.component.html',
  styleUrls: ['./edit-setting-product-dialog.component.scss']
})
export class EditSettingProductDialogComponent implements OnInit {
  ngModalRef: NgbModalRef;
  @ViewChild("EditSetingProductDialogModal", { static: false })
  EditSetingProductDialogModal: any;
  @Output() resetDataPreviousPage: EventEmitter<boolean> = new EventEmitter();
  productData: Product;
  isCreateCustomer: boolean = true;
  public avatarImage: string;

  constructor(private _modalService: NgbModal, private _commonService: CommonService, private _productService: ProductService, private _httpService: HttpClient) { }

  ngOnInit(): void {
  }

  openDialog(productData: Product) {
    this.productData = productData;
    this.avatarImage = this.productData.bannerImg == null ? "assets/images/portrait/small/avatar-s-11.jpg" : (environment.apiUrl + "/" + this.productData.bannerImg);
    this.ngModalRef = this._modalService.open(
      this.EditSetingProductDialogModal,
      {
        scrollable: true,
        centered: true,
        size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'
      }
    );
  }
  save() {
    console.log(this.productData.bannerImg);
    
    let dataSettingRequest = this.mapDataSetingForProduct();
    this._productService.apiProductUpdateSettingProductPost$Json({
      body: {
        productSetting: dataSettingRequest as UpdateSettingProductRequestModel,
        userId: 0
      } as UpdateSettingProductRequest,
    }).subscribe((rs) => {
      this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
      rs.success && this.ngModalRef.close();
      rs.success && this.resetDataPreviousPage.emit(true);
    });
  }
  mapDataSetingForProduct() {
    return {
      bannerImg: this.productData.bannerImg,
      isBanner: this.productData.isBanner,
      isFeather: this.productData.isFeather,
      isSpecialOffer: this.productData.isSpecialOffer,
      isPopular: this.productData.isPopular,
      productId : this.productData.productId
    } as UpdateSettingProductRequestModel
  }
  closeModalAlert(modal) {
    this._commonService
      .sweetAlertConfirm("Close", "Bạn có chắc là muốn đóng tác vụ này?")
      .then((confirm) => {
        if (confirm.value) {
          modal.close("Accept click");
        }
      });
  }
  uploadFileModel: UploadFileModel;
  uploadImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.avatarImage = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }

    if (event.target.files.length === 0) {
      return;
    }
    let fileToUpload = <File>event.target.files[0];
    const formData = new FormData();
    formData.append("file", fileToUpload, fileToUpload.name);
    this._httpService.post(`${environment.apiUrl}/api/Upload/Upload`, formData).subscribe(
      (rs) => {
        console.log(rs);
        if (rs["success"]) {
          this.uploadFileModel = rs["data"];
          this.productData.bannerImg = this.uploadFileModel.pathSave;
        }
      },
      (err) => {
        this._commonService.sweetAlertUnknownError();
      }
    );
  }
}
