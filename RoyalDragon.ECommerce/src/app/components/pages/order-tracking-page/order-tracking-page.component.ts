import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ECommerceService } from 'app/api/services';
import Stepper from 'bs-stepper';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TrackingOrderResponse } from 'app/api/models/tracking-order-response';
import { CommonService } from 'app/common/services/common.service';
@Component({
  selector: 'app-order-tracking-page',
  templateUrl: './order-tracking-page.component.html',
  styleUrls: ['./order-tracking-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderTrackingPageComponent implements OnInit {
  // private
  private horizontalWizardStepper: Stepper;
  public dataOrder: TrackingOrderResponse = {};
  public status = true;

  checkoutForm = this.formBuilder.group({
    codeOrder: [,Validators.required],
    phone: ['',Validators.required]
  });

  constructor(
    private _ecommerceService:ECommerceService,
    private formBuilder: FormBuilder,
    private _commonService:CommonService
  ) { }
  
  
  ngOnInit(): void {
    
  }
  next() {
    this.horizontalWizardStepper.next();
  }
  onClickSubmit() : void {
    this._ecommerceService.apiECommerceTrackingOrderPost$Json({
      body: {
        orderId:this.checkoutForm.get('codeOrder')?.value,
        phone:this.checkoutForm.get('phone')?.value
      }
    })
    .subscribe((rs)=>{
      if(rs.success) {
        this.dataOrder = rs.data;
        this.setStepper(rs.data.state);
      }else {
        this._commonService.sweetAlert('Thông báo',rs.message,rs.success)
        // this.status = false;
      }
    })
  }
  setStepper(step:number) : void {
    this.horizontalWizardStepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true,
      selectors: {
        steps: '.step',
        trigger: '.step-trigger',
        stepper: '.bs-stepper'
      }
    });
    this.horizontalWizardStepper.to(step+1);
  }
  onSubmit() {
    return false;
  }
}
