import { menu } from './../../../../menu/menu';
import { CommonService } from './../../../../common/common.service';
import { Product } from './../../../../api/models/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { ProductService } from 'app/api/services';
import { EditSettingProductDialogComponent } from './edit-setting-product-dialog/edit-setting-product-dialog.component';

@Component({
  selector: 'app-setting-product',
  templateUrl: './setting-product.component.html',
  styleUrls: ['./setting-product.component.scss']
})
export class SettingProductComponent implements OnInit {
  @ViewChild("EditProductSettingDialogModal")
  EditProductSettingDialogSelector: EditSettingProductDialogComponent;
  ColumnMode = ColumnMode;
  isLoading: boolean = true;
  public contentHeader: object;
  public rows: any;
  public listProduct: Array<Product> = [];
  public product: Product = {};//Single Customer Selected or Create Customer 
  @ViewChild('myTable') myTable!: DatatableComponent;
  constructor(private _productService: ProductService, private _commonService: CommonService) {
  }

  ngOnInit(): void {
    this.fetchDataListProducts();
  }
  fetchDataListProducts(): void {
    this.listProduct = [];
    this.isLoading = true;
    this._productService.apiProductListProductGet$Json().subscribe(
      (result) => {
        if (result.success) {
          this.listProduct = [...result.data];
          console.log("123");

          this.isLoading = false;
        }
        else
          this._commonService.sweetAlert("Thông báo", result.message, false);
      },
      (err) => {
        console.dir(err);
      }
    );
  }
  AddEditSettingProductDialog(dataProduct: Product) {
    this.EditProductSettingDialogSelector.openDialog(dataProduct)
  }
  afterCallApi(isSuccess) {
    this.fetchDataListProducts();
  }
}
