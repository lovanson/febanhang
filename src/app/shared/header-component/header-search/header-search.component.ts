import { Component } from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss'],
})
export class HeaderSearchComponent {
  items = [
    {
      title: 'Commented on your post',
      status: '3 hours ago',
    },
    {
      title: 'New User Registered.',
      status: '1 day ago',
    },
    {
      title: 'Someone likes our posts',
      status: '3 hours ago',
    },
    {
      title: 'New file has been uploaded',
      status: '3 hours ago',
    },
    {
      title: 'Commented on your post',
      status: '3 hours ago',
    },
    {
      title: 'System alert',
      status: '3 hours ago',
    },
    {
      title: 'Server Rebooted',
      status: '3 hours ago',
    },
    {
      title: 'Completed One task',
      status: '3 hours ago',
    },
  ];
}
