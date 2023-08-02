import { Component, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage09',
  templateUrl: './homepage09.component.html',
  styleUrls: ['./homepage09.component.scss'],
})
export class Homepage09Component {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    nav: true,
  };

  images1 = [
    './assets/images/banners/banner7.jpg',
    './assets/images/banners/banner8.jpg',
    './assets/images/banners/banner9.jpg',
  ];

  ngOnInit(): void {
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    })
    document.querySelector(".header-main")?.classList.add("d-none")
  }

  ngOnDestroy(): void {
    document.querySelector(".header-main")?.classList.remove("d-none")
  }
  

  scrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 70;
  }
}
