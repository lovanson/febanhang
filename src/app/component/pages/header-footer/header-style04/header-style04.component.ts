import { Component } from '@angular/core';

@Component({
  selector: 'app-header-style04',
  templateUrl: './header-style04.component.html',
  styleUrls: ['./header-style04.component.scss'],
})
export class HeaderStyle04Component {
  scrolled = false;
  ngOnInit(): void {
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    })
  }
}
