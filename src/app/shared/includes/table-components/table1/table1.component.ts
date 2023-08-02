import { Component } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss'],
})
export class Table1Component {
  data = [
    {
      src: './assets/images/media/pictures/small/01.jpg',
      title: 'HTML Template',
      date: 'Feb-21-2020',
      tag: 'Admin',
      price: '$15',
      status: 'Published',
      action: '',
    },
    {
      src: './assets/images/media/pictures/small/02.jpg',
      title: 'Wordpress Template',
      date: 'Oct-23-2019',
      tag: 'Listing',
      price: '$35',
      status: 'hidden',
      action: '',
    },
    {
      src: './assets/images/media/pictures/small/03.jpg',
      title: 'Angular Template',
      date: ' Nov-15-2019',
      tag: 'Beauty',
      price: '$22',
      status: 'Published',
      action: '',
    },
    {
      src: './assets/images/media/pictures/small/05.jpg',
      title: 'HTML Template',
      date: 'Feb-21-2020',
      tag: 'Admin',
      price: '$25',
      status: 'Published',
      action: '',
    },
    {
      src: './assets/images/media/pictures/small/08.jpg',
      title: 'Wordpress Template',
      date: 'Oct-23-2019',
      tag: 'Listing',
      price: '$18',
      status: 'hidden',
      action: '',
    },
    {
      src: './assets/images/media/pictures/small/04.jpg',
      title: 'PHP Template',
      date: 'Nov-25-2019',
      tag: 'Business',
      price: '$62',
      status: 'Published',
      action: '',
    },
    {
      src: './assets/images/media/pictures/small/06.jpg',
      title: 'Andora & Admin WebApp Template',
      date: 'Nov-22-2017',
      tag: 'HTML',
      price: '$77',
      status: 'Published',
      action: '',
    },
    {
      src: './assets/images/media/pictures/small/09.jpg',
      title: 'PSD Template',
      date: 'Dec-03-2018',
      tag: 'Ecommerce',
      price: '$62',
      status: 'Published',
      action: '',
    },
  ];
}
