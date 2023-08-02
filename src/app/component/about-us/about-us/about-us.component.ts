import { Component } from '@angular/core';
// import counterUp from 'counterup2';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  about: any;
  timerInfo = '';
  constructor() {

  }

  ngOnInit(): void {
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    }
    )
    const MyWindow  : any = window;
    const counterUp= MyWindow.counterUp;
    const el1 = document.querySelector('.counter1');
    const el2 = document.querySelector('.counter2');
    const el3 = document.querySelector('.counter3');
    const el4 = document.querySelector('.counter4');

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
    })

  }

  onComplete(data: any) {
    data.elt.nativeElement.classList.add('muteCount');
  }

  // onTick(data: TimeInterface) {
  //   this.timerInfo = '';
  // }

  onStart(data: any) {
    // console.log('Timer started.');
  }
}
