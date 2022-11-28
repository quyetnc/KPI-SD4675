import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

import { CategoryService } from 'app/api/services';
import { CommonService } from 'app/common/common.service';
import { environment } from 'environments/environment';
import { AddEditCategoryDialogComponent } from './add-edit-category-dialog/add-edit-category-dialog.component';
import { CreateCategoryRequest, DeleteCategoryRequest, Category, UpdateCategoryRequest } from 'app/api/models';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {
  @ViewChild("AddEditCategoryDialogModal")
  AddEditCategoryDialogSelector: AddEditCategoryDialogComponent;
  apiUrl: string;
  ColumnMode = ColumnMode;
  isLoading: boolean = true;
  public contentHeader: object;
  public rows: any;
  public selected: Array<Category> = [];
  public listCategories: Array<Category> = [];
  @ViewChild('myTable') myTable!: DatatableComponent;
  constructor(
    private _categoryService: CategoryService,
    private _commonService: CommonService
  ) {
  }
  ngOnInit() {
    this.apiUrl = environment.apiUrl + "/";
    this.fetchDataListCategories();
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
            name: 'Danh mục',
            isLink: false
          }
        ]
      }
    };
  }


  AddEditCategoryDialog(CategoryId: number) {
    this.AddEditCategoryDialogSelector.openDialog(CategoryId);
  }
  afterCallApi(isSuccess) {
    this.fetchDataListCategories();
  }

  fetchDataListCategories(): void {
    this.listCategories = [];
    this.isLoading = true;
    this._categoryService.apiCategoryListCategoryGet$Json().subscribe(
      (result) => {
        if (result.success) {
          console.log(result.data);

          this.listCategories = [...result.data];
          this.isLoading = false;
        }
        else
          this._commonService.sweetAlert("Thông báo", result.message, result.success)
      },
      (err) => {
        console.dir(err);
      }
    );
  }
  hi() {
    console.log("123");

  }
  removeCategory(categoryId: number) {

    this._commonService.sweetAlertConfirm("Thông báo", "Bạn có chắc muốn xóa danh mục này không?", false).then((confirm) => {
      console.log(confirm, "confirm");

      confirm.isConfirmed && this._categoryService.apiCategoryDeleteCategoryDelete$Json({
        body: {
          categoryId: categoryId
        }
      }).subscribe((rs) => {
        this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
        rs.success && this.fetchDataListCategories();
      })
    })
  }
}