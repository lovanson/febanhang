import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as L from 'leaflet';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user-profile01',
  templateUrl: './user-profile01.component.html',
  styleUrls: ['./user-profile01.component.scss'],
})
export class UserProfile01Component {
  currentRoute: any;
  urlData: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private modalService: NgbModal
  ) {
    router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.url;
        this.urlData = event.url.split('/');
      });
  }

  map!: L.Map;
  json: any;

  //Basic Map
  options1 = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '',
      }),
    ],
    zoom: 5,
    center: L.latLng(20.5937, 78.9629),
  };

  onMapReady(map: L.Map) {
    this.http.get('assets/maps/leafletmap.json').subscribe((json: any) => {
      console.log(json);
      this.json = json;
      L.geoJSON(this.json).addTo(map);
    });
  }
  markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      // specify the path here
      iconUrl: 'assets/img/marker-icon.png',
      shadowUrl: 'assets/img/marker-shadow.png',
    }),
  };
  currentRate = 4;

  data = [
    {
      src: './assets/images/users/female/18.jpg',
      name: 'Emily Parsons',
      email: 'johan@gmail.com',
      btn: 'Follow',
    },
    {
      src: './assets/images/users/male/1.jpg',
      name: 'Irene Harris',
      email: 'ireneharris@gmail.com',
      btn: 'Follow',
    },
    {
      src: './assets/images/users/female/5.jpg',
      name: 'Lillian Quinn',
      email: 'lilliangore',
      btn: 'Follow',
    },
    {
      src: './assets/images/users/male/2.jpg',
      name: 'Harry Fisher',
      email: 'harryuqt',
      btn: 'Follow',
    },
    {
      src: './assets/images/users/female/3.jpg',
      name: 'Polly Amon',
      email: 'harryuqt@gmail.com',
      btn: 'Follow',
    },
    {
      src: './assets/images/users/male/4.jpg',
      name: 'Paul Molive',
      email: 'harryuqt@gmail.com',
      btn: 'Follow',
    },
    {
      src: './assets/images/users/female/4.jpg',
      name: 'Kenna Pride',
      email: 'harryuqt@gmail.com',
      btn: 'Follow',
    },
    {
      src: './assets/images/users/male/6.jpg',
      name: 'Mark Sunseri',
      email: 'harryuqt@gmail.com',
      btn: 'Follow',
    },
    {
      src: './assets/images/users/female/7.jpg',
      name: 'Anna Sthesia',
      email: 'harryuqt@gmail.com',
      btn: 'Follow',
    },
    {
      src: './assets/images/users/female/2.jpg',
      name: 'Elias Arboleda',
      email: 'harryuqt@gmail.com',
      btn: 'Follow',
    },
  ];

  closeResult = '';

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
}
