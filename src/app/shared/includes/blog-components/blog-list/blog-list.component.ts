import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  bloglistdata = [
    {
      src: './assets/images/media/9.jpg',
      title: 'Itaque earum sapiente',
      date: 'Dec-03-2020',
      name: 'Nissy Sten',
      comment: '4 Comments',
      summary:
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      btn: 'Read More',
    },
    {
      src: './assets/images/media/10.jpg',
      title: 'Certain circumstances claims',
      date: 'nov-06-2020',
      name: 'Nissy Sten',
      comment: '8 Comments',
      summary:
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      btn: 'Read More',
    },
    {
      src: './assets/images/media/12.jpg',
      title: 'Libero tempore soluta',
      date: 'Nov-10-2020',
      name: 'Nissy Sten',
      comment: '6 Comments',
      summary:
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      btn: 'Read More',
    },
    {
      src: './assets/images/media/13.jpg',
      title: 'At accusamus iusto',
      date: 'Nov-04-2020',
      name: 'Nissy Sten',
      comment: '7 Comments',
      summary:
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      btn: 'Read More',
    },
    {
      src: './assets/images/media/14.jpg',
      title: 'Sed perspiciatis omnis',
      date: 'Dec-10-2020',
      name: 'Nissy Sten',
      comment: '2 Comments',
      summary:
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      btn: 'Read More',
    },
    {
      src: './assets/images/media/16.jpg',
      title: 'Excepteur occaecat cupidatat',
      date: 'Dec-11-2020',
      name: 'Nissy Sten',
      comment: '8 Comments',
      summary:
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      btn: 'Read More',
    },
  ];
}
