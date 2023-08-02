import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-style04',
  templateUrl: './footer-style04.component.html',
  styleUrls: ['./footer-style04.component.scss'],
})
export class FooterStyle04Component {
  currentRate = 4
  constructor() {
    document.querySelector('app-footer')?.classList.add('d-none');
  }
  ngOnDestroy(): void {
    document.querySelector('app-footer')?.classList.remove('d-none');
  }

  images = [
    './assets/images/users/female/2.jpg',
    './assets/images/users/male/3.jpg',
    './assets/images/users/female/4.jpg',
  ];
}
