import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
let SelectComponent = class SelectComponent {
    /**
     * Constructor
     *
     * @param {DataService} dataService
     * @param {NgbModal} modalService
     */
    constructor(dataService, modalService) {
        this.dataService = dataService;
        this.modalService = modalService;
        // select basic
        this.selectBasic = [];
        this.selectBasicLoading = false;
        // select group
        this.selectGroupselected = 'Adam';
        this.selectGroup = [
            {
                name: 'Adam',
                country: 'United States'
            },
            {
                name: 'Homer',
                country: ''
            },
            {
                name: 'Samantha',
                country: 'United States'
            },
            {
                name: 'Amalie',
                country: 'Argentina'
            },
            {
                name: 'Estefanía',
                country: 'Argentina'
            },
            {
                name: 'Adrian',
                country: 'Ecuador'
            },
            {
                name: 'Wladimir',
                country: 'Ecuador'
            },
            {
                name: 'Natasha',
                country: 'Ecuador'
            },
            {
                name: 'Nicole',
                country: 'Colombia'
            },
            {
                name: 'Michael',
                country: 'Colombia'
            },
            {
                name: 'Nicolás',
                country: 'Colombia'
            }
        ];
        // select icon
        this.selectIcon = [
            {
                id: 1,
                name: 'Chrome',
                icon: 'fa fa-chrome'
            },
            {
                id: 2,
                name: 'Firefox',
                icon: 'fa fa-firefox'
            },
            {
                id: 3,
                name: 'Safari',
                icon: 'fa fa-safari'
            },
            {
                id: 4,
                name: 'Opera',
                icon: 'fa fa-opera'
            }
        ];
        this.selectIconSelected = this.selectIcon[0].name;
        // select custom option
        this.selectCustomSelected = this.selectIcon[0].name;
        this.customTag = [];
        this.customTagNames = ['Uber', 'Microsoft', 'Flexigen'];
        this.selectMultiSelected = [{ name: 'Karyn Wright' }];
        // Select Multi with group
        this.selectMultiGroupSelected = [{ name: 'Karyn Wright' }];
        this.multiIconGithubUsersSelected = ['anjmao'];
        // Select Multi Custom
        this.multiCustomGithubUsersSelected = ['anjmao'];
        // select with limited number of selections
        this.selectMultiLimitedSelected = [{ name: 'Karyn Wright' }];
        // Select Custom header footer template
        this.selectCustomHeaderFooter = [];
        this.selectCustomHeaderFooterSelected = [];
        // select size
        this.SelectSizeLargeSelected = 'Adam';
        this.SelectSizeDefaultSelected = 'Adam';
        this.SelectSizeSmallSelected = 'Adam';
        this.MultiLargeSelected = [{ name: 'Karyn Wright' }];
        this.MultiDefaultSelected = [{ name: 'Karyn Wright' }];
        this.MultiSmallSelected = [{ name: 'Karyn Wright' }];
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    // select basic
    selectBasicMethod() {
        this.selectBasicLoading = true;
        this.dataService.getPeople().subscribe(x => {
            this.selectBasic = x;
            this.selectBasicLoading = false;
        });
    }
    // select multi limited selections
    multiLimitedClearModel() {
        this.selectMultiLimitedSelected = [];
    }
    /**
     * Select Custom Tag
     *
     * @param name
     */
    selectAddTagMethod(name) {
        return { name: name, tag: true };
    }
    customHeaderFooterSelectAll() {
        this.selectCustomHeaderFooterSelected = this.selectCustomHeaderFooter.map(x => x.name);
    }
    customHeaderFooterUnselectAll() {
        this.selectCustomHeaderFooterSelected = [];
    }
    // ng-select in model
    modalSelectOpen(modalSelect) {
        this.modalService.open(modalSelect, {
            windowClass: 'modal'
        });
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this.selectBasicMethod();
        this.selectMulti = this.dataService.getPeople();
        this.customTagNames.forEach((c, i) => {
            this.customTag.push({ id: i, name: c });
        });
        this.multiIconGithubUsers = this.dataService.getGithubAccounts('anjm');
        this.dataService.getPeople().subscribe(items => {
            this.selectCustomHeaderFooter = items;
        });
        // multiple sizes
        this.MultiLarge = this.dataService.getPeople();
        this.MultiDefault = this.dataService.getPeople();
        this.MultiSmall = this.dataService.getPeople();
        // content header
        this.contentHeader = {
            headerTitle: 'Select',
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
                        name: 'Form Elements',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Select',
                        isLink: false
                    }
                ]
            }
        };
    }
};
SelectComponent = __decorate([
    Component({
        selector: 'app-select',
        templateUrl: './select.component.html',
        styleUrls: ['./select.component.scss'],
        encapsulation: ViewEncapsulation.None
    })
], SelectComponent);
export { SelectComponent };
//# sourceMappingURL=select.component.js.map