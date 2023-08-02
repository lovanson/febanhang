import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent {
  currentRate = 5;
  showNavigationArrows = false;
  showNavigationIndicators = false;
  active = 1;
  images = [
    {
      src: './assets/images/media/pictures/6.jpg',
    },
    {
      src: './assets/images/media/pictures/7.jpg',
    },
    {
      src: './assets/images/media/pictures/5.jpg',
    },
  ];

  // ngOnInit(): void {
  //   const el1 = document.querySelector('.counter1');
  //   const el2 = document.querySelector('.counter2');
  //   const el3 = document.querySelector('.counter3');

  //   // Start counting, do this on DOM ready or with Waypoints.
  //   counterUp(el1, {
  //     duration: 1000,
  //     delay: 16,
  //   });
  //   counterUp(el2, {
  //     duration: 1000,
  //     delay: 16,
  //   });
  //   counterUp(el3, {
  //     duration: 1000,
  //     delay: 16,
  //   });
  // }

  // ngx owl carousel
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navText: [],
    margin: 20,
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
    nav: false,
  };

  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  ngOnInit(): void {
    const MyWindow  : any = window;
    const counterUp= MyWindow.counterUp;
    const el1 = document.querySelector('.counter1')
    const el2 = document.querySelector('.counter2')
    const el3 = document.querySelector('.counter3')
    const el4 = document.querySelector('.counter4')
    const el5 = document.querySelector('.counter5')
    const el6 = document.querySelector('.counter6')
    const el7 = document.querySelector('.counter7')
    const el8 = document.querySelector('.counter8')

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
    });
    counterUp.default(el5, {
      duration: 2000,
      delay: 16,
    });
    counterUp.default(el6, {
      duration: 2000,
      delay: 16,
    });
    counterUp.default(el7, {
      duration: 2000,
      delay: 16,
    });
    counterUp.default(el8, {
      duration: 2000,
      delay: 16,
    });
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    }
    )
  }
}
