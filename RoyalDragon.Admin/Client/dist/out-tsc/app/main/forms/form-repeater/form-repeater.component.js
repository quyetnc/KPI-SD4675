import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { repeaterAnimation } from 'app/main/forms/form-repeater/form-repeater.animation';
import * as snippet from 'app/main/forms/form-repeater/form-repeater.snippetcode';
let FormRepeaterComponent = class FormRepeaterComponent {
    constructor() {
        this.items = [{ itemId: '', itemName: '', itemQuantity: '', itemCost: '' }];
        this.item = {
            itemName: '',
            itemQuantity: '',
            itemCost: ''
        };
        // snippet code variable
        this._snippetCodeInvoiceRepeater = snippet.snippetCodeInvoiceRepeater;
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Add Item
     */
    addItem() {
        this.items.push({
            itemId: '',
            itemName: '',
            itemQuantity: '',
            itemCost: ''
        });
    }
    /**
     * DeleteItem
     *
     * @param id
     */
    deleteItem(id) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items.indexOf(this.items[i]) === id) {
                this.items.splice(i, 1);
                break;
            }
        }
    }
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Form Reports',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Forms',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Form Reports',
                        isLink: false
                    }
                ]
            }
        };
    }
};
FormRepeaterComponent = __decorate([
    Component({
        selector: 'app-form-repeater',
        templateUrl: './form-repeater.component.html',
        animations: [repeaterAnimation]
    })
], FormRepeaterComponent);
export { FormRepeaterComponent };
//# sourceMappingURL=form-repeater.component.js.map