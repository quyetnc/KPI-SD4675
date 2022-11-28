import { CustomerImportModal } from './../../../api/models/customer-import-modal';
import { CommonService } from './../../../common/common.service';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { AddProductRequest, Customer, DeleteProductRequest, ImportCustomerRequest, LoginResponse, Product, UpdateProductRequest } from 'app/api/models';
import { CustomerService } from 'app/api/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { AddEditCustomerDialogComponent } from './add-edit-customer-dialog/add-edit-customer-dialog.component';
import { read, utils } from 'xlsx';
import { OrderByCustomerComponent } from './order-by-customer/order-by-customer.component';
import { InfoOrderOfCustomerComponent } from './info-order-of-customer/info-order-of-customer.component';
import { HistoryCallCustomerComponent } from './history-call-customer/history-call-customer.component';
import signalR, { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from 'environments/environment';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerComponent implements OnInit {
  @ViewChild("AddEditCustomerDialogModal")
  AddEditCustomerDialogSelector: AddEditCustomerDialogComponent;
  @ViewChild("OrderByCustomerModal")
  OrderByCustomerModalSelector: OrderByCustomerComponent;
  @ViewChild("InfoOrderOfCustomer")
  InfoOrderOfCustomerModalSelector: InfoOrderOfCustomerComponent;
  @ViewChild("HistoryCallCustomer")
  HistoryCallCustomer: HistoryCallCustomerComponent;

  ColumnMode = ColumnMode;
  isLoading: boolean = true;
  public contentHeader: object;
  public hubConnection: HubConnection;
  public rows: any;
  public selected: Array<Customer> = [];
  public listCustomers: Array<Customer> = [];
  public product: Customer = {};//Single Customer Selected or Create Customer 
  @ViewChild('myTable') myTable!: DatatableComponent;
  constructor(
    private _customerService: CustomerService,
    private _commonService: CommonService
  ) {
    let user: LoginResponse = JSON.parse(localStorage.getItem("currentUser") || '{}');
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(environment.hubUrlProd,
        { accessTokenFactory: () => user?.token })
      .withAutomaticReconnect()
      .build();
    this.hubConnection.start();
  }
  ngOnInit() {
    this.fetchDataListCustomers();
    this.successCallPhone();
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
  async fCallPhone(phone: string): Promise<void> {
    await this.hubConnection.invoke("callPhone", phone);
  }
  async successCallPhone(): Promise<void> {
    await this.hubConnection.on("successCallPhone", (success) => {
      this._commonService.sweetAlert("Thông báo", success ? "Chúng tôi đã gửi số điện thoại tới điện thoại của bạn" : "Bạn chưa đăng nhập trên điện thoại", success)
    });

  }
  AddEditCustomerDialog(CustomerId: number) {
    this.AddEditCustomerDialogSelector.openDialog(CustomerId);
  }
  afterCallApi(isSuccess) {
    this.fetchDataListCustomers();
  }
  createOrUpdateProduct() {
  }
  openOrderByCustomer(CustomerId) {
    this.OrderByCustomerModalSelector.openDialog(CustomerId)
  }
  openInfoOrderOfCustomer(CustomerId) {
    this.InfoOrderOfCustomerModalSelector.openDialog(CustomerId)
  }
  openHistoryCallCustomer(customerId) {
    this.HistoryCallCustomer.openDialog(customerId)
  }
  handleImport($event: any) {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          let a = 2;
        }
      }
      reader.readAsArrayBuffer(file);
    }
  }
  importFileAction(event: any) {
    const target: DataTransfer = <DataTransfer>event.target;
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    if (
      target.files.length == 1 &&
      (target.files[0].type == '.xlsx' ||
        target.files[0].type ==
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        target.files[0].type == 'application/vnd.ms-excel')
    ) {
      const reader: FileReader = new FileReader();
      let listCustomer = [] as CustomerImportModal[];
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const data = <any[]>this._commonService.importFromFile(bstr);

        const importedData = data;
        importedData.map((arr, index) => {
          if (index > 0) {
            try {
              let customer: CustomerImportModal = {
                fullName: arr[0],
                phone: arr[1],
                address: arr[2],
              };
              listCustomer.push(customer);
            } catch {
              console.error('An unexpected error occurred: ' + arr[2]);
            }
          }
        });
        this._customerService.apiCustomerImportCustomerPost$Json({
          body: {
            listCustomer: listCustomer,
            userId: 0
          } as ImportCustomerRequest
        }).subscribe((rs) => {
          this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
          rs.success && this.fetchDataListCustomers();
        })
      };
      reader.readAsBinaryString(target.files[0]);

    } else {
      this._commonService.sweetAlert("Thông báo", `Cannot open the file '${target.files[0].name}' because the file format or file extension is not valid.`, false);
    }
  }
  fetchDataListCustomers(): void {
    this.listCustomers = [];
    this.isLoading = true;
    this._customerService.apiCustomerListCustomerGet$Json$Response().subscribe(
      (result) => {
        if (result.body.success) {
          this.listCustomers = [...result.body.data];
          this.isLoading = false;
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
  RemoveCustomer(CustomerId: number) {
    this._commonService.sweetAlertConfirm("Thông báo", "Bạn có chắc muốn xóa khách hàng này không?", false).then((confirm) => {
      confirm.isConfirmed && this._customerService.apiCustomerDeleteCustomerDelete$Json({
        body: {
          listCustomerId: [CustomerId]
        }
      }).subscribe((rs) => {
        this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
        rs.success && this.fetchDataListCustomers();
      })
    })
  }
  ExportCustomer() {
    this._customerService.apiCustomerExportExcelCustomerPost$Json().subscribe((rs) => {
      if (!rs.success) {
        this._commonService.sweetAlert(
          "Export Error",
          rs.message,
          rs.success
        );
        return;
      }
      this._commonService.downloadExcel(rs.data, "Customer_Export");
    })
  }
}