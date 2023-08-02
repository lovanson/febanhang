/* eslint-disable no-constant-condition */
import { Component, HostListener, OnInit } from '@angular/core';
import { NavService } from '../../services/nav.service';
import {  Subscription, fromEvent } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-horizontal-main',
  templateUrl: './horizontal-main.component.html',
  styleUrls: ['./horizontal-main.component.scss'],
})
export class HorizontalMainComponent implements OnInit {
  constructor(private navServices: NavService, public router:Router) {
  }
  public menuItems!: any;
  public menuItems1!: any;
  public menuitemsSubscribe$!: Subscription;

  ngOnInit(): void {

    document.querySelector(".horizontal-overlapbg")?.addEventListener("click",()=>{
      document.body.classList.remove("active")
    })
    this.menuitemsSubscribe$ = this.navServices.items.subscribe((items) => {
      this.menuItems = items;
    });
    this.ParentActive()
    this.router.events.subscribe((event)=>{
      if (event instanceof NavigationEnd) {
        this.ParentActive()
      }
    })
  }

  toggleNavActive(element: any) {
    this.menuItems.map((element1:any)=>{
      if(element.title != element1.title){
        element1.active = false
      }
    })
    if (window.innerWidth <= 991) {
      element.active = !element.active;
      this.menuItems.map((MobileElement:any)=>{
        if(MobileElement.children){
          MobileElement.children.map((childEle:any)=>{
            if(childEle.active && MobileElement.type != 'mega menu' && !childEle.children.filter((ele:any)=>ele.path == location.pathname)[0]){
              MobileElement.active = true
            }
          })
        }
      })
    }
  }

  ParentActive(){
    this.menuItems.map((element:any)=>{
      if(element.children){
        element.active = false
        element.selected = false
        element.children.map((ele:any)=>{
          if(ele.path == this.router.url){
            element.active = true
            element.selected = true
          }
          if(ele.children){

            ele.active = false
            ele.children.map((child1:any)=>{
              if(child1.path == this.router.url){
                element.active = true
                element.selected = true
                ele.active = true
              }
            })
          }
        })
      }
    })
  }
}
