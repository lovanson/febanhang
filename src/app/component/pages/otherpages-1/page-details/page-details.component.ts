import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss'],
})
export class PageDetailsComponent {
  currentRate = 4;
  public RTLState = document.body.classList.contains("rtl") ? true : false

  data = [
    {
      src: './assets/images/png/1.png',
      name: 'Marco Theme',
      date: '28 Dec 2019',
      summery:
        ' Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
    {
      src: './assets/images/png/2.png',
      name: 'Lisa Theme',
      date: '14 Dec 2019',
      summery:
        ' Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
    {
      src: './assets/images/png/3.png',
      name: 'Marshall Theme',
      date: '18 Dec 2019',
      summery:
        ' Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
    {
      src: './assets/images/png/4.png',
      name: 'Chapman Theme',
      date: '30 Dec 2019',
      summery:
        ' Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
    {
      src: './assets/images/png/5.png',
      name: '	Robic Theme',
      date: '20 Dec 2019',
      summery:
        ' Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
  ];

  public albums: any[] = [];

  constructor(private modalService: NgbModal,private _lightbox: Lightbox) {
    for (let i = 1; i <= 1; i++) {
      const src = './assets/images/media/pictures/thumb-list/thumb-2.jpg';
      const caption = 'Bioplex - Beauty & Spa Creative Wordpress Template';
      const album = {
        src: src,
        caption: caption
      };

      this.albums.push(album);
    }
    console.log(this.albums);

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
            items: 2,
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
              items: 2,
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
        items: 2,
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

  closeResult = '';

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  openProdect(index: number): void {
    this._lightbox.open(this.albums, index);
  }

}
