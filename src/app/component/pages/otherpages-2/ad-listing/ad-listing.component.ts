import { Component } from '@angular/core';

@Component({
  selector: 'app-ad-listing',
  templateUrl: './ad-listing.component.html',
  styleUrls: ['./ad-listing.component.scss'],
})
export class AdListingComponent {
  currentRate = 4;
  images = [
    './assets/images/media/pictures/6.jpg',
    './assets/images/media/pictures/5.jpg',
    './assets/images/media/pictures/7.jpg',
  ];
  showNavigationArrows = false;
  showNavigationIndicators = false;

  images1 = [
    './assets/images/media/pictures/thumb-list/thumb-1.jpg',
    './assets/images/media/pictures/thumb-list/thumb-2.jpg',
    './assets/images/media/pictures/thumb-list/thumb-3.jpg',
  ];
}
