import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BehaviorSubject,
  debounceTime,
  fromEvent,
  Subject,
  takeUntil,
} from 'rxjs';

export interface Menu {
  headTitle?: string;
  headTitle2?: string;
  path?: unknown;
  title?: string;
  icon?: string;
  type?: string;
  badgeValue?: string;
  badgeClass?: string;
  active?: boolean;
  selected?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  Menusub?: boolean;
  target?: boolean;
  items?: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class NavService {
  [x: string]: any;

  private unsubscriber: Subject<unknown> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event:any) => {
        this.collapseSidebar = true;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next;
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    //home
    {
      title: 'Home',
      selected: false,
      icon: 'home',
      type: 'sub',
      Menusub: true,
      active: false,
      children: [
        {
          path: '/home/home-page01',
          title: 'Home Page 01',
          type: 'link',
          selected: false,
        }
      ],
    },
    //widgets
    {
      title: 'widgets',
      selected: false,
      icon: 'box',
      type: 'link',
      Menusub: false,
      active: false,
      children: [
        {
          path: '/widgets/widgets',
          icon: 'zap',
          title: 'Widgets',
          type: 'external',
        },
      ],
    },
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
