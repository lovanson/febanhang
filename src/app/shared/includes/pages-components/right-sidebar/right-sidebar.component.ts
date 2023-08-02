import { Options } from '@angular-slider/ngx-slider';
import { Component } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent {
  minValue = 50;
  maxValue = 200;
  options: Options = {
    floor: 0,
    ceil: 250,
  };

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
