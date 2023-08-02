import { Component } from '@angular/core';

@Component({
  selector: 'app-bannering3',
  templateUrl: './bannering3.component.html',
  styleUrls: ['./bannering3.component.scss']
})
export class Bannering3Component {
  ngOnInit(): void {
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    })
  }
}
