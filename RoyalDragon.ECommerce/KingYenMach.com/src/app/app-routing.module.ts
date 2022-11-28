import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ComparePageComponent } from './components/pages/compare-page/compare-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { DeliveryReturnsPageComponent } from './components/pages/delivery-returns-page/delivery-returns-page.component';
import { DynamicProductsDetailsPageComponent } from './components/pages/dynamic-products-details-page/dynamic-products-details-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
import { GalleryFilterPageComponent } from './components/pages/gallery-filter-page/gallery-filter-page.component';
import { GalleryFourColumnPageComponent } from './components/pages/gallery-four-column-page/gallery-four-column-page.component';
import { GalleryThreeColumnPageComponent } from './components/pages/gallery-three-column-page/gallery-three-column-page.component';
import { GalleryTwoColumnPageComponent } from './components/pages/gallery-two-column-page/gallery-two-column-page.component';
import { HomeDemoEightComponent } from './components/pages/home-demo-eight/home-demo-eight.component';
import { HomeDemoFiveComponent } from './components/pages/home-demo-five/home-demo-five.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoSevenComponent } from './components/pages/home-demo-seven/home-demo-seven.component';
import { HomeDemoSixComponent } from './components/pages/home-demo-six/home-demo-six.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { OrderTrackingPageComponent } from './components/pages/order-tracking-page/order-tracking-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { ShippingPageComponent } from './components/pages/shipping-page/shipping-page.component';
import { ShopFullwidthPageOneComponent } from './components/pages/shop-fullwidth-page-one/shop-fullwidth-page-one.component';
import { ShopFullwidthPageTwoComponent } from './components/pages/shop-fullwidth-page-two/shop-fullwidth-page-two.component';
import { ShopLeftSidebarPageOneComponent } from './components/pages/shop-left-sidebar-page-one/shop-left-sidebar-page-one.component';
import { ShopLeftSidebarPageTwoComponent } from './components/pages/shop-left-sidebar-page-two/shop-left-sidebar-page-two.component';
import { ShopRightSidebarPageOneComponent } from './components/pages/shop-right-sidebar-page-one/shop-right-sidebar-page-one.component';
import { ShopRightSidebarPageTwoComponent } from './components/pages/shop-right-sidebar-page-two/shop-right-sidebar-page-two.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { WishlistPageComponent } from './components/pages/wishlist-page/wishlist-page.component';

const routes: Routes = [
    {path: '',  loadChildren: () => import('./components/main/home/home.module').then(m => m.HomeModule)},
    // {path: 'template', component: HomeDemoSixComponent},
    // {path: 'index-2', component: HomeDemoTwoComponent},
    // {path: 'index-3', component: HomeDemoThreeComponent},
    // {path: 'index-4', component: HomeDemoFourComponent},
    // {path: 'index-5', component: HomeDemoFiveComponent},
    // {path: 'index-6', component: HomeDemoSixComponent},
    // {path: 'index-7', component: HomeDemoSevenComponent},
    // {path: 'index-8', component: HomeDemoEightComponent},
    // {path: 'about', component: AboutPageComponent},
    // {path: 'feedback', component: FeedbackPageComponent},
    // {path: 'shop-full-width-1', component: ShopFullwidthPageOneComponent},
    // {path: 'shop-full-width-2', component: ShopFullwidthPageTwoComponent},
    // {path: 'shop-left-sidebar-1', component: ShopLeftSidebarPageOneComponent},
    // {path: 'shop-left-sidebar-2', component: ShopLeftSidebarPageTwoComponent},
    // {path: 'shop-right-sidebar-1', component: ShopRightSidebarPageOneComponent},
    // {path: 'shop-right-sidebar-2', component: ShopRightSidebarPageTwoComponent},
    // {path: 'products-details', component: ProductsDetailsPageComponent},
    // {path: 'products/:slug', component: DynamicProductsDetailsPageComponent},
    // // {path: 'cart', component: CartPageComponent},
    // {path: 'compare1', component: ComparePageComponent},
    // {path: 'checkout', component: CheckoutPageComponent},
    // // {path: 'wishlist', component: WishlistPageComponent},
    // {path: 'gallery-1', component: GalleryTwoColumnPageComponent},
    // {path: 'gallery-2', component: GalleryThreeColumnPageComponent},
    // {path: 'gallery-3', component: GalleryFourColumnPageComponent},
    // {path: 'gallery-4', component: GalleryFilterPageComponent},
    // {path: 'profile-authentication', component: MyAccountPageComponent},
    // {path: 'order-tracking', component: OrderTrackingPageComponent},
    // {path: 'faq', component: FaqPageComponent},
    // {path: 'delivery-returns', component: DeliveryReturnsPageComponent},
    // {path: 'shipping', component: ShippingPageComponent},
    // // {path: 'notfound', component: NotFoundComponent},
    // {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    // {path: 'terms-conditions', component: TermsConditionsPageComponent},
    // {path: 'coming-soon', component: ComingSoonPageComponent},
    // {path: 'blog-grid', component: BlogGridPageComponent},
    // {path: 'blog-left-sidebar', component: BlogLeftSidebarPageComponent},
    // {path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent},
    // {path: 'blog-details', component: BlogDetailsPageComponent},
    // {path: 'contact', component: ContactPageComponent},
    // Here add new pages component
    // Product Detail In Html
    // {path: ':productSlug', component: ProductsDetailsPageComponent},
    // { path: '**', component: NotFoundComponent } // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }