import { Component } from '@angular/core';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss']
})
export class MyDashboardComponent {
  files: File[] = [];

  onSelect(event: any) {
   
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
   
    this.files.splice(this.files.indexOf(event), 1);
  }
}
