import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-style03',
  templateUrl: './footer-style03.component.html',
  styleUrls: ['./footer-style03.component.scss'],
})
export class FooterStyle03Component {
  currentRate = 4
  constructor() {
    document.querySelector('app-footer')?.classList.add('d-none');
  }

  images = [
    './assets/images/users/female/2.jpg',
    './assets/images/users/male/3.jpg',
    './assets/images/users/female/4.jpg',
  ];

  ngOnInit(): void {
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    }
    )

  }
  ngOnDestroy(): void {
    document.querySelector('app-footer')?.classList.remove('d-none');
  }
}
