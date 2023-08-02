import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss'],
})
export class BlogGridComponent {
  blogdata = [
    {
      src: './assets/images/media/9.jpg',
      title: 'Itaque earum sapiente',
      date: 'Dec-03-2020',
      comment: '4 Comments',
      summary:
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      btn: 'Read More',
    },
    {
      src: './assets/images/media/10.jpg',
      title: 'Certain circumstances claims',
      date: 'nov-06-2020',
      comment: '8 Comments',
      summary:
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      btn: 'Read More',
    },
    {
      src: './assets/images/media/12.jpg',
      title: 'Libero tempore soluta',
      date: 'Nov-10-2020',
      comment: '6 Comments',
      summary:
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      btn: 'Read More',
    },
    {
      src: './assets/images/media/13.jpg',
      title: 'At accusamus iusto',
      date: 'Nov-04-2020',
      comment: '7 Comments',
      summary:
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      btn: 'Read More',
    },
    {
      src: './assets/images/media/14.jpg',
      title: 'Sed perspiciatis omnis',
      date: 'Dec-10-2020',
      comment: '2 Comments',
      summary:
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      btn: 'Read More',
    },
    {
      src: './assets/images/media/16.jpg',
      title: 'Excepteur occaecat cupidatat',
      date: 'Dec-11-2020',
      comment: '8 Comments',
      summary:
        'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text',
      btn: 'Read More',
    },
  ];
}
