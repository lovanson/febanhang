import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-carousel2',
  templateUrl: './owl-carousel2.component.html',
  styleUrls: ['./owl-carousel2.component.scss'],
})
export class OwlCarousel2Component {
  currentRate = 4;

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
  }

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

  slidesStore = [
    {
      id: '1',
      tag: 'HTML',
      src: './assets/images/media/pictures/2.jpg',
      price: '$25',
      title: 'HTML Template',
      name: 'Eric',
      summary: 'HTML Template',
      likes: '451',
      downloads: '61',
      sale: '45',
      btn2: 'Add to cart',
      btn1: 'Buy Now',
    },
    {
      id: '2',
      tag: 'PSD',
      src: './assets/images/media/pictures/3.jpg',
      price: '$45',
      title: 'PSD Template',
      name: 'John',
      summary: 'PSD Template',
      likes: '125',
      downloads: '28',
      sale: '25',
      btn2: 'Add to cart',
      btn1: 'Buy Now',
    },
    {
      id: '3',
      tag: 'Angular',
      src: './assets/images/media/pictures/4.jpg',
      price: '$49',
      title: 'Angular Template',
      name: 'Anna',
      summary: 'Angular Template',
      likes: '351',
      downloads: '47',
      sale: '20',
      btn2: 'Add to cart',
      btn1: 'Buy Now',
    },
    {
      id: '4',
      src: './assets/images/media/pictures/5.jpg',
      price: '$25',
      title: 'PHP Template',
      tag: 'PHP',
      name: 'Emily',
      summary: 'PHP Template',
      likes: '412',
      downloads: '45',
      btn2: 'Add to cart',
      btn1: 'Buy Now',
      sale: '27',
    },
    {
      id: '5',
      tag: 'Wordpress',
      src: './assets/images/media/pictures/7.jpg',
      price: '$25',
      title: 'Wordpress Template',
      name: 'Piers',
      summary: 'Wordpress Template',
      likes: '235',
      downloads: '75',
      sale: '17',
      btn2: 'Add to cart',
      btn1: 'Buy Now',
    },
    {
      id: '6',
      tag: 'GPR HTML',
      src: './assets/images/media/pictures/6.jpg',
      price: '$35',
      title: 'GPR HTML Template',
      name: 'Jassica',
      summary: 'GPR HTML Template',
      likes: '320',
      downloads: '12',
      sale: '29',
      btn2: 'Add to cart',
      btn1: 'Buy Now',
    },
  ];
}
