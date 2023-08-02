/* eslint-disable no-constant-condition */
import { Component } from '@angular/core';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-horizontal-header',
  templateUrl: './horizontal-header.component.html',
  styleUrls: ['./horizontal-header.component.scss'],
})
export class HorizontalHeaderComponent {
  expanded = true;
  constructor(
    public navServices: NavService,
  ) { }

  toggleSidebar() {

    if ((this.navServices.collapseSidebar = true)) {
      document.querySelector('body')?.classList.toggle('active');
    }
    else { this.navServices.collapseSidebar = false;
         document.querySelector('body')?.classList.remove('active');
    }
  }
}
