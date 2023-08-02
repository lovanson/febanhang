import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent {
  public albums: any[] = [];

  constructor(private modalService: NgbModal,private _lightbox: Lightbox) {
    for (let i = 1; i <= 1; i++) {
      const src = './assets/images/media/pictures/thumb-list/thumb-2.jpg';
      const caption = 'Bioplex - Beauty & Spa Creative Wordpress Template';
      const album = {
        src: src,
        caption: caption
      };

      this.albums.push(album);
    }
    console.log(this.albums);

  }

  openProdect(index: number): void {
    this._lightbox.open(this.albums, index);
  }
}
