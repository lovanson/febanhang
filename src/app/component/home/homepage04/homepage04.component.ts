import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage04',
  templateUrl: './homepage04.component.html',
  styleUrls: ['./homepage04.component.scss'],
})
export class Homepage04Component {
  // ngx owl carousel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    navText: [
      '<i class="fa-chevron-left"></i>',
      '<i class="fa-chevron-right></i>"',
    ],
    margin: 10,
    autoWidth: false,
    autoHeight: false,
    navSpeed: 100,

    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
    },
  };
  slidesStore = [
    {
      id: '1',
      src: './assets/images/media/9.jpg',
      date: 'Nov-19-2020',
      comments: '6',
      title: 'Nemo ipsam voluptatem',
      summary:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat',
      image: './assets/images/users/male/5.jpg',
      name: 'Joanne Nash',
      status: '1 day ago',
    },
    {
      id: '2',
      src: './assets/images/media/10.jpg',
      date: 'Nov-19-2020',
      comments: '6',
      title: 'Sed ut perspiciatis iste',
      summary:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat',
      image: './assets/images/users/male/7.jpg',
      name: 'Tanner Mallari',
      status: '2 day ago',
    },
    {
      id: '3',
      src: './assets/images/media/11.jpg',
      date: 'Nov-15-2020',
      comments: '14',
      title: 'At vero accusamus et iusto',
      summary:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat',
      image: './assets/images/users/female/15.jpg',
      name: 'Aracely Bashore',
      status: '8 day ago',
    },
    {
      id: '4',
      src: './assets/images/media/12.jpg',
      date: 'Dec-20-2020',
      comments: '6',
      title: 'Excepteur occaecat cupidatat',
      summary:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat',
      image: './assets/images/users/male/15.jpg',
      name: 'Royal Hamblin',
      status: '5 day ago',
    },
    {
      id: '5',
      src: './assets/images/media/13.jpg',
      date: 'Nov-12-2020',
      comments: '12',
      title: 'Sed perspiciatis omnis iste',
      summary:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat',
      image: './assets/images/users/female/5.jpg',
      name: 'Rosita Chatmon',
      status: '7 day ago',
    },
    {
      id: '6',
      src: './assets/images/media/14.jpg',
      date: 'Nov-21-2020',
      comments: '8',
      title: 'At vero accusamus et iusto',
      summary:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat',
      image: './assets/images/users/male/6.jpg',
      name: 'Loyd Nolf',
      status: '2 day ago',
    },
    {
      id: '7',
      src: './assets/images/media/15.jpg',
      date: 'Nov-20-2020',
      comments: '5',
      title: 'Excepteur occaecat cupidatat',
      summary:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat',
      image: './assets/images/users/female/15.jpg',
      name: 'Aracely Bashore',
      status: '5 day ago',
    },
  ];
  items = [
    {
      img: './assets/images/media/pictures/small/01.jpg',
    },
    {
      img: './assets/images/media/pictures/small/02.jpg',
    },
    {
      img: './assets/images/media/pictures/small/03.jpg',
    },
    {
      img: './assets/images/media/pictures/small/04.jpg',
    },
    {
      img: './assets/images/media/pictures/small/05.jpg',
    },
    {
      img: './assets/images/media/pictures/small/06.jpg',
    },
    {
      img: './assets/images/media/pictures/small/07.jpg',
    },
    {
      img: './assets/images/media/pictures/small/08.jpg',
    },
    {
      img: './assets/images/media/pictures/small/09.jpg',
    },
    {
      img: './assets/images/media/pictures/small/10.jpg',
    },
    {
      img: './assets/images/media/pictures/small/01.jpg',
    },
    {
      img: './assets/images/media/pictures/small/12.jpg',
    },
  ];
  card = [
    {
      title: 'User Friendly',
      icons: 'las la-hands-helping',
      summary:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium',
    },
    {
      title: 'Easily Buy & Sell',
      icons: 'las la-cart-plus',
      summary:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium',
    },
    {
      title: '100% Responsive Rate',
      icons: 'las la-certificate',
      summary:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium',
    },
  ];

  ngOnInit(): void {
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    })
  }
}
