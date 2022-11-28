import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  // Dashboard
  {
    id: 'home',
    title: 'home',
    translate: 'MENU.HOME',
    type: 'collapsible',
    role: ['Poached','Sale'], //? To hide collapsible based on user role
    icon: 'home',
    badge: {
      title: '2',
      translate: 'MENU.DASHBOARD.BADGE',
      classes: 'badge-light-warning badge-pill'
    }
  },
  // Apps & Pages
  {
    id: 'apps',
    type: 'section',
    title: 'Quản lý',
    translate: 'MENU.MANAGES.SECTION',
    icon: 'package',
    children: [
      {
        id: 'product',
        title: 'Sản phẩm',
        translate: 'MENU.MANAGES.PRODUCT',
        role: ['Poached'],
        type: 'item',
        icon: 'grid',
        url: 'manages/product'
      },
      {
        id: 'user',
        title: 'Nhân viên',
        role: ['Admin'],
        translate: 'MENU.MANAGES.USER',
        type: 'item',
        icon: 'user',
        url: 'manages/user'
      },
      {
        id: 'customer',
        title: 'Khách hàng',
        role: ['Sale'],
        translate: 'MENU.MANAGES.CUSTOMER',
        type: 'item',
        icon: 'user',
        url: 'manages/customer'
      },
      {
        id: 'category',
        title: 'Danh mục',
        role: ['Admin'],
        translate: 'MENU.MANAGES.CATEGORY',
        type: 'item',
        icon: 'user',
        url: 'manages/category'
      }
    ]
  },
  // User Interface
  {
    id: 'sales',
    type: 'section',
    title: 'Bán hàng',
    role: ['Sale'],
    translate: 'MENU.SALES.SECTION',
    icon: 'layers',
    children: [
      {
        id: 'order',
        title: 'Đơn hàng',
        role: ['Sale'],
        translate: 'MENU.SALES.ORDER',
        type: 'item',
        icon: 'shopping-cart',
        url: 'sales/order'
      }
    ]
  },
  // User Interface
  {
    id: 'setting',
    type: 'section',
    title: 'Thiết lập',
    role: ['Admin'],
    translate: 'MENU.SETTING.SECTION',
    icon: 'layers',
    children: [
      {
        id: 'order',
        title: 'Cửa hàng',
        role: ['Sale'],
        translate: 'MENU.SETTING.SHOP',
        type: 'item',
        icon: 'settings',
        url: 'setting/shop'
      },
      {
        id: 'cost',
        title: 'Khoản chi',
        role: ['Admin','Accountant'],
        translate: 'MENU.SETTING.COST',
        type: 'item',
        icon: 'dollar-sign',
        url: 'setting/cost'
      },
    ]
  },
];
