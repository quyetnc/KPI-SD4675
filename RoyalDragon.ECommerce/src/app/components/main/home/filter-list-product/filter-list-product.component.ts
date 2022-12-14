import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { environment } from 'environments/environment';
import { ProductService } from 'app/api/services';
import { CategoryService } from 'app/api/services';
import { ModalService } from 'app/modal.service';
import { NotifierService } from 'angular-notifier';
import { Product } from 'app/product';
import { CartService } from 'app/cart.service';

import {
    NgbModalConfig,
    ModalDismissReasons,
    NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { Category, SearchProductByNameRequest } from 'app/api/models';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-filter-list-product',
    templateUrl: './filter-list-product.component.html',
    styleUrls: ['./filter-list-product.component.scss'],
})
export class FilterListProductComponent implements OnInit {
    modalProduct = this.modalViewService.getProduct();
    private readonly notifier: NotifierService;
    closeModal: any;
    listProduct = [];
    // List is used to filter F.End
    listSearchs = [];
    listCategories = [];
    categoryIsPicked:number;
    apiUrl: string;
    // id: string;
    nameRequest: string = '';
    constructor(
        private modalService: NgbModal,
        private _productService: ProductService,
        private _cateGoryService: CategoryService,
        private modalViewService: ModalService,
        private cartService: CartService,
        private route: ActivatedRoute,
        notifierService: NotifierService,
    ) {
        this.notifier = notifierService;

    }

    ngOnInit(): void {
        this.nameRequest = this.route.snapshot.queryParamMap.get('param');
        this.apiUrl = environment.apiUrl + '/';
        // Get fullList to filter on F.end(Backend don't search unikey yet)
        this._productService.apiProductListProductGet$Json().subscribe((rs) => {
            if (rs.success) {
                this.listSearchs = [...rs.data];
            } else {
            }
        });
        this._productService
            .apiProductSearchProductByNamePost$Json({
                body: {
                    nameRequest: this.nameRequest == null ? '' : this.nameRequest,
                } as SearchProductByNameRequest,
            })
            .subscribe((rs) => {
                if (rs.success == true) {
                    this.listProduct = [...rs.data];
                }
            });
        this._cateGoryService.apiCategoryListCategoryGet$Json().subscribe((rs)=>{
            if(rs.success) {
                this.listCategories = rs.data;
            }
        })
    }
    triggerModal(content: any) {
        this.modalService
            .open(content, {
                windowClass: 'productsQuickView ',
                centered: true,
            })
            .result.then(
                (res) => {
                    this.closeModal = `Closed with: ${res}`;
                },
                (res) => {
                    this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
                }
            );
    }
    mySelectHandler(event: any) {
        switch (event) {
            case 'Default':
                this.listProduct.sort((a, b) => {
                    return a.productId - b.productId;
                });
                break;
            case 'Latest':
                this.listProduct.sort((a, b) => {
                    return b.productId - a.productId;
                });
                break;
            // case 'Popularity':
            //   this.listProduct.sort((a, b) => {
            //     return a.priceOutput - b.priceOutput;
            //   })
            // break;
            case 'Price: low to high':
                this.listProduct.sort((a, b) => {
                    return a.priceOutput - b.priceOutput;
                });
                break;
            case 'Price: high to low':
                this.listProduct.sort((a, b) => {
                    return b.priceOutput - a.priceOutput;
                });
                break;
        }
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    onClickSubmit() {
        if(this.nameRequest != '') {
          this.listProduct = this.listSearchs.filter(
            e=>this.removeVietnameseTones(e.name.trim().toUpperCase()).includes(this.removeVietnameseTones(this.nameRequest.trim().toUpperCase())) == true
          );
        }else{
          this.listProduct = this.listSearchs;
        }
        // reset price
        this.minValue = 10000;
        this.maxValue = 2000000;
    }
    async onFilterPrice(value: any) {
        this.nameRequest = this.nameRequest != null ? this.nameRequest : '';
        if(this.nameRequest !== '') {
            this.listProduct = this.listSearchs.filter((item)=>{
                if(this.removeVietnameseTones(item.name.trim().toUpperCase()).includes(this.removeVietnameseTones(this.nameRequest.trim().toUpperCase()))) {
                    return item.priceOutput >= value.value && item.priceOutput <= value.highValue
                }
            });
        }else {
            this.listProduct = this.listSearchs.filter(
                (e) => e.priceOutput >= value.value && e.priceOutput <= value.highValue
            );
        }        
    }
    addToModal(product: Product) {
        this.modalViewService.addToModal(product);
    }
    addToCart(product: Product) {
        this.cartService.addToCart(product);
        this.notifier.notify('success', 'Your product added to the cart!');
    }
    getCategoryByProduct(category: Category) {
        this.categoryIsPicked = category.categoryId;

    }
    minValue: number = 10000;
    maxValue: number = 2000000;
    options: Options = {
        floor: 10000,
        ceil: 2000000,
        step: 50000,
        translate: (value: number, label: LabelType): string => {
            switch (label) {
                case LabelType.Low:
                    return `<b>Min price:</b> ${value.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}`;
                case LabelType.High:
                    return `<b>Max price:</b> ${value.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}`;
                default:
                    return '$' + value;
            }
        },
    };

    private removeVietnameseTones(str: any): string {
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'a');
        str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'e');
        str = str.replace(/??|??|???|???|??/g, 'i');
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'o');
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'u');
        str = str.replace(/???|??|???|???|???/g, 'y');
        str = str.replace(/??/g, 'd');
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'A');
        str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'E');
        str = str.replace(/??|??|???|???|??/g, 'I');
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'O');
        str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'U');
        str = str.replace(/???|??|???|???|???/g, 'Y');
        str = str.replace(/??/g, 'D');
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // M???t v??i b??? encode coi c??c d???u m??, d???u ch??? nh?? m???t k?? t??? ri??ng bi???t n??n th??m hai d??ng n??y
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // ?? ?? ?? ?? ??  huy???n, s???c, ng??, h???i, n???ng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // ?? ?? ??  ??, ??, ??, ??, ??
        // Remove extra spaces
        // B??? c??c kho???ng tr???ng li???n nhau
        str = str.replace(/ + /g, ' ');
        str = str.trim();
        // Remove punctuations
        // B??? d???u c??u, k?? t??? ?????c bi???t
        str = str.replace(
            /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
            ' '
        );
        return str;
    }
    shopGrid: number = 1;
}
