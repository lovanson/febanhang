import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-style01',
  templateUrl: './footer-style01.component.html',
  styleUrls: ['./footer-style01.component.scss']
})
export class FooterStyle01Component {
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
