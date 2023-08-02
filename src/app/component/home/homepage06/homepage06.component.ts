import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage06',
  templateUrl: './homepage06.component.html',
  styleUrls: ['./homepage06.component.scss'],
})
export class Homepage06Component {
  currentRate = 4;
  constructor(private modalService: NgbModal,) {}
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

  image : any = [
    {
      src: './assets/images/media/pictures/small/13.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-9.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

    },
    { src: './assets/images/media/pictures/small/14.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-10.jpg",
          title:"Bioplex - Beauty Template",
          price:"$14.00"
        }

   },
    { src: './assets/images/media/pictures/small/15.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-11.jpg",
          title:"Splink - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/16.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-12.jpg",
          title:"Adon - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/17.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-13.jpg",
          title:"Hzone - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/18.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-14.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/19.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-15.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/20.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-16.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/21.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-17.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/22.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-18.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
  ];
  searchbardata = [
    {
      title: 'All Templates',
      placeholder: 'Search All Products.....',
    },
    {
      title: 'HTML',
      placeholder: 'Search HTML Products.....',
    },
    {
      title: 'Wordpress',
      placeholder: 'Search Wordpress Products.....',
    },
    {
      title: 'PHP',
      placeholder: 'Search PHP Products.....',
    },
    {
      title: 'Angular',
      placeholder: 'Search Angular Products.....',
    },
    {
      title: 'PSD',
      placeholder: 'Search PSD Products.....',
    },

    {
      title: 'Plugins',
      placeholder: 'Search Plugins Products.....',
    },
  ];
  images = [
    './assets/landing/web/1.png',
    './assets/landing/web/2.png',
    './assets/landing/web/3.png',
    './assets/landing/web/4.png',
    './assets/landing/web/5.png',
    './assets/landing/web/6.png',
  ];

  justForFun() {
    return (
      `<div
    data-parent="sprimg-id-order-1"
    id="sprimg-preview-div"
    class="sprimg-preview-block sprimg-theme-templateview sprimg-preview-shadow"
    style="width: auto; height: auto; top: 810px; left: 336px; display: block"
  >
    <img
      class="sprimg-preview-image"
      src="./assets/images/media/pictures/thumb-list/thumb-9.jpg"
      alt="Andora - Admin Template"
      width="500px"
      height="auto"
    />
    <h3>Andora - Admin Template</h3>
    <div class="sprimg-templateview-info">
      <span class="sprimg-templateview-author">by Spruko</span
      ><span class="sprimg-templateview-category">HTML / Bootstrap</span>
    </div>
    <div class="sprimg-templateview-price">24.00</div>
  </div>`
    )
  }

  ngOnInit(): void {

    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    })
  }

  public customTooltip = false;
  public customTooltip2 = false;

}
