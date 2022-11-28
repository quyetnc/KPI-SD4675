import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { VListOrder } from 'app/api/models';
import { CustomerService, OrderService } from 'app/api/services';
import { CommonService } from 'app/common/common.service';
import { DetailOfOrderComponent } from './detail-of-order/detail-of-order.component';

@Component({
  selector: 'app-info-order-of-customer',
  templateUrl: './info-order-of-customer.component.html',
  styleUrls: ['./info-order-of-customer.component.scss']
})
export class InfoOrderOfCustomerComponent implements OnInit {
  ngModalRef: NgbModalRef;
  @ViewChild("OrderOfCustomerModal", { static: false })
  OrderOfCustomerModal: any;
  listOrder: VListOrder[] = []; @ViewChild("InfoDetailOrderOfCustomer")
  InfoDetailOrderOfCustomerModalSelector: DetailOfOrderComponent;
  constructor(private _modalService: NgbModal, private _commonService: CommonService, private _orderService: OrderService) { }

  ngOnInit(): void {
  }

  openDialog(CustomerId: number) {
    console.log("CustomerId", CustomerId);

    // this.resetObject();
    this._orderService.apiOrderGetListOrderOfCustomerPost$Json({ body: { customerId: CustomerId } }).subscribe((rs) => {
      this.listOrder = rs.data;
      !rs.success && this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
    })
    this.ngModalRef = this._modalService.open(
      this.OrderOfCustomerModal,
      {
        scrollable: true,
        centered: true,
        size: 'xl' // size: 'xs' | 'sm' | 'lg' | 'xl'
      }
    );
  }
  closeModalAlert(modal) {
    modal.close("Accept click");
  }
  openDetailOrder(orderId: number) {
    this.InfoDetailOrderOfCustomerModalSelector.openDialog(orderId);
  }
  convertFormatVND(input: number) {
    return input.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
  }
}
