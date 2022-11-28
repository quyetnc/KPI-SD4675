import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ContactService } from 'app/api/services';
import { CommonService } from 'app/common/services/common.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
    public ContactId: number = 1;
    public contactForm: UntypedFormGroup;
    dateCreate;
  constructor(
    private _contactService:ContactService,
    private _formBuilder: UntypedFormBuilder,
    private _commonService:CommonService
  ) { 
  }

  ngOnInit(): void {
    this.contactForm = this._formBuilder.group({
      name: [null, Validators.required],
      address: [null, Validators.required],
      message: [null, Validators.required],
      phone: [null, Validators.required],
      title: [null, Validators.required],
      creteaOn:'',
      accept: [null,Validators.required],
      email: '',
    });
  }
  get f() {
    return this.contactForm.controls;
  }

  onSubmit() : void {
    this.dateCreate = Date.now();
    console.log(this.dateCreate)
    console.log(this.contactForm)
    if(this.contactForm.invalid) {
      return;
    }
    this._contactService.apiContactSendContactPost$Json({
      body:{
        contact:this.contactForm.value
      }
      
    }).subscribe(rs=>{
      if(rs.success){
        this._commonService.sweetAlert('Thông báo',rs.message,rs.success)
      }else{
        this._commonService.sweetAlert('Thông báo','Kiểm tra lai thông tin',rs.success)
      }
    })
  }
}
