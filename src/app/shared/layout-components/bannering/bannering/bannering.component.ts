import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bannering',
  templateUrl: './bannering.component.html',
  styleUrls: ['./bannering.component.scss'],
})
export class BanneringComponent {
  @Input() title!: string;
  @Input() items!: any[];
  // @Input() active_item!: string;
  // @Input() main_item!: string;

  ngOnInit(): void {
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    }
    )
  }
}
