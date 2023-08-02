import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage07',
  templateUrl: './homepage07.component.html',
  styleUrls: ['./homepage07.component.scss'],
})
export class Homepage07Component {
  @ViewChild('content', { static: true })
  content!: TemplateRef<any>;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.modalService.open(this.content);
  }

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
  images = [
    './assets/images/png/banner/b3.png',
    './assets/images/png/banner/b4.png',
    './assets/images/png/banner/b5.png',
  ];

  images1 = [
    './assets/images/png/6.png',
    './assets/images/png/7.png',
    './assets/images/png/8.png',
    './assets/images/png/9.png',
    './assets/images/png/10.png',
  ]

  ngAfterViewInit(): void {
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
    })

  }
}
