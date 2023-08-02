import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('src/app/component/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('src/app/component/about-us/about-us.module').then(
        (m) => m.AboutUsModule
      ),
  },
  {
    path: 'widgets',
    loadChildren: () =>
      import('src/app/component/widgets/widgets.module').then(
        (m) => m.WidgetsModule
      ),
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('src/app/component/pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('src/app/component/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'custom-pages',
    loadChildren: () =>
      import('src/app/component/custom-pages/custom-pages.module').then(
        (m) => m.CustomPagesModule
      ),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('src/app/component/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
  },
];
