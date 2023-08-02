import { Component, HostListener } from '@angular/core';
import { Menu, NavService } from 'src/app/shared/services/nav.service';
import { SwitcherService } from 'src/app/shared/services/switcher.service';
@Component({
  selector: 'app-header-style03',
  templateUrl: './header-style03.component.html',
  styleUrls: ['./header-style03.component.scss'],
})
export class HeaderStyle03Component {
  public menuItems!: Menu[];
  constructor(
    public SwitcherService: SwitcherService,
    public navServices: NavService
  ) {
    this.navServices.items.subscribe((menuItems: any) => {
      this.menuItems = menuItems;
    });

    document.querySelector('.header-search')?.classList.add('d-none');
    document.querySelector('.socials')?.classList.add('d-none');

    if(window.innerWidth <= 991){
      document.querySelector('.socials')?.classList.remove('d-none');
    }

    const topbarleft: any = document.querySelector('#leftlogo');

    const ImageLog = document.createElement('div');
    ImageLog.className = 'header-search-logo d-none d-lg-block';
    ImageLog.id = 'desktoplogo';
    ImageLog.innerHTML = `
    <div class="desktoplogo">
    <a href="/home/home-page01"><img src="./assets/images/brand/logo1.png" alt="" class="mt-0" /></a>
    </div>
    <div class="desktoplogo-1">
        <a href="/home/home-page01"><img src="./assets/images/brand/logo.png" alt="" class="mt-0" /></a>
    </div>
    `;

    window.addEventListener("resize", ()=>{
      if(window.innerWidth <= 991 && document.querySelector('.socials')?.classList.contains("d-none")){
        document.querySelector('.socials')?.classList.remove("d-none")
      }
      if(window.innerWidth > 991){
        document.querySelector('.socials')?.classList.add("d-none")
      }
    });

    topbarleft.appendChild(ImageLog);
  }

  ngOnDestroy() {
    document.querySelector('.header-search')?.classList.remove('d-none');
    document.querySelector('.socials')?.classList.remove('d-none');
    document.getElementById('desktoplogo')?.remove();
  }

  toggleSwitcherBody() {
    this.SwitcherService.emitChange(false);
  }
  scrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 70;
  }

  ngOnInit(): void {
    document.querySelectorAll(".custon-bg-img")?.forEach((elememt)=>{
      const myElement = elememt as HTMLInputElement
      myElement.style.background = `url(${elememt.getAttribute("data-bs-image-src")}) center center`
    })
  }
}
