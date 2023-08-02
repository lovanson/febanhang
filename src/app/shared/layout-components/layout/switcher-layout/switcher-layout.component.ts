import { Component, HostListener } from '@angular/core';
import { SwitcherService } from 'src/app/shared/services/switcher.service';

@Component({
  selector: 'app-switcher-layout',
  templateUrl: './switcher-layout.component.html',
  styleUrls: ['./switcher-layout.component.scss'],
})
export class SwitcherLayoutComponent {
  constructor(public SwitcherService: SwitcherService) { }
  
  ngOnDestroy() {
    location.reload();
  }
  
  scrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 70;
  }
}
