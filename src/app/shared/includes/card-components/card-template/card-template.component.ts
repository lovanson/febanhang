import { Component } from '@angular/core';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.scss'],
})
export class CardTemplateComponent {
  currentRate = 4;
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
    {
      id: '2',
      src: './assets/images/media/pictures/3.jpg',
      price: '$15',
      title: 'PSD Template',
      like: '452',
      download: '50',
      summary:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      image: './assets/images/users/male/18.jpg',
      name: 'Emily Parsons',
      sale: '25',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
    },
    {
      id: '3',
      src: './assets/images/media/pictures/4.jpg',
      price: '$15',
      title: 'Angular Template',
      like: '452',
      download: '50',
      summary:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      image: './assets/images/users/male/13.jpg',
      name: 'Jessica Turner',
      sale: '20',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
    },
    {
      id: '4',
      src: './assets/images/media/pictures/5.jpg',
      price: '$15',
      title: 'PHP Template',
      like: '452',
      download: '50',
      summary:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      image: './assets/images/users/male/14.jpg',
      name: 'Joss Butler',
      sale: '27',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
    },
    {
      id: '5',
      src: './assets/images/media/pictures/7.jpg',
      price: '$15',
      title: 'Wordpress Template',
      like: '452',
      download: '50',
      summary:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      image: './assets/images/users/male/15.jpg',
      name: 'Anna Howard',
      sale: '17',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
    },
    {
      id: '6',
      src: './assets/images/media/pictures/6.jpg',
      price: '$15',
      title: 'GPR HTML Template',
      like: '452',
      download: '50',
      summary:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      image: './assets/images/users/male/16.jpg',
      name: 'Eric Russell',
      sale: '29',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
    },
  ];
}