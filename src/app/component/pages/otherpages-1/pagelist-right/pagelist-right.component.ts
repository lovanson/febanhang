import { Component } from '@angular/core';
// import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-pagelist-right',
  templateUrl: './pagelist-right.component.html',
  styleUrls: ['./pagelist-right.component.scss'],
})
export class PagelistRightComponent {
  images = [
    './assets/images/media/pictures/6.jpg',
    './assets/images/media/pictures/5.jpg',
    './assets/images/media/pictures/7.jpg',
  ];
  showNavigationArrows = false;
  showNavigationIndicators = false;

  currentRate = 3;
}
