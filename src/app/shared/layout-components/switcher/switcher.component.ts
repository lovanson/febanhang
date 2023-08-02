import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwitcherService } from '../../services/switcher.service';
import { Subscription } from 'rxjs';
import * as switcher from './switcher';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
})
export class SwitcherComponent {
  layoutSub: Subscription;
  body = document.querySelector('body');
  @ViewChild('switcher', { static: false }) switcher!: ElementRef;
  constructor(
    public renderer: Renderer2,
    public switcherServic: SwitcherService,
    private modalService: NgbModal
  ) {
    switcher.localStorageBackUp();
    this.layoutSub = switcherServic.changeEmitted.subscribe((value) => {
      if (value) {
        this.renderer.addClass(
          this.switcher.nativeElement.firstElementChild,
          'active'
        );
        this.renderer.setStyle(
          this.switcher.nativeElement.firstElementChild,
          'right',
          '0px'
        );
        value = true;
      } else {
        this.renderer.removeClass(
          this.switcher.nativeElement.firstElementChild,
          'active'
        );
        this.renderer.setStyle(
          this.switcher.nativeElement.firstElementChild,
          'right',
          '-270px'
        );
        value = false;
      }
      document.querySelector('.slide-leftRTL')?.classList.add('d-none');
      document.querySelector('.slide-rightRTL')?.classList.add('d-none');
    });
  }

  ngOnInit(): void {
    // (window as any).dataBsFn()
    switcher.localStorageBackUp();
    switcher.customClickFn();
    switcher.updateChanges();
    // document.querySelector('#myonoffswitch1').checked = true
    if (
      document.body.classList.contains('transparent-theme') ||
      document.body.classList.contains('dark-theme')
    ) {
      // console.log('true');
      const light = document.getElementById(
        'myonoffswitch1'
      ) as HTMLInputElement;
      light.checked = false;
    } else {
      // console.log('false');
      const light = document.getElementById(
        'myonoffswitch1'
      ) as HTMLInputElement;
      light.checked = true;
    }

  }
  reset() {
    const btnlight = document.getElementById(
      'myonoffswitch1'
    ) as HTMLInputElement;
    btnlight.checked = true;
    const defaultMenu = document.getElementById(
      'myonoffswitch3'
    ) as HTMLInputElement;
    defaultMenu.checked = true;
    const ltr = document.getElementById('myonoffswitch54') as HTMLInputElement;
    ltr.checked = true;
    const defaultheader = document.getElementById(
      'myonoffswitch6'
    ) as HTMLInputElement;
    defaultheader.checked = true;

    localStorage.clear();
    const html: any = document.querySelector('html');
    const body = document.querySelector('body');
    html.style = '';
    body?.classList.remove('rtl');
    body?.classList.remove('dark-theme');
    body?.classList.remove('headerstyle3');
    body?.classList.remove('headerstyle2');

    body?.classList.remove('menu-style2');
    body?.classList.remove('menu-style3');
    switcher.updateChanges();
    switcher.checkOptions();
    html.setAttribute('dir', 'ltr');
    const styleId = document.querySelector('#style');
    styleId?.setAttribute(
      'href',
      './assets/plugins/bootstrap/css/bootstrap.min.css'
    );
    document.querySelector('.slide-left')?.classList.add('d-none');
    document.querySelector('.slide-right')?.classList.add('d-none');
    document.querySelector('.slide-leftRTL')?.classList.add('d-none');
    document.querySelector('.slide-rightRTL')?.classList.add('d-none');
    document.querySelector('body')?.classList.add('headerstyle1');
  }

  public color1 = '#623AA2';
  public color2 = '#623AA2';
  public color3 = '#623AA2';
  public color4 = '#623AA2';
  public color13 = '#623AA2';

  public dynamicBgPrimary(data: any): void {
    this.color3 = data;
    const dynamicPrimaryBg = document.querySelectorAll('.color-primary-Bg');

    switcher.dynamicBgPrimaryColor(dynamicPrimaryBg, this.color3);
    localStorage.setItem('Templisttransparent-primary-color', this.color3);
    localStorage.setItem('Templisttransparent-primary-hover', this.color3);
    localStorage.setItem('Templisttransparent-primary-border', this.color3);
    const transparent = document.getElementById(
      'myonoffswitch1'
    ) as HTMLInputElement;
    transparent.checked = true;

    // Adding
    this.body?.classList.add('light-theme');
    // localStorage.setItem('TemplistdarkTheme', 'true');

    // Removing
    // this.body?.classList.remove('dark-theme');
    this.body?.classList.remove('light-theme');
    localStorage.removeItem('TemplistDarkTheme');
    localStorage.removeItem('TemplistLightTheme');
    this.body?.classList.remove('default-header');
    this.body?.classList.remove('headerstyle3');
    this.body?.classList.remove('headerstyle2');

    this.body?.classList.remove('menu-style1');
    this.body?.classList.remove('menu-style2');
    this.body?.classList.remove('menu-style3');
    document
      .querySelector('.app-header')
      ?.classList.add(
        'hor-header',
        'fixed-header',
        'visible-title',
        'stickyClass'
      );

    switcher.updateChanges();
  }

  public dynamicBgSecondary(data: any): void {
    this.color13 = data;
    const dynamicBgSecondary = document.querySelectorAll(
      '.color-secondary-Dark'
    );

    switcher.dynamicSecondaryColor(dynamicBgSecondary, this.color13);
    localStorage.setItem('Templisttransparent-secondary-color', this.color13);
    localStorage.setItem('Templisttransparent-secondary-hover', this.color13);
    localStorage.setItem('Templisttransparent-secondary-border', this.color13);

    // Adding
    this.body?.classList.add('light-theme');
    // localStorage.setItem('TemplistdarkTheme', 'true');

    // Removing
    // this.body?.classList.remove('dark-theme');
    this.body?.classList.remove('light-theme');
    localStorage.removeItem('TemplistDarkTheme');
    localStorage.removeItem('TemplistLightTheme');
    this.body?.classList.remove('default-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('gradient-header');
    this.body?.classList.remove('menu-style1');
    this.body?.classList.remove('menu-style2');
    this.body?.classList.remove('menu-style3');
    document
      .querySelector('.app-header')
      ?.classList.add(
        'hor-header',
        'fixed-header',
        'visible-title',
        'stickyClass'
      );

    localStorage.removeItem('Templistlight-secondary-color');
    localStorage.removeItem('Templistlight-secondary-hover');
    localStorage.removeItem('Templistlight-secondary-border');
    localStorage.removeItem('Templistdark-secondary-color');
    localStorage.removeItem('Templistdark-secondary-hover');
    localStorage.removeItem('Templistdark-secondary-border');
    localStorage.removeItem('Templistdark-body');

    switcher.updateChanges();
  }

  public dynamicBgDarkPrimary(data: any): void {
    document.body.classList.add('dark-theme');

    this.color4 = data;
    const dynamicPrimaryBgDark = document.querySelectorAll('.color-bg-Dark');

    switcher.dynamicBgDarkPrimaryColor(dynamicPrimaryBgDark, this.color4);
    localStorage.setItem('Templisttransparent-bg-color', this.color4);
    const BgDark = document.getElementById(
      'myonoffswitch1'
    ) as HTMLInputElement;
    BgDark.checked = false;
    const transparent = document.getElementById(
      'myonoffswitch2'
    ) as HTMLInputElement;
    transparent.checked = true;

    // Removing
    localStorage.removeItem('TemplistLightTheme');
    this.body?.classList.remove('light-theme');
    this.body?.classList.remove('default-header');
    this.body?.classList.remove('dark-header');
    this.body?.classList.remove('color-header');
    this.body?.classList.remove('menu-style1');
    this.body?.classList.remove('menu-style2');
    this.body?.classList.remove('menu-style3');
    this.body?.classList.remove('gradient-menu');
    document
      .querySelector('.app-header')
      ?.classList.add(
        'hor-header',
        'fixed-header',
        'visible-title',
        'stickyClass'
      );

    localStorage.removeItem('Templistlight-primary-color');
    localStorage.removeItem('Templistlight-primary-hover');
    localStorage.removeItem('Templistlight-primary-border');
    localStorage.removeItem('Templistdark-primary-color');
    localStorage.removeItem('TemplistBgImage');

    switcher.updateChanges();
    const headerStyle = document.getElementById(
      'myonoffswitch6'
    ) as HTMLInputElement;
    headerStyle.checked = false
    const menuStyle = document.getElementById(
      'myonoffswitch3'
    ) as HTMLInputElement;
    menuStyle.checked = false
  }

  toggleSwitcher() {
    this.switcherServic.emitChange(true);
    document.querySelector('body')?.classList.toggle('sidenav-toggled-open');
    if (
      !document
        .querySelector('body')
        ?.classList.contains('sidenav-toggled-open')
    ) {
      const i: any = document.querySelector('.demo_changer');
      i.classList.remove('active');
      i.style = '';
    }
  }

  closeResult = '';
  open(content: unknown) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {}
      );
  }

}
