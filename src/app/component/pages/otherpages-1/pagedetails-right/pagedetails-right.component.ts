import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagedetails-right',
  templateUrl: './pagedetails-right.component.html',
  styleUrls: ['./pagedetails-right.component.scss'],
})
export class PagedetailsRightComponent {
  currentRate = 4;

  data = [
    {
      src: './assets/images/png/1.png',
      name: 'Marco Theme',
      date: '28 Dec 2019',
      summery:
        ' Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
    {
      src: './assets/images/png/2.png',
      name: 'Lisa Theme',
      date: '14 Dec 2019',
      summery:
        ' Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
    {
      src: './assets/images/png/3.png',
      name: 'Marshall Theme',
      date: '18 Dec 2019',
      summery:
        ' Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
    {
      src: './assets/images/png/4.png',
      name: 'Chapman Theme',
      date: '30 Dec 2019',
      summery:
        ' Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
    {
      src: './assets/images/png/5.png',
      name: '	Robic Theme',
      date: '20 Dec 2019',
      summery:
        ' Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.',
    },
  ];

  constructor(private modalService: NgbModal) {}

  closeResult = '';

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
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
