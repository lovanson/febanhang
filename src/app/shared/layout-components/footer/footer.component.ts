import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() isValid!: unknown;

  constructor() {
    document.querySelector('.footer01')?.classList.add('d-none');
  }
  ngOnDestroy(): void {
    document.querySelector('.footer01')?.classList.remove('d-none');
  }
}
