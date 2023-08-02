import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage03',
  templateUrl: './homepage03.component.html',
  styleUrls: ['./homepage03.component.scss'],
})
export class Homepage03Component {
  ngOnInit(): void {

    const MyWindow  : any = window;
    const counterUp= MyWindow.counterUp;
    const el1 = document.querySelector('.counter1')
    const el2 = document.querySelector('.counter2')
    const el3 = document.querySelector('.counter3')
    const el4 = document.querySelector('.counter4')

    // Start counting, do this on DOM ready or with Waypoints.
    counterUp.default(el1, {
      duration: 2000,
      delay: 16,
    })
    counterUp.default(el2, {
      duration: 2000,
      delay: 16,
    })
    counterUp.default(el3, {
      duration: 2000,
      delay: 16,
    })
    counterUp.default(el4, {
      duration: 2000,
      delay: 16,
    });
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    })
  }
}
