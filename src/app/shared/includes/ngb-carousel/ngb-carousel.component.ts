import { Component } from '@angular/core';

@Component({
  selector: 'app-ngb-carousel',
  templateUrl: './ngb-carousel.component.html',
  styleUrls: ['./ngb-carousel.component.scss'],
})
export class NgbCarouselComponent {

   images = [
     './assets/images/users/female/2.jpg',
     './assets/images/users/male/3.jpg',
     './assets/images/users/female/4.jpg',
   ];
}
