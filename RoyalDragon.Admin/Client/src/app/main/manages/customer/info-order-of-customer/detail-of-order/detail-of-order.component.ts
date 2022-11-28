import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { VListDetailOrder } from 'app/api/models';
import { OrderService } from 'app/api/services';
import { CommonService } from 'app/common/common.service';

@Component({
  selector: 'app-detail-of-order',
  templateUrl: './detail-of-order.component.html',
  styleUrls: ['./detail-of-order.component.scss']
})
export class DetailOfOrderComponent implements OnInit {
  ngModalRef: NgbModalRef;
  @ViewChild("OrderDetailOfCustomerModal", { static: false })
  OrderDetailOfCustomerModal: any;
  listItemOrder = [] as VListDetailOrder[];
  constructor(private _modalService: NgbModal, private _commonService: CommonService, private _orderService: OrderService) { }

  ngOnInit(): void {
  }

  openDialog(OrderId: number) {
    this._orderService.apiOrderDetailOrderGet$Json({ OrderId: OrderId }).subscribe((rs) => {
      this.listItemOrder = rs.data;
      !rs.success && this._commonService.sweetAlert("Thông báo", rs.message, rs.success);
      this.ngModalRef = this._modalService.open(
        this.OrderDetailOfCustomerModal,
        {
          scrollable: true,
          centered: true,
          size: 'lg' // size: 'xs' | 'sm' | 'lg' | 'xl'
        }
      );
    })

  }
  closeModalAlert(modal) {
    modal.close("Accept click");
  } 
  convertFormatVND(input: number) {
    return input.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
  }
}
