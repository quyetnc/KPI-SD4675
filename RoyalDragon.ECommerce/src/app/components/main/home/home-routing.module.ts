import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';
import { HomeDemoSixComponent } from 'app/components/pages/home-demo-six/home-demo-six.component';
import { ProductsDetailsPageComponent } from 'app/components/pages/products-details-page/products-details-page.component';
import { CartComponent } from './cart/cart.component';
import { CategoryProductDetailComponent } from './category-product-detail/category-product-detail.component';
import { CompareProductComponent } from './compare-product/compare-product.component';
// import { DetailProductComponent } from './detail-product/detail-product.component';
import { FilterListProductComponent } from './filter-list-product/filter-list-product.component';
import { HomeByCategoriesComponent } from './home-by-categories/home-by-categories.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShowListProductComponent } from './show-list-product/show-list-product.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'homesix',
        component: HomeDemoSixComponent,
    },
    {
        path: 'search',
        component: FilterListProductComponent,
    },
    {
        path: 'search/?pram=:id',
        component: FilterListProductComponent,
    },
    // {
    //     path: 'detail/:id',
    //     component: DetailProductComponent,
    // },
    // {
    //     path: ':productSlug',
    //     component: ProductsDetailsPageComponent,
    // },
    {
        path: 'category/:slug',
        component: CategoryProductDetailComponent,
    },
    { path: 'cart', component: CartComponent },
    { path: 'compare', component: CompareProductComponent },
    {
        path: 'wishlist',
        component: WishListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), FormsModule, CoreTouchspinModule],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
