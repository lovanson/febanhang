import { Component, HostListener } from '@angular/core';
import { Menu, NavService } from 'src/app/shared/services/nav.service';
import { SwitcherService } from 'src/app/shared/services/switcher.service';

@Component({
  selector: 'app-headerstyle-layout',
  templateUrl: './headerstyle-layout.component.html',
  styleUrls: ['./headerstyle-layout.component.scss'],
})
export class HeaderstyleLayoutComponent {
  public menuItems!: Menu[];
  constructor(
    public SwitcherService: SwitcherService,
    public navServices: NavService
  ) {
    this.navServices.items.subscribe((menuItems: any) => {
      this.menuItems = menuItems;
    });
  }

  ngOnInit() {
    document.querySelector('.slide-leftRTL')?.classList.add('d-none');
    document.querySelector('.slide-rightRTL')?.classList.add('d-none');
  }

  ngOnDestroy() {
    location.reload();
  }

  toggleSwitcherBody() {
    this.SwitcherService.emitChange(false);
  }
  scrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 70;
  }
}
