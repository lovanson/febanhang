import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage02',
  templateUrl: './homepage02.component.html',
  styleUrls: ['./homepage02.component.scss'],
})
export class Homepage02Component {
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
    navText: ['', ''],
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

  images = [
    './assets/landing/web/1.png',
    './assets/landing/web/2.png',
    './assets/landing/web/3.png',
    './assets/landing/web/4.png',
    './assets/landing/web/5.png',
    './assets/landing/web/6.png',
  ];

  ngOnInit(): void {
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    })

  }
}
