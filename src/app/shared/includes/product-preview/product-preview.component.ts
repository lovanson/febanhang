import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent {
  public albums: any[] = [
  {
    src: "./assets/images/media/pictures/small/01.jpg",
    caption: "Image-1"
  },
  {
    src: "./assets/images/media/pictures/small/02.jpg",
    caption: "Image-2"
  },
  {
    src: "./assets/images/media/pictures/small/03.jpg",
    caption: "Image-3"
  },
  {
    src: "./assets/images/media/pictures/small/04.jpg",
    caption: "Image-4"
  },
  {
    src: "./assets/images/media/pictures/small/05.jpg",
    caption: "Image-5"
  },
  {
    src: "./assets/images/media/pictures/small/06.jpg",
    caption: "Image-06"
  },
  {
    src: "./assets/images/media/pictures/small/07.jpg",
    caption: "Image-07"
  },
  {
    src: "./assets/images/media/pictures/small/08.jpg",
    caption: "Image-08"
  },
  {
    src: "./assets/images/media/pictures/small/09.jpg",
    caption: "Image-09"
  },
  {
    src: "./assets/images/media/pictures/small/10.jpg",
    caption: "Image-10"
  },
  {
    src: "./assets/images/media/pictures/small/11.jpg",
    caption: "Image-11"
  },
  {
    src: "./assets/images/media/pictures/small/12.jpg",
    caption: "Image-12"
  },
];

  constructor(private modalService: NgbModal,private _lightbox: Lightbox) {
    // for (let i = 1; i <= 1; i++) {
    //   const src = './assets/images/media/pictures/thumb-list/thumb-2.jpg';
    //   const caption = 'Bioplex - Beauty & Spa Creative Wordpress Template';
    //   const album = {
    //     src: src,
    //     caption: caption
    //   };

    //   this.albums.push(album);
    // }
    // console.log(this.albums);

  }

  openProdect(index: number): void {
    this._lightbox.open(this.albums, index);
  }
}
