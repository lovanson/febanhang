import { Directive, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Directive({
  selector: '[ScrollTop]'
})
export class ScrollTopDirective {

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  @HostListener('click')
  onClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
