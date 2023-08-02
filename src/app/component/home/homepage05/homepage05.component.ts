import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage05',
  templateUrl: './homepage05.component.html',
  styleUrls: ['./homepage05.component.scss']
})
export class Homepage05Component {
  ngOnInit(): void {
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    })
  }
}
