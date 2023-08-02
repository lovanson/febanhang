import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss'],
})
export class CookiesComponent {
  public isCollapsed = true;
  public acceptcookies = true;
  constructor(){
    this.acceptcookies =  localStorage.getItem("Acceptedcookies") ? false : true;
  }

  Acceptedcookies(){
    localStorage.setItem("Acceptedcookies","true");
    this.acceptcookies = false
  }
}
