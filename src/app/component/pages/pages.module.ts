import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PageListComponent } from './otherpages-1/page-list/page-list.component';
import { AdListingComponent } from './otherpages-2/ad-listing/ad-listing.component';
import { OrdersComponent } from './otherpages-3/orders/orders.component';
import { UserProfileComponent } from './user-pages/user-profile/user-profile.component';
import { PagelistRightComponent } from './otherpages-1/pagelist-right/pagelist-right.component';
import { PageDetailsComponent } from './otherpages-1/page-details/page-details.component';
import { PageDetails01Component } from './otherpages-1/page-details01/page-details01.component';
import { PagedetailsRightComponent } from './otherpages-1/pagedetails-right/pagedetails-right.component';
import { CategoriesComponent } from './otherpages-1/categories/categories.component';
import { InvoiceComponent } from './otherpages-1/invoice/invoice.component';
import { UserListComponent } from './otherpages-1/user-list/user-list.component';
import { PricingComponent } from './otherpages-1/pricing/pricing.component';
import { AdlistingRightComponent } from './otherpages-2/adlisting-right/adlisting-right.component';
import { AdDetailsComponent } from './otherpages-2/ad-details/ad-details.component';
import { AddetailsRightComponent } from './otherpages-2/addetails-right/addetails-right.component';
import { ItemPostsComponent } from './otherpages-2/item-posts/item-posts.component';
import { EditPostsComponent } from './otherpages-2/edit-posts/edit-posts.component';
import { ItemPost01Component } from './otherpages-2/item-post01/item-post01.component';
import { EditPost02Component } from './otherpages-2/edit-post02/edit-post02.component';
import { TypographyComponent } from './otherpages-2/typography/typography.component';
import { StatementsComponent } from './otherpages-3/statements/statements.component';
import { SettingsComponent } from './otherpages-3/settings/settings.component';
import { TipsComponent } from './otherpages-3/tips/tips.component';
import { TestimonialsComponent } from './otherpages-3/testimonials/testimonials.component';
import { CartsComponent } from './otherpages-3/carts/carts.component';
import { FaqsComponent } from './otherpages-3/faqs/faqs.component';
import { CheckoutComponent } from './otherpages-3/checkout/checkout.component';
import { UserProfile01Component } from './user-pages/user-profile01/user-profile01.component';
import { MyDashboardComponent } from './user-pages/my-dashboard/my-dashboard.component';
import { MyAdsComponent } from './user-pages/my-ads/my-ads.component';
import { FevoriteAdsComponent } from './user-pages/fevorite-ads/fevorite-ads.component';
import { ManagedAdsComponent } from './user-pages/managed-ads/managed-ads.component';
import { PaymentsComponent } from './user-pages/payments/payments.component';
import { MyDashboard01Component } from './user-pages/my-dashboard01/my-dashboard01.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
// import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule } from '@angular/common/http';
// import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HeaderFooterModule } from './header-footer/header-footer.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LightboxModule } from 'ngx-lightbox';
@NgModule({
  declarations: [
    PageListComponent,
    AdListingComponent,
    OrdersComponent,
    UserProfileComponent,
    PagelistRightComponent,
    PageDetailsComponent,
    PageDetails01Component,
    PagedetailsRightComponent,
    CategoriesComponent,
    InvoiceComponent,
    UserListComponent,
    PricingComponent,
    AdlistingRightComponent,
    AdDetailsComponent,
    AddetailsRightComponent,
    ItemPostsComponent,
    EditPostsComponent,
    ItemPost01Component,
    EditPost02Component,
    TypographyComponent,
    StatementsComponent,
    SettingsComponent,
    TipsComponent,
    TestimonialsComponent,
    CartsComponent,
    FaqsComponent,
    CheckoutComponent,
    UserProfile01Component,
    MyDashboardComponent,
    MyAdsComponent,
    FevoriteAdsComponent,
    ManagedAdsComponent,
    PaymentsComponent,
    MyDashboard01Component,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    // NgxSliderModule,
    HttpClientModule,
    // NgxGalleryModule,
    NgxDropzoneModule,
    HeaderFooterModule,
    CarouselModule,
    LeafletModule,
    LightboxModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesModule {}
