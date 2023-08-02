import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bannering1',
  templateUrl: './bannering1.component.html',
  styleUrls: ['./bannering1.component.scss'],
})
export class Bannering1Component {
  @Input() title!: string;
  @Input() items!: any[];
  ngOnInit(): void {
    // (window as any).dataBsFn()
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    })
  }
}
