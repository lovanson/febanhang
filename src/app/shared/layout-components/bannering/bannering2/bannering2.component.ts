import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bannering2',
  templateUrl: './bannering2.component.html',
  styleUrls: ['./bannering2.component.scss'],
})
export class Bannering2Component {
  @Input() title!: string;
  @Input() items!: any[];
  // @Input() active_item!: string;
  // @Input() main_item!: string;
  ngOnInit(): void {
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    })
  }
}
