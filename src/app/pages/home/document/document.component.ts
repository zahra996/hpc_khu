import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import{DocumentModel} from 'src/app/shared/models/document-model';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
documents : DocumentModel[]=[];
  constructor() { }

  ngOnInit(): void {
    this.documents = [
      {Id: 1, ImgPath: 'assets/images/card-image.png',ImgAlt: 'card-image', Title: 'Test title',Kind:'video' },
      {Id: 2, ImgPath: 'assets/images/card-image.png',ImgAlt: 'card-image', Title: 'Test title',Kind:'article' },
      {Id: 3, ImgPath: 'assets/images/card-image.png',ImgAlt: 'card-image', Title: 'Test title', Kind:'video'},
      {Id: 4, ImgPath: 'assets/images/card-image.png',ImgAlt: 'card-image', Title: 'Test title',Kind:'video' },
      {Id: 5, ImgPath: 'assets/images/card-image.png',ImgAlt: 'card-image', Title: 'Test title',Kind:'article' },
      {Id: 6, ImgPath: 'assets/images/card-image.png',ImgAlt: 'card-image', Title: 'Test title', Kind:'article'},
    ];
  }
  customOptions: OwlOptions = {
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      960: {
        items: 4
      }
    },
    navText: ['<img src="./assets/icons/prev.svg" >', '<img src="./assets/icons/next.svg" >'],
  }

}
