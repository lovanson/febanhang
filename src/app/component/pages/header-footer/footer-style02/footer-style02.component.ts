import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-style02',
  templateUrl: './footer-style02.component.html',
  styleUrls: ['./footer-style02.component.scss'],
})
export class FooterStyle02Component {
  constructor() {
    document.querySelector('app-footer')?.classList.add('d-none');

  }
  ngOnDestroy(): void {
    document.querySelector('app-footer')?.classList.remove('d-none');
  }

  ngOnInit(): void {
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    })
  }

  images = [
    './assets/images/users/female/2.jpg',
    './assets/images/users/male/3.jpg',
    './assets/images/users/female/4.jpg',
  ];
}
