import { Component } from '@angular/core';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss'],
})
export class CartsComponent {
  productdata = [
    {
      id: '1',
      Product: './assets/images/media/pictures/small/01.jpg',
      Title: 'HTML Templates',
      counter : 0,
      Price: '$15',
      Action: ['btn btn-danger', 'btn btn-primary'],
    },
    {
      id: '2',
      Product: './assets/images/media/pictures/small/02.jpg',
      Title: 'Wordpress Template',
      Price: '$32',
      counter : 0,
      Action: ['btn btn-danger', 'btn btn-primary'],
    },
    {
      id: '3',
      Product: './assets/images/media/pictures/small/03.jpg',
      Title: 'Angular  Templates',
      Price: '$45',
      counter : 0,
      Action: ['btn btn-danger', 'btn btn-primary'],
    },
  ];

  DeleteClick(productdata: unknown) {
    const filterData = this.productdata.filter((ele) => {
      return ele.Product != productdata;
    });
    this.productdata = filterData;
  }
  isShowDiv = false;

  public increment(num: any): void {
    num.counter = num.counter + 1

  }
  public decrement(num: any): void {
    if (num.counter > 0) {
      num.counter = num.counter - 1;
    }
  }

  // increment() {
  //   this.counter++;
  // }
  // decrement() {
  //   this.counter--;
  // }
}
