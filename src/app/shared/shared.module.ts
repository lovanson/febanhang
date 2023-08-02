import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout-components/footer/footer.component';
import { ContentLayoutComponent } from './layout-components/layout/content-layout/content-layout.component';
import { SwitcherComponent } from './layout-components/switcher/switcher.component';
import { SwitcherLayoutComponent } from './layout-components/layout/switcher-layout/switcher-layout.component';
import { LoaderComponent } from './layout-components/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { TopBarComponent } from './header-component/top-bar/top-bar.component';
import { HeaderSearchComponent } from './header-component/header-search/header-search.component';
import { HorizontalHeaderComponent } from './header-component/horizontal-header/horizontal-header.component';
import { HorizontalMainComponent } from './header-component/horizontal-main/horizontal-main.component';
import { CookiesComponent } from './layout-components/cookies/cookies.component';
import { BanneringComponent } from './layout-components/bannering/bannering/bannering.component';
import { Bannering1Component } from './layout-components/bannering/bannering1/bannering1.component';
import { Bannering2Component } from './layout-components/bannering/bannering2/bannering2.component';
import { Bannering3Component } from './layout-components/bannering/bannering3/bannering3.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { NgbCarouselComponent } from './includes/ngb-carousel/ngb-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavTemplateComponent } from './includes/nav-components/nav-template/nav-template.component';
import { CardTemplateComponent } from './includes/card-components/card-template/card-template.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlCarouselComponent } from './includes/carousel-components/owl-carousel/owl-carousel.component';
import { OwlCarousel1Component } from './includes/carousel-components/owl-carousel1/owl-carousel1.component';
import { OwlCarousel2Component } from './includes/carousel-components/owl-carousel2/owl-carousel2.component';
import { OwlCarousel3Component } from './includes/carousel-components/owl-carousel3/owl-carousel3.component';
import { CardTemplate1Component } from './includes/card-components/card-template1/card-template1.component';
import { CardTemplate2Component } from './includes/card-components/card-template2/card-template2.component';
import { NavTemplate2Component } from './includes/nav-components/nav-template2/nav-template2.component';
import { NavTemplate3Component } from './includes/nav-components/nav-template3/nav-template3.component';
import { MessageModalComponent } from './includes/modal-components/message-modal/message-modal.component';
import { CommentModalComponent } from './includes/modal-components/comment-modal/comment-modal.component';
import { ReportModalComponent } from './includes/modal-components/report-modal/report-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { Table1Component } from './includes/table-components/table1/table1.component';
import { Table2Component } from './includes/table-components/table2/table2.component';
import { FooterLayoutComponent } from './layout-components/layout/footer-layout/footer-layout.component';
import { BlogGridComponent } from './includes/blog-components/blog-grid/blog-grid.component';
import { BlogListComponent } from './includes/blog-components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './includes/blog-components/blog-details/blog-details.component';
import { BlogSearchComponent } from './includes/blog-components/blog-search/blog-search.component';
import { HeaderstyleLayoutComponent } from './layout-components/layout/headerstyle-layout/headerstyle-layout.component';
import { SubscribePageComponent } from './includes/subscribe-page/subscribe-page.component';
import { HorizontalNavpageComponent } from './header-component/horizontal-navpage/horizontal-navpage.component';
import { Page10LayoutComponent } from './layout-components/layout/page10-layout/page10-layout.component';
import { RightSidebarComponent } from './includes/pages-components/right-sidebar/right-sidebar.component';
import { SidebarDashboardComponent } from './includes/pages-components/sidebar-dashboard/sidebar-dashboard.component';
import { LeftSidebarComponent } from './includes/pages-components/left-sidebar/left-sidebar.component';
import { PagedetailsSidebarComponent } from './includes/pages-components/pagedetails-sidebar/pagedetails-sidebar.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { HttpClientModule } from '@angular/common/http';
import { NgxColorsModule } from 'ngx-colors';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FlagDirective } from './directives/flag.directive';
import { AuthService } from './services/auth.service';
import { NgTooltipComponent } from './includes/ng-tooltip/ng-tooltip.component';
import { ScrollTopDirective } from './directives/scroll-top.directive';
import { ImagePreviewComponent } from './includes/image-preview/image-preview.component';
import { ProductPreviewComponent } from './includes/product-preview/product-preview.component';

@NgModule({
  declarations: [
    FooterComponent,
    ContentLayoutComponent,
    SwitcherComponent,
    SwitcherLayoutComponent,
    LoaderComponent,
    TopBarComponent,
    HeaderSearchComponent,
    HorizontalHeaderComponent,
    HorizontalMainComponent,
    CookiesComponent,
    BanneringComponent,
    Bannering1Component,
    Bannering2Component,
    Bannering3Component,
    BackToTopComponent,
    NgbCarouselComponent,
    NavTemplateComponent,
    CardTemplateComponent,
    OwlCarouselComponent,
    OwlCarousel1Component,
    OwlCarousel2Component,
    OwlCarousel3Component,
    CardTemplate1Component,
    CardTemplate2Component,
    NavTemplate2Component,
    NavTemplate3Component,
    MessageModalComponent,
    CommentModalComponent,
    ReportModalComponent,
    Table1Component,
    Table2Component,
    FooterLayoutComponent,
    BlogGridComponent,
    BlogListComponent,
    BlogDetailsComponent,
    BlogSearchComponent,
    HeaderstyleLayoutComponent,
    SubscribePageComponent,
    HorizontalNavpageComponent,
    Page10LayoutComponent,
    RightSidebarComponent,
    SidebarDashboardComponent,
    LeftSidebarComponent,
    PagedetailsSidebarComponent,
    FlagDirective,
    NgTooltipComponent,
    ScrollTopDirective,
    ImagePreviewComponent,
    ProductPreviewComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CarouselModule,
    NgbRatingModule,
    NgSelectModule,
    MatSelectCountryModule.forRoot('de'),
    HttpClientModule,
    NgbNavModule,
    NgxColorsModule,
    NgScrollbarModule,
    NgxSliderModule,
  ],
  exports: [
    BanneringComponent,
    Bannering1Component,
    Bannering2Component,
    Bannering3Component,
    NgbCarouselComponent,
    OwlCarouselComponent,
    OwlCarousel1Component,
    OwlCarousel2Component,
    OwlCarousel3Component,
    NavTemplateComponent,
    CardTemplateComponent,
    CardTemplate2Component,
    NavTemplate2Component,
    MessageModalComponent,
    CommentModalComponent,
    ReportModalComponent,
    Table1Component,
    Table2Component,
    BlogGridComponent,
    BlogListComponent,
    BlogDetailsComponent,
    BlogSearchComponent,
    SubscribePageComponent,
    Page10LayoutComponent,
    SidebarDashboardComponent,
    RightSidebarComponent,
    PagedetailsSidebarComponent,
    TopBarComponent,
    HeaderSearchComponent,
    HorizontalHeaderComponent,
    HorizontalMainComponent,
    FooterComponent,
    NgTooltipComponent,
    ScrollTopDirective,
    ImagePreviewComponent,
    ProductPreviewComponent
  ],
  providers: [AuthService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
