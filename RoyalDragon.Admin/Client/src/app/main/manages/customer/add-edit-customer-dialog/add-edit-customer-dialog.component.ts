import { UpdateCustomerRequest } from './../../../../api/models/update-customer-request';
import { CustomerService } from './../../../../api/services/customer.service';
import { Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'app/common/common.service';
import { CreateCustomerRequest, Customer } from 'app/api/models';

@Component({
  selector: 'app-add-edit-customer-dialog',
  templateUrl: './add-edit-customer-dialog.component.html',
  styleUrls: ['./add-edit-customer-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddEditCustomerDialogComponent implements OnInit {
  ngModalRef: NgbModalRef;
  @ViewChild("AddEditCustomerDialogModal", { static: false })
  AddEditCustomerDialogModal: any;
  @Output() resetDataPreviousPage: EventEmitter<boolean> = new EventEmitter();
  customerData: Customer;
  isCreateCustomer: boolean = true;
  constructor(private _modalService: NgbModal, private _commonService: CommonService, private _customerService: CustomerService) { }

  ngOnInit(): void {
  }

  openDialog(CustomerId: number) {
    this.isCreateCustomer = true;
    this.resetObject();
    CustomerId > 0 && this._customerService.apiCustomerGetCustomerGet$Json({ CustomerId: CustomerId }).subscribe((rs) => {
      if (rs.success) {
        this.customerData = rs.data;
        this.isCreateCustomer = false;
      }
    })
    this.ngModalRef = this._modalService.open(
      this.AddEditCustomerDialogModal,
      {
        scrollable: true,
        centered: true,
        size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'
      }
    );
  }
  resetObject() {
    this.customerData = {
      address: null,
      createBy: "",
      createByUserId: 0,
      createOn: "1999-09-25",
      customerId: 0,
      fullName: null,
      isActive: true,
      isBadCustomer: false,
      order: null,
      phone: null,
      reasonBad: null,
    };
  }
  save() {
    this.isCreateCustomer ? this._customerService.apiCustomerCreateCustomerPost$Json({
      body: {
        customer: this.customerData,
        userId: 0
      } as CreateCustomerRequest,
    }).subscribe((rs) => {
      this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
      rs.success && this.ngModalRef.close();
      rs.success && this.resetDataPreviousPage.emit(true);
    }) : this._customerService.apiCustomerUpdateCustomerPost$Json({
      body: {
        customer: this.customerData,
        userId: 0
      } as UpdateCustomerRequest,
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
