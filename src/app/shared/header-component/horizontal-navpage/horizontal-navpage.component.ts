import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-horizontal-navpage',
  templateUrl: './horizontal-navpage.component.html',
  styleUrls: ['./horizontal-navpage.component.scss'],
})
export class HorizontalNavpageComponent {
  constructor(private modalService: NgbModal) {}

  images = [
    './assets/images/png/6.png',
    './assets/images/png/7.png',
    './assets/images/png/8.png',
    './assets/images/png/9.png',
    './assets/images/png/10.png',
  ];

  closeResult = '';

  open(content2: any) {
    this.modalService
      .open(content2, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
}
