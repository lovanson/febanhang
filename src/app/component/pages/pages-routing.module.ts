import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './otherpages-1/categories/categories.component';
import { InvoiceComponent } from './otherpages-1/invoice/invoice.component';
import { PageDetailsComponent } from './otherpages-1/page-details/page-details.component';
import { PageDetails01Component } from './otherpages-1/page-details01/page-details01.component';
import { PageListComponent } from './otherpages-1/page-list/page-list.component';
import { PagedetailsRightComponent } from './otherpages-1/pagedetails-right/pagedetails-right.component';
import { PagelistRightComponent } from './otherpages-1/pagelist-right/pagelist-right.component';
import { PricingComponent } from './otherpages-1/pricing/pricing.component';
import { UserListComponent } from './otherpages-1/user-list/user-list.component';
import { AdDetailsComponent } from './otherpages-2/ad-details/ad-details.component';
import { AdListingComponent } from './otherpages-2/ad-listing/ad-listing.component';
import { AddetailsRightComponent } from './otherpages-2/addetails-right/addetails-right.component';
import { AdlistingRightComponent } from './otherpages-2/adlisting-right/adlisting-right.component';
import { EditPost02Component } from './otherpages-2/edit-post02/edit-post02.component';
import { EditPostsComponent } from './otherpages-2/edit-posts/edit-posts.component';
import { ItemPost01Component } from './otherpages-2/item-post01/item-post01.component';
import { ItemPostsComponent } from './otherpages-2/item-posts/item-posts.component';
import { TypographyComponent } from './otherpages-2/typography/typography.component';
import { CartsComponent } from './otherpages-3/carts/carts.component';
import { CheckoutComponent } from './otherpages-3/checkout/checkout.component';
import { FaqsComponent } from './otherpages-3/faqs/faqs.component';
import { OrdersComponent } from './otherpages-3/orders/orders.component';
import { SettingsComponent } from './otherpages-3/settings/settings.component';
import { StatementsComponent } from './otherpages-3/statements/statements.component';
import { TestimonialsComponent } from './otherpages-3/testimonials/testimonials.component';
import { TipsComponent } from './otherpages-3/tips/tips.component';
import { FevoriteAdsComponent } from './user-pages/fevorite-ads/fevorite-ads.component';
import { ManagedAdsComponent } from './user-pages/managed-ads/managed-ads.component';
import { MyAdsComponent } from './user-pages/my-ads/my-ads.component';
import { MyDashboardComponent } from './user-pages/my-dashboard/my-dashboard.component';
import { MyDashboard01Component } from './user-pages/my-dashboard01/my-dashboard01.component';
import { PaymentsComponent } from './user-pages/payments/payments.component';
import { UserProfileComponent } from './user-pages/user-profile/user-profile.component';
import { UserProfile01Component } from './user-pages/user-profile01/user-profile01.component';

const routes: Routes = [
  {
    path: 'otherpages-1',
    children: [
      {
        path: 'categories',
        title: 'Templist - categories',
        component: CategoriesComponent,
      },
      {
        path: 'invoice',
        title: 'Templist - invoice',
        component: InvoiceComponent,
      },
      {
        path: 'page-details',
        title: 'Templist - page-details',
        component: PageDetailsComponent,
      },
      {
        path: 'page-details01',
        title: 'Templist - page-details01',
        component: PageDetails01Component,
      },
      {
        path: 'page-list',
        title: 'Templist - page-list',
        component: PageListComponent,
      },
      {
        path: 'pagedetails-right',
        title: 'Templist - pagedetails-right',
        component: PagedetailsRightComponent,
      },
      {
        path: 'pagelist-right',
        title: 'Templist - pagelist-right',
        component: PagelistRightComponent,
      },
      {
        path: 'pricing',
        title: 'Templist - pricing',
        component: PricingComponent,
      },
      {
        path: 'user-list',
        title: 'Templist - user-list',
        component: UserListComponent,
      },
    ],
  },
  {
    path: 'otherpages-2',
    children: [
      {
        path: 'ad-listing',
        title: 'Templist - ad-listing',
        component: AdListingComponent,
      },
      {
        path: 'adlisting-right',
        title: 'Templist - adlisting-right',
        component: AdlistingRightComponent,
      },
      {
        path: 'ad-details',
        title: 'Templist - ad-details',
        component: AdDetailsComponent,
      },
      {
        path: 'addetails-right',
        title: 'Templist - addetails-right',
        component: AddetailsRightComponent,
      },
      {
        path: 'item-posts',
        title: 'Templist - item-posts',
        component: ItemPostsComponent,
      },
      {
        path: 'edit-posts',
        title: 'Templist - edit-posts',
        component: EditPostsComponent,
      },
      {
        path: 'edit-posts02',
        title: 'Templist - edit-posts02',
        component: EditPost02Component,
      },
      {
        path: 'item-posts02',
        title: 'Templist - item-posts02',
        component: ItemPost01Component,
      },
      {
        path: 'typography',
        title: 'Templist - Typography',
        component: TypographyComponent,
      },
    ],
  },
  {
    path: 'user-pages',
    children: [
      {
        path: 'favourite-ads',
        title: 'Templist - Favourite-Ads',
        component: FevoriteAdsComponent,
      },
      {
        path: 'managed-ads',
        title: 'Templist - managed-ads',
        component: ManagedAdsComponent,
      },
      {
        path: 'my-ads',
        title: 'Templist - my-ads',
        component: MyAdsComponent,
      },
      {
        path: 'my-dashboard',
        title: 'Templist - my-dashboard',
        component: MyDashboardComponent,
      },
      {
        path: 'my-dashboard01',
        title: 'Templist - my-dashboard01',
        component: MyDashboard01Component,
      },
      {
        path: 'payments',
        title: 'Templist - payments',
        component: PaymentsComponent,
      },
      {
        path: 'user-profile',
        title: 'Templist - user-profile',
        component: UserProfileComponent,
      },
      {
        path: 'user-profile01',
        title: 'Templist - user-profile01',
        component: UserProfile01Component,
      },
    ],
  },
  {
    path: 'otherpages-3',
    children: [
      {
        path: 'carts',
        title: 'Templist - carts',
        component: CartsComponent,
      },

      {
        path: 'checkout',
        title: 'Templist - checkout',
        component: CheckoutComponent,
      },
      {
        path: 'faqs',
        title: 'Templist - faqs',
        component: FaqsComponent,
      },
      {
        path: 'orders',
        title: 'Templist - orders',
        component: OrdersComponent,
      },
      {
        path: 'settings',
        title: 'Templist - settings',
        component: SettingsComponent,
      },
      {
        path: 'statements',
        title: 'Templist - statements',
        component: StatementsComponent,
      },
      {
        path: 'testimonials',
        title: 'Templist - testimonials',
        component: TestimonialsComponent,
      },
      {
        path: 'tips',
        title: 'Templist - tips',
        component: TipsComponent,
      },
    ],
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
