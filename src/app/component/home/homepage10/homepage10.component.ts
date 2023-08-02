import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage10',
  templateUrl: './homepage10.component.html',
  styleUrls: ['./homepage10.component.scss'],
})
export class Homepage10Component {

  carddata = [
    {
      src1: './assets/images/media/pictures/small/13.jpg',
      src2: './assets/images/media/pictures/thumb-list/thumb-9.jpg',
    },
    {
      src1: './assets/images/media/pictures/small/14.jpg',
      src2: './assets/images/media/pictures/thumb-list/thumb-10.jpg',
    },
    {
      src1: './assets/images/media/pictures/small/15.jpg',
      src2: './assets/images/media/pictures/thumb-list/thumb-11.jpg',
    },
    {
      src1: './assets/images/media/pictures/small/16.jpg',
      src2: './assets/images/media/pictures/thumb-list/thumb-12.jpg',
    },
    {
      src1: './assets/images/media/pictures/small/17.jpg',
      src2: './assets/images/media/pictures/thumb-list/thumb-13.jpg',
    },
  ];

  TooltipImage : any = [
    { src: './assets/images/media/pictures/small/29.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-10.jpg",
          title:"Bioplex - Beauty Template",
          price:"$14.00"
        }

   },
    { src: './assets/images/media/pictures/small/38.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-11.jpg",
          title:"Splink - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/37.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-12.jpg",
          title:"Adon - Admin Template",
          price:"$24.00"
        }

   },
   { src: './assets/images/media/pictures/small/34.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-15.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/36.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-13.jpg",
          title:"Hzone - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/35.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-14.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/34.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-15.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/33.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-16.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/32.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-17.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/31.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-18.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   }
  ];

  TooltipImage2 : any = [
    {
      src: './assets/images/media/pictures/small/30.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-9.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

    },
    { src: './assets/images/media/pictures/small/31.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-10.jpg",
          title:"Bioplex - Beauty Template",
          price:"$14.00"
        }

   },
    { src: './assets/images/media/pictures/small/32.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-11.jpg",
          title:"Splink - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/33.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-12.jpg",
          title:"Adon - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/34.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-13.jpg",
          title:"Hzone - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/35.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-14.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
   {
    src: './assets/images/media/pictures/small/30.jpg',
    Tooltip :{
        active: false,
        image:"./assets/images/media/pictures/thumb-list/thumb-9.jpg",
        title:"Andora - Admin Template",
        price:"$24.00"
      }

  },
    { src: './assets/images/media/pictures/small/36.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-15.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/37.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-16.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
   { src: './assets/images/media/pictures/small/34.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-13.jpg",
          title:"Hzone - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/38.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-17.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/29.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-18.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
  ];

  TooltipImage3 : any = [
    { src: './assets/images/media/pictures/small/32.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-11.jpg",
          title:"Splink - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/34.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-13.jpg",
          title:"Hzone - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/36.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-15.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/33.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-12.jpg",
          title:"Adon - Admin Template",
          price:"$24.00"
        }

   },
   { src: './assets/images/media/pictures/small/32.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-11.jpg",
          title:"Splink - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/34.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-13.jpg",
          title:"Hzone - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/35.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-14.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    {
      src: './assets/images/media/pictures/small/30.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-9.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

    },
    { src: './assets/images/media/pictures/small/31.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-10.jpg",
          title:"Bioplex - Beauty Template",
          price:"$14.00"
        }

   },
    { src: './assets/images/media/pictures/small/37.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-16.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/38.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-17.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/29.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-18.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
  ];

  TooltipImage4 : any = [

    { src: './assets/images/media/pictures/small/35.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-14.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    {
      src: './assets/images/media/pictures/small/30.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-9.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

    },
    { src: './assets/images/media/pictures/small/31.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-10.jpg",
          title:"Bioplex - Beauty Template",
          price:"$14.00"
        }

   },
    { src: './assets/images/media/pictures/small/32.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-11.jpg",
          title:"Splink - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/33.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-12.jpg",
          title:"Adon - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/34.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-13.jpg",
          title:"Hzone - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/35.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-14.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/36.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-15.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/37.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-16.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/38.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-17.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/29.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-18.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
   { src: './assets/images/media/pictures/small/34.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-13.jpg",
          title:"Hzone - Admin Template",
          price:"$24.00"
        }

   },
  ];

  TooltipImage5 : any = [
    { src: './assets/images/media/pictures/small/20.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-12.jpg",
          title:"Adon - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/22.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-10.jpg",
          title:"Bioplex - Beauty Template",
          price:"$14.00"
        }

   },
    { src: './assets/images/media/pictures/small/21.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-11.jpg",
          title:"Splink - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/20.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-12.jpg",
          title:"Adon - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/19.jpg',
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
    { src: './assets/images/media/pictures/small/17.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-15.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/16.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-16.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/15.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-17.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/14.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-18.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
   { src: './assets/images/media/pictures/small/13.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-13.jpg",
          title:"Hzone - Admin Template",
          price:"$24.00"
        }

   },
  ];

  TooltipImage6 : any = [
    { src: './assets/images/media/pictures/small/19.jpg',
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
    { src: './assets/images/media/pictures/small/17.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-15.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/16.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-16.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/15.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-17.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/14.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-18.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
   { src: './assets/images/media/pictures/small/13.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-13.jpg",
          title:"Hzone - Admin Template",
          price:"$24.00"
        }

   },
  ];

  TooltipImage7 : any = [
    { src: './assets/images/media/pictures/small/22.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-14.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/21.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-15.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/16.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-16.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/15.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-17.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/14.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-18.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
   { src: './assets/images/media/pictures/small/13.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/small/13.jpg",
          title:"Hzone - Admin Template",
          price:"$24.00"
        }

   },
  ];

  TooltipImage8 : any = [
    { src: './assets/images/media/pictures/small/13.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-14.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/14.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-15.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/15.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-16.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/16.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-17.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/17.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-18.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
   { src: './assets/images/media/pictures/small/18.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/small/13.jpg",
          title:"Hzone - Admin Template",
          price:"$24.00"
        }

   },
   { src: './assets/images/media/pictures/small/19.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-13.jpg",
          title:"Hzone - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/20.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-14.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/21.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-15.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
   { src: './assets/images/media/pictures/small/22.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-16.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/23.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-17.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
   { src: './assets/images/media/pictures/small/24.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-16.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   }
  ];

  TooltipImage9 : any = [
    { src: './assets/images/media/pictures/small/17.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-14.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/16.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-15.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
   { src: './assets/images/media/pictures/small/15.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-16.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
    { src: './assets/images/media/pictures/small/14.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-17.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   },
   { src: './assets/images/media/pictures/small/13.jpg',
      Tooltip :{
          active: false,
          image:"./assets/images/media/pictures/thumb-list/thumb-16.jpg",
          title:"Andora - Admin Template",
          price:"$24.00"
        }

   }
  ];

  ngOnInit(): void {
    const MyWindow  : any = window;
    const counterUp= MyWindow.counterUp;
    const el1 = document.querySelector('.counter1')
    const el2 = document.querySelector('.counter2')
    const el3 = document.querySelector('.counter3')
    const el4 = document.querySelector('.counter4')

    // Start counting, do this on DOM ready or with Waypoints.
    counterUp.default(el1, {
      duration: 2000,
      delay: 16,
    })
    counterUp.default(el2, {
      duration: 2000,
      delay: 16,
    })
    counterUp.default(el3, {
      duration: 2000,
      delay: 16,
    })
    counterUp.default(el4, {
      duration: 2000,
      delay: 16,
    })
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    }
    )
  }

}
