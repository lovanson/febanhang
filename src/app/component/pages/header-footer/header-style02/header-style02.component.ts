import { Component } from '@angular/core';

@Component({
  selector: 'app-header-style02',
  templateUrl: './header-style02.component.html',
  styleUrls: ['./header-style02.component.scss'],
})
export class HeaderStyle02Component {
  scrolled = false;

  constructor() {
    document.querySelector('.header-search')?.classList.add('d-none');

    const topbarcenter: any = document.querySelector('#centerlog');
    topbarcenter.firstChild.classList.remove("col-xl-8")
    topbarcenter.firstChild.classList.add("col-xl-4")
    const ImageLog = document.createElement('div');
    ImageLog.className = 'clearfix text-center col-xl-4 col-lg-4 col-sm-4 col-7 header-style-logo-2';
    ImageLog.id = 'desktoplogo';
    ImageLog.innerHTML = `
    <div class="header-search-logo header-style-2 d-none d-flex justify-content-center">
										<div class="desktoplogo">
											<a href="/home/home-page01"><img src="./assets/images/brand/logo1.png" alt="" class="mt-0"></a>
										</div>
									</div>`;

    const ImageLogDark = document.createElement('div');
    ImageLogDark.className = 'desktoplogo-1 col-xl-4 col-lg-4 col-sm-4 col-7 text-center';
    ImageLogDark.id = 'desktoplogo-1';
    ImageLogDark.innerHTML = `
    <a href="/home/home-page01">
    <img src="./assets/images/brand/logo.png" alt="">
    </a>
    `;

    topbarcenter.insertBefore(ImageLog, topbarcenter.children[1]);
    topbarcenter.insertBefore(ImageLogDark, topbarcenter.children[1]);

    topbarcenter.firstChild.classList.add("col-xl-4")
    topbarcenter.firstChild.classList.remove("col-xl-8")
    topbarcenter.firstChild.querySelectorAll("ul")[1].children[1].classList.add("border-end")
    topbarcenter.firstChild.querySelectorAll("ul")[1].children[0].classList.add("d-none")
    topbarcenter.firstChild.querySelectorAll("ul")[1].children[2].classList.add("d-none")
    topbarcenter.firstChild.classList.add("col-lg-4")
    topbarcenter.firstChild.classList.remove("col-lg-8")

    if(window.innerWidth <= 991 ){
      document.querySelector('#desktoplogo')?.classList.add("d-none")
    }

    window.addEventListener("resize", ()=>{
      if(window.innerWidth <= 991 ){
        document.querySelector('#desktoplogo')?.classList.add("d-none")
      }
      if(window.innerWidth > 991){
        document.querySelector('#desktoplogo')?.classList.remove("d-none")
      }
    });
  }
  ngOnDestroy(): void {
    document.querySelector('.header-search')?.classList.remove('d-none');

    document.getElementById('desktoplogo')?.remove();
    document.getElementById('desktoplogo-1')?.remove();
    const topbarcenter: any = document.querySelector('#centerlog');
    topbarcenter.firstChild.classList.remove("col-xl-4")
    topbarcenter.firstChild.classList.add("col-xl-8")
    topbarcenter.firstChild.querySelectorAll("ul")[1].children[1].classList.remove("border-end")
    topbarcenter.firstChild.querySelectorAll("ul")[1].children[0].classList.remove("d-none")
    topbarcenter.firstChild.querySelectorAll("ul")[1].children[2].classList.remove("d-none")
    topbarcenter.firstChild.classList.remove("col-lg-4")
    topbarcenter.firstChild.classList.add("col-lg-8")
  }

  ngOnInit(): void {
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    })
  }
}
