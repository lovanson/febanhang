import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header-style01',
  templateUrl: './header-style01.component.html',
  styleUrls: ['./header-style01.component.scss'],
})
export class HeaderStyle01Component {
  public RTLState = document.body.classList.contains("rtl") ? true : false
  constructor() {
    document.querySelector('.header-style')?.classList.add('header-style1');
    document.querySelector('.header-style')?.classList.remove('header-style');

    const horizontalMainWrapper: any = document.querySelector(
      '#customJsIcon'
    );
    const ImageLog = document.createElement('div');
    ImageLog.className = 'desktoplogo headerlogo-1';
    ImageLog.id = 'desktoplogo';
    ImageLog.innerHTML = `
    <a href="/home/home-page01">
    <img src="./assets/images/brand/logo1.png" alt="">
    </a>`;

    const ImageLogDark = document.createElement('div');
    ImageLogDark.className = 'desktoplogo-1';
    ImageLogDark.id = 'desktoplogo-1';
    ImageLogDark.innerHTML = `
    <a href="/home/home-page01">
    <img src="./assets/images/brand/logo.png" alt="">
    </a>
    `;

    horizontalMainWrapper.appendChild(ImageLog);
    horizontalMainWrapper.appendChild(ImageLogDark);

    document.querySelector('.header-search')?.classList.add('d-none');

    // carousel Changing settings
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
        }
      })
    })

    document.querySelector(".horizontal-main")?.classList.add("ngheader-styles")
  }

  ngOnDestroy(): void {
    document.getElementById('desktoplogo')?.remove();
    document.getElementById('desktoplogo-1')?.remove();
    document.querySelector('.header-style1')?.classList.add('header-style');
    document.querySelector('.header-style1')?.classList.remove('header-style1');
    document.querySelector('.header-search')?.classList.remove('d-none');
    document.querySelector(".horizontal-main")?.classList.remove("ngheader-styles")
  }

  scrolled: unknown;

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

  ngOnInit(): void {
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    })
  }
}
