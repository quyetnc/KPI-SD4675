import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ShowListProductComponent } from './show-list-product/show-list-product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterListProductComponent } from './filter-list-product/filter-list-product.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { VndPipeModule } from 'app/common/pipe/vnd.pipe.module';
import { FormsModule } from '@angular/forms';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { TabsModule } from 'ngx-tabset';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HomeByCategoriesComponent } from './home-by-categories/home-by-categories.component';
import { HomeBannerComponent } from './home-by-categories/home-banner/home-banner.component';
import { ShopByCategoriesComponent } from 'app/components/common/shop-by-categories/shop-by-categories.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerHomePageComponent } from './home-page/banner-home-page/banner-home-page.component';
import { FeaturedHomePageComponent } from './home-page/featured-home-page/featured-home-page.component';
import { SpecialDealsHomePageComponent } from './home-page/special-deals-home-page/special-deals-home-page.component';
import { SpecialOfferHomePageComponent } from './home-page/special-offer-home-page/special-offer-home-page.component';
import { PopularHomePageComponent } from './home-page/popular-home-page/popular-home-page.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { CategoryProductDetailComponent } from './category-product-detail/category-product-detail.component';
import { CoreTouchspinModule } from '@core/components/core-touchspin/core-touchspin.module';
import { ProductByCategoryComponent } from './home-page/product-by-category/product-by-category.component';
import { CompareProductComponent } from './compare-product/compare-product.component';


@NgModule({
  declarations: [
    ShowListProductComponent,
    FilterListProductComponent,
    DetailProductComponent,
    CartComponent,
    WishListComponent,
    HomeByCategoriesComponent,
    HomeBannerComponent,
    HomePageComponent,
    BannerHomePageComponent,
    FeaturedHomePageComponent,
    SpecialDealsHomePageComponent,
    SpecialOfferHomePageComponent,
    PopularHomePageComponent,
    CategoryProductDetailComponent,
    ProductByCategoryComponent,
    CompareProductComponent,
    // ShopByCategoriesComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxPaginationModule,
    NgxSliderModule,
    VndPipeModule,
    FormsModule,
    TabsModule,
    CarouselModule,
    CoreTouchspinModule
  ],
})
export class HomeModule {
  imports: [
  ]
}
