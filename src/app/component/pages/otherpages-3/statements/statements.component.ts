import { Component } from '@angular/core';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss'],
})
export class StatementsComponent {
  Statamentdata = [
    {
      id: '#89345',
      Category: '	HTML Template',
      Date: '07-02-2020',
      author: ' Lily',
      type: 'Purchase',
      Price: '$49',
      Action: 'pending',
    },
    {
      id: '#92481',
      Category: '	Worpress Template',
      Date: '03-04-2020',
      author: ' Gavin',
      type: 'Sale',
      Price: '$54',
      Action: 'Paid',
    },
    {
      id: '#29381',
      Category: 'Angular Template',
      Date: '07-02-2020',
      author: ' Piers',
      type: 'credit',
      Price: '$24',
      Action: 'Paid',
    },
    {
      id: '#4570',
      Category: 'PHP Template',
      Date: '07-02-2020',
      author: 'Emily',
      type: 'withdraw',
      Price: '$48',
      Action: 'pending',
    },
    {
      id: '#72356',
      Category: 'PSD Template',
      Date: '17-03-2020',
      author: 'Jessica',
      type: 'Purchase',
      Price: '$37',
      Action: 'Paid',
    },
    {
      id: '#72356',
      Category: 'HTML Template ',
      Date: '27-08-2020',
      author: 'John',
      type: 'Sale',
      Price: '$50',
      Action: 'pending',
    },
    {
      id: '#45874',
      Category: 'Angular Template ',
      Date: '19-08-2020',
      author: 'Eric',
      type: 'Purchase',
      Price: '$38',
      Action: 'pending',
    },
    {
      id: '#84571',
      Category: 'PSD Template ',
      Date: '24-08-2020',
      author: 'Butler',
      type: 'Purchase',
      Price: '$47',
      Action: 'pending',
    },
  ];
}
