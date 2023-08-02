import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  currentRate = 4;
  showNavigationArrows = true;
  showNavigationIndicators = true;

  images1 = [
    './assets/images/media/pictures/1.jpg',
    ' ./assets/images/media/pictures/7.jpg',
    './assets/images/media/pictures/6.jpg',
    './assets/images/media/pictures/8.jpg',
    './assets/images/media/pictures/4.jpg',
  ];

  data = [
    {
      id: '1',
      src: './assets/images/media/pictures/1.jpg',
      price: '$15',
      title: 'HTML Template',
      like: '452',
      download: '50',
      name: 'Emily Parsons',
      sale: '45',
      tooltip1: 'Live Preview',
      tooltip2: 'Add to cart',
      tooltip3: 'View Details',
    },
  ];

  showNavigationArrows1 = false;
  showNavigationIndicators1 = false;

  images = [
    './assets/images/media/pictures/1.jpg',
    './assets/images/media/pictures/7.jpg',
    './assets/images/media/pictures/8.jpg',
  ];
}
