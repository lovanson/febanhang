import { Component } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss'],
})
export class PageListComponent {
  images = [
    './assets/images/media/pictures/6.jpg',
    './assets/images/media/pictures/5.jpg',
    './assets/images/media/pictures/7.jpg',
  ];
  showNavigationArrows = false;
  showNavigationIndicators = false;

  currentRate = 3;
  public isCollapsed = true;
  public isCollapsed1 = true;
}
