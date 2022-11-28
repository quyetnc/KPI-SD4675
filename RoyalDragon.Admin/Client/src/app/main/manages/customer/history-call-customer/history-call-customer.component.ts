import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Customer, HistoryCallCustomer } from 'app/api/models';
import { CustomerService } from 'app/api/services';
import { CommonService } from 'app/common/common.service';

@Component({
  selector: 'app-history-call-customer',
  templateUrl: './history-call-customer.component.html',
  styleUrls: ['./history-call-customer.component.scss']
})
export class HistoryCallCustomerComponent implements OnInit {
  @ViewChild("HistoryCallCustomerModal", { static: false })
  HistoryCallCustomerModal: any;
  public listCustomers: Array<HistoryCallCustomer> = [];
  ngModalRef: NgbModalRef;
  constructor(private _modalService: NgbModal, private _commonService: CommonService, private _customerService: CustomerService) { }

  ngOnInit(): void {

  }

  openDialog(customerId: number) {
    this._customerService.apiCustomerListHistoryCallCustomerGet$Json({ CustomerId: customerId })
      .subscribe(res => {
        this.listCustomers = [...res.data];
      })
    this.ngModalRef = this._modalService.open(
      this.HistoryCallCustomerModal,
      {
        scrollable: true,
        centered: true,
        size: 'xl' // size: 'xs' | 'sm' | 'lg' | 'xl'
      }
    );
  }

  closeModalAlert(modal) {
    modal.close("Accept click");
    console.log("this.listCustomers",this.listCustomers);
    
  }
}
