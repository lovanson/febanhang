import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-template',
  templateUrl: './nav-template.component.html',
  styleUrls: ['./nav-template.component.scss'],
})
export class NavTemplateComponent {
  currentRate = 4;
  carddata = [
    {
      src: './assets/images/media/pictures/1.jpg',
      tag: 'HTML',
      title: 'HTML Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$25',
      src1: './assets/images/users/male/1.jpg',
      name: 'Gavin Fraser',
      cart: '31',
    },
    {
      src: './assets/images/media/pictures/2.jpg',
      tag: 'PSD',
      title: 'PSD Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$49',
      src1: './assets/images/users/female/1.jpg',
      name: 'Lily Paige',
      cart: '41',
    },
    {
      src: './assets/images/media/pictures/3.jpg',
      tag: 'Angular',
      title: 'Angular Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$34',
      src1: './assets/images/users/male/2.jpg',
      name: 'Carl Welch',
      cart: '57',
    },
    {
      src: './assets/images/media/pictures/4.jpg',
      tag: 'PHP',
      title: 'PHP Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$55',
      src1: './assets/images/users/female/2.jpg',
      name: 'Joan Lyman',
      cart: '39',
    },
    {
      src: './assets/images/media/pictures/5.jpg',
      tag: 'Wordpress',
      title: 'Wordpress Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$35',
      src1: './assets/images/users/male/3.jpg',
      name: 'Jake Newman',
      cart: '45',
    },
    {
      src: './assets/images/media/pictures/8.jpg',
      tag: 'GPR HTML',
      title: 'GPR HTML Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$45',
      src1: './assets/images/users/male/12.jpg',
      name: 'Blake Mathis',
      cart: '37',
    },
  ];
  carddata1 = [
    {
      src: './assets/images/media/pictures/2.jpg',
      tag: 'HTML',
      title: 'HTML Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$25',
      src1: './assets/images/users/male/1.jpg',
      name: 'Stewart Hill',
      cart: '31',
    },
    {
      src: './assets/images/media/pictures/3.jpg',
      tag: 'GPR HTML',
      title: '  GPR HTML Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$49',
      src1: './assets/images/users/female/3.jpg',
      name: 'Lily Paige',
      cart: '41',
    },
    {
      src: './assets/images/media/pictures/9.jpg',
      tag: 'RTN HTML',
      title: ' RTN HTML Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$34',
      src1: './assets/images/users/male/7.jpg',
      name: 'Carl Welch',
      cart: '57',
    },
  ];
  carddata2 = [
    {
      src: './assets/images/media/pictures/5.jpg',
      tag: 'Wordpress',
      title: 'Wordpress Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$45',
      src1: './assets/images/users/male/9.jpg',
      name: 'Max Martin',
      cart: '34',
    },
    {
      src: './assets/images/media/pictures/6.jpg',
      tag: 'Wordpress',
      title: '   Multi Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$49',
      src1: './assets/images/users/female/9.jpg',
      name: 'Olivia Morgan',
      cart: '41',
    },
    {
      src: './assets/images/media/pictures/8.jpg',
      tag: 'Wordpress',
      title: '  Wordpress Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$15',
      src1: './assets/images/users/female/11.jpg',
      name: 'Joe Roberts',
      cart: '57',
    },
  ];
  carddata3 = [
    {
      src: './assets/images/media/pictures/4.jpg',
      tag: 'PHP',
      title: 'PHP Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$25',
      src1: './assets/images/users/male/8.jpg',
      name: 'Stewart Hill',
      cart: '31',
    },
    {
      src: './assets/images/media/pictures/5.jpg',
      tag: 'GPR HTML',
      title: '  GPR HTML Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$49',
      src1: './assets/images/users/female/8.jpg',
      name: 'Lily Paige',
      cart: '41',
    },
    {
      src: './assets/images/media/pictures/9.jpg',
      tag: 'RTN HTML',
      title: ' RTN HTML Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$34',
      src1: './assets/images/users/male/7.jpg',
      name: 'Carl Welch',
      cart: '57',
    },
  ];
  carddata4 = [
    {
      src: './assets/images/media/pictures/5.jpg',
      tag: 'Angular',
      title: 'Angular Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$25',
      src1: './assets/images/users/male/8.jpg',
      name: 'Stewart Hill',
      cart: '31',
    },
    {
      src: './assets/images/media/pictures/6.jpg',
      tag: 'Angular ',
      title: '  Angular Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$49',
      src1: './assets/images/users/female/6.jpg',
      name: 'Lily Paige',
      cart: '41',
    },
    {
      src: './assets/images/media/pictures/9.jpg',
      tag: 'Angular',
      title: ' Angular Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$34',
      src1: './assets/images/users/male/7.jpg',
      name: 'Carl Welch',
      cart: '57',
    },
  ];
  carddata5 = [
    {
      src: './assets/images/media/pictures/4.jpg',
      tag: 'PSD',
      title: 'PSD Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$25',
      src1: './assets/images/users/male/8.jpg',
      name: 'Stewart Hill',
      cart: '31',
    },
    {
      src: './assets/images/media/pictures/2.jpg',
      tag: 'PSD',
      title: ' PSD Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$49',
      src1: './assets/images/users/female/8.jpg',
      name: 'Lily Paige',
      cart: '41',
    },
    {
      src: './assets/images/media/pictures/9.jpg',
      tag: 'PSD',
      title: ' PSD Template',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
      summery:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      price: '$34',
      src1: './assets/images/users/male/7.jpg',
      name: 'Carl Welch',
      cart: '57',
    },
  ];
  @ViewChild('scrollButton') scrollButton!: ElementRef;

  ngAfterViewInit() {
    this.scrollButton.nativeElement.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
