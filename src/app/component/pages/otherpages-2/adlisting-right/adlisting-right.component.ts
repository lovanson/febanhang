import { Component } from '@angular/core';

@Component({
  selector: 'app-adlisting-right',
  templateUrl: './adlisting-right.component.html',
  styleUrls: ['./adlisting-right.component.scss'],
})
export class AdlistingRightComponent {
  currentRate = 4;
  showNavigationArrows = false;
  showNavigationIndicators = false;

  images1 = [
    './assets/images/media/pictures/thumb-list/thumb-1.jpg',
    './assets/images/media/pictures/thumb-list/thumb-2.jpg',
    './assets/images/media/pictures/thumb-list/thumb-3.jpg',
  ];
  images2 = [
    './assets/images/media/pictures/thumb-list/thumb-2.jpg',
    './assets/images/media/pictures/thumb-list/thumb-4.jpg',
    './assets/images/media/pictures/thumb-list/thumb-3.jpg',
  ];
}
