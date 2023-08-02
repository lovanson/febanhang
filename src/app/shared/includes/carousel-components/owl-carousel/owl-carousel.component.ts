import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.scss'],
})
export class OwlCarouselComponent {
  currentRate = 4;
  public RTLState = document.body.classList.contains("rtl") ? true : false
  constructor(){
    document.getElementById("myonoffswitch55")?.addEventListener("click",()=>{
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
    const elements = [
      document.getElementById("myonoffswitch54"),
      document.getElementById("reset-button")
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
    rtl: this.RTLState,
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
  };

  slidesStore = [
    {
      id: '1',
      tag: 'HTML',
      src: './assets/images/media/pictures/2.jpg',
      price: '$25',
      title: 'HTML Template',
      summary:
        'Lorem Ipsum available, quis int lorem ipsum nostrum exercitationem',
      image: './assets/images/users/male/12.jpg',
      name: 'Emily Parsons',
      sale: '45',
      tooltip1: 'Add to Wishlist',
      tooltip2: 'Buy Now',
      tooltip3: 'View Details',
    },
    {
      id: '2',
      tag: 'PSD',
      src: './assets/images/media/pictures/3.jpg',
      price: '$35',
      title: 'PSD Template',
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
      tag: 'Angular',
      src: './assets/images/media/pictures/4.jpg',
      price: '$49',
      title: 'Angular Template',
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
      tag: 'PHP',
      src: './assets/images/media/pictures/5.jpg',
      price: '$47',
      title: 'PHP Template',
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
      tag: 'Wordpress',
      src: './assets/images/media/pictures/7.jpg',
      price: '$35',
      title: 'Wordpress Template',
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
      tag: 'GPR HTML',
      src: './assets/images/media/pictures/6.jpg',
      price: '$27',
      title: 'GPR HTML Template',
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
