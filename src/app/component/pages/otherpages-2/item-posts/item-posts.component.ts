import { Component } from '@angular/core';

@Component({
  selector: 'app-item-posts',
  templateUrl: './item-posts.component.html',
  styleUrls: ['./item-posts.component.scss']
})
export class ItemPostsComponent {
files: File[] = [];

onSelect(event:any) {
  this.files.push(...event.addedFiles);
}

onRemove(event:any) {
  this.files.splice(this.files.indexOf(event), 1);
}

}
