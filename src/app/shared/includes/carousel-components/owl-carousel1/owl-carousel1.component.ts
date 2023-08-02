import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-carousel1',
  templateUrl: './owl-carousel1.component.html',
  styleUrls: ['./owl-carousel1.component.scss'],
})
export class OwlCarousel1Component {
  // ngx owl carousel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: true,
    rtl: document.querySelector("body")?.classList.contains('rtl'),
    navText: [
      '<span aria-label="Previous">‹</span>',
      '<span aria-label="Next">›</span>',
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

  constructor(){
    const elements = [
      document.querySelector("#myonoffswitch54"),
      document.querySelector("#reset-button")
    ]

    elements.map((ele)=>{
      ele?.addEventListener("click",()=>{
        this.customOptions = {
          loop: true,
          mouseDrag: true,
          autoplay: true,
          touchDrag: true,
          pullDrag: true,
          dots: false,
          nav: true,
          rtl: false,
          navText: [
            '<button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>',
            '<button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>',
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
        }
      })
    })

    document.querySelector("#myonoffswitch55")?.addEventListener("click",()=>{
      this.customOptions = {
        loop: true,
        mouseDrag: true,
        autoplay: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        nav: true,
        rtl: true,
        navText: [
          '<button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>',
          '<button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>',
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
      }
    })

    // document.querySelector("#myonoffswitch54")?.addEventListener("click",()=>{
    //   this.customOptions = {
    //     loop: true,
    //     mouseDrag: true,
    //     autoplay: true,
    //     touchDrag: true,
    //     pullDrag: true,
    //     dots: false,
    //     nav: true,
    //     rtl: false,
    //     navText: [
    //       '<button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>',
    //       '<button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button>',
    //     ],
    //     margin: 10,
    //     autoWidth: false,
    //     autoHeight: false,
    //     navSpeed: 100,

    //     responsive: {
    //       0: {
    //         items: 1,
    //       },
    //       400: {
    //         items: 2,
    //       },
    //       740: {
    //         items: 3,
    //       },
    //     },
    //   }
    // })
  }

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
}
