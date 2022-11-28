import { Category, CreateCategoryRequest, UpdateCategoryRequest, UploadFileModel } from 'app/api/models';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'app/api/services';
import { CommonService } from 'app/common/common.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-add-edit-category-dialog',
  templateUrl: './add-edit-category-dialog.component.html',
  styleUrls: ['./add-edit-category-dialog.component.scss']
})
export class AddEditCategoryDialogComponent implements OnInit {
  ngModalRef: NgbModalRef;
  @ViewChild("AddEditCategoryDialogModal", { static: false })
  AddEditCategoryDialogModal: any;
  @Output() resetDataPreviousPage: EventEmitter<boolean> = new EventEmitter();
  categoryData: Category;
  isCreateCustomer: boolean = true;
  public avatarImage: string;
  constructor(private _modalService: NgbModal, private _commonService: CommonService, private _categoryService: CategoryService, private _httpService: HttpClient) { }


  ngOnInit(): void {
  }
  openDialog(CategoryId: number) {
    this.avatarImage = "assets/images/portrait/small/avatar-s-11.jpg";
    this.isCreateCustomer = true;
    this.resetObject();
    CategoryId > 0 && this._categoryService.apiCategoryGetCategoryGet$Json({ CategoryId: CategoryId }).subscribe((rs) => {
      if (rs.success) {
        this.categoryData = rs.data;
        this.avatarImage = this.categoryData.image == null ? "assets/images/portrait/small/avatar-s-11.jpg" : (environment.apiUrl + "/" + this.categoryData.image);
        this.isCreateCustomer = false;
      }
    })
    this.ngModalRef = this._modalService.open(
      this.AddEditCategoryDialogModal,
      {
        scrollable: true,
        centered: true,
        size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'
      }
    );
  }
  resetObject() {
    this.categoryData = {
      name: "",
      image: "",
      slug: "slug",
      createOn: "1999-09-25",
      isActive: true,
    };
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
        }
      },
      (err) => {
        this._commonService.sweetAlertUnknownError();
      }
    );
  }
  save() {
    this.categoryData.image = (this.categoryData.image == null || this.categoryData.image == "") ? this.uploadFileModel?.pathSave ?? "" : this.categoryData.image;
    this.categoryData.slug = "slug";
    this.categoryData.isActive = true;
    this.isCreateCustomer ? this._categoryService.apiCategoryCreateCategoryPost$Json({
      body: {
        category: this.categoryData,
        userId: 0
      } as CreateCategoryRequest,
    }).subscribe((rs) => {
      this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
      rs.success && this.ngModalRef.close();
      rs.success && this.resetDataPreviousPage.emit(true);
    }) : this._categoryService.apiCategoryUpdateCategoryPost$Json({
      body: {
        category: this.categoryData,
        userId: 0
      } as UpdateCategoryRequest,
    }).subscribe((rs) => {
      this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
      rs.success && this.ngModalRef.close();
      rs.success && this.resetDataPreviousPage.emit(true);
    });
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
}
