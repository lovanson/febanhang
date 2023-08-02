import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent {
  InvoiceData = [
    {
      id: '#INV-348',
      Category: '	HTML Template',
      Date: '07-02-2020',
      Price: '$89',
      DeuDate: '17-12-2020',
      Action: ['btn btn-danger', 'btn btn-info'],
    },
    {
      id: '#INV-254',
      Category: '	Worpress Template',
      Date: '03-04-2020',
      Price: '$245',
      DeuDate: '13-05-2020',
      Action: ['btn btn-danger', 'btn btn-info'],
    },
    {
      id: '#INV-154',
      Category: 'Angular Template',
      Date: '07-02-2020',
      Price: '$459',
      DeuDate: '19-07-2020',
      Action: ['btn btn-danger', 'btn btn-info'],
    },
    {
      id: '#INV-354',
      Category: 'PHP Template',
      Date: '07-02-2020',
      Price: '$63',
      DeuDate: '17-12-2020',
      Action: ['btn btn-danger', 'btn btn-info'],
    },
    {
      id: '#INV-128',
      Category: 'PSD Template',
      Date: '17-03-2020',
      Price: '$79',
      DeuDate: '17-12-2020',
      Action: ['btn btn-danger', 'btn btn-info'],
    },
    {
      id: '#INV-269',
      Category: 'HTML Template ',
      Date: '19-08-2020',
      Price: '$69',
      DeuDate: '13-02-2020',
      Action: ['btn btn-danger', 'btn btn-info'],
    },
  ];

  DeleteClick(InvoiceData: unknown) {
    const filterData = this.InvoiceData.filter((ele) => {
      return ele.id != InvoiceData;
    });
    this.InvoiceData = filterData;
  }
  isShowDiv = false;

  OnClick() {
    this.isShowDiv = !this.isShowDiv;
  }
}
