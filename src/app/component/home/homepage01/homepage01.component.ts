import { Component, ElementRef, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import counterUp from 'counterup2'

@Component({
  selector: 'app-homepage01',
  templateUrl: './homepage01.component.html',
  styleUrls: ['./homepage01.component.scss'],
})
export class Homepage01Component {

  // ngx owl carousel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 20,
    autoWidth: false,
    autoHeight: false,
    navSpeed: 100,
    navText: [
      '<span aria-label="Previous">‹</span>',
      '<span aria-label="Next">›</span>',
    ],
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
    nav: true,
  };

  images = [
    './assets/landing/web/1.png',
    './assets/landing/web/2.png',
    './assets/landing/web/3.png',
    './assets/landing/web/4.png',
    './assets/landing/web/5.png',
    './assets/landing/web/6.png',
  ];

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
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
    })
  }

}
