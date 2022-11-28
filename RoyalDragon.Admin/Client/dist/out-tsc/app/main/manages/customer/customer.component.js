import { __decorate } from "tslib";
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import Swal from 'sweetalert2';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { read, utils } from 'xlsx';
let CustomerComponent = class CustomerComponent {
    constructor(_customerService, _commonService) {
        this._customerService = _customerService;
        this._commonService = _commonService;
        this.ColumnMode = ColumnMode;
        this.isLoading = true;
        this.selected = [];
        this.listCustomers = [];
        this.product = {}; //Single Customer Selected or Create Customer 
    }
    ngOnInit() {
        this.fetchDataListCustomers();
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
    AddEditCustomerDialog(CustomerId) {
        this.AddEditCustomerDialogSelector.openDialog(CustomerId);
    }
    afterCallApi(isSuccess) {
        this.fetchDataListCustomers();
    }
    createOrUpdateProduct() {
    }
    openOrderByCustomer(CustomerId) {
        this.OrderByCustomerModalSelector.openDialog(CustomerId);
    }
    openInfoOrderOfCustomer(CustomerId) {
        this.InfoOrderOfCustomerModalSelector.openDialog(CustomerId);
    }
    handleImport($event) {
        const files = $event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;
                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    let a = 2;
                }
            };
            reader.readAsArrayBuffer(file);
        }
    }
    importFileAction(event) {
        const target = event.target;
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        if (target.files.length == 1 &&
            (target.files[0].type == '.xlsx' ||
                target.files[0].type ==
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
                target.files[0].type == 'application/vnd.ms-excel')) {
            const reader = new FileReader();
            let listCustomer = [];
            reader.onload = (e) => {
                const bstr = e.target.result;
                const data = this._commonService.importFromFile(bstr);
                const importedData = data;
                importedData.map((arr, index) => {
                    if (index > 0) {
                        try {
                            let customer = {
                                fullName: arr[0],
                                phone: arr[1],
                                address: arr[2],
                            };
                            listCustomer.push(customer);
                        }
                        catch {
                            console.error('An unexpected error occurred: ' + arr[2]);
                        }
                    }
                });
                this._customerService.apiCustomerImportCustomerPost$Json({
                    body: {
                        listCustomer: listCustomer,
                        userId: 0
                    }
                }).subscribe((rs) => {
                    this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
                    rs.success && this.fetchDataListCustomers();
                });
            };
            reader.readAsBinaryString(target.files[0]);
        }
        else {
            this._commonService.sweetAlert("Thông báo", `Cannot open the file '${target.files[0].name}' because the file format or file extension is not valid.`, false);
        }
    }
    fetchDataListCustomers() {
        this.listCustomers = [];
        this.isLoading = true;
        this._customerService.apiCustomerListCustomerGet$Json$Response().subscribe((result) => {
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
        }, (err) => {
            console.dir(err);
        });
    }
    RemoveCustomer(CustomerId) {
        this._commonService.sweetAlertConfirm("Thông báo", "Bạn có chắc muốn xóa khách hàng này không?", false).then((confirm) => {
            confirm.isConfirmed && this._customerService.apiCustomerDeleteCustomerDelete$Json({
                body: {
                    listCustomerId: [CustomerId]
                }
            }).subscribe((rs) => {
                this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
                rs.success && this.fetchDataListCustomers();
            });
        });
    }
    ExportCustomer() {
        this._customerService.apiCustomerExportExcelCustomerPost$Json().subscribe((rs) => {
            if (!rs.success) {
                this._commonService.sweetAlert("Export Error", rs.message, rs.success);
                return;
            }
            this._commonService.downloadExcel(rs.data, "Customer_Export");
        });
    }
};
__decorate([
    ViewChild("AddEditCustomerDialogModal")
], CustomerComponent.prototype, "AddEditCustomerDialogSelector", void 0);
__decorate([
    ViewChild("OrderByCustomerModal")
], CustomerComponent.prototype, "OrderByCustomerModalSelector", void 0);
__decorate([
    ViewChild("InfoOrderOfCustomer")
], CustomerComponent.prototype, "InfoOrderOfCustomerModalSelector", void 0);
__decorate([
    ViewChild('myTable')
], CustomerComponent.prototype, "myTable", void 0);
CustomerComponent = __decorate([
    Component({
        selector: 'app-customer',
        templateUrl: './customer.component.html',
        styleUrls: ['./customer.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], CustomerComponent);
export { CustomerComponent };
//# sourceMappingURL=customer.component.js.map