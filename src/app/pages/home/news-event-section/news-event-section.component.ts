import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/shared/models/news-model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EventModel } from 'src/app/shared/models/event-model';
@Component({
  selector: 'app-news-event-section',
  templateUrl: './news-event-section.component.html',
  styleUrls: ['./news-event-section.component.scss']
})
export class NewsEventSectionComponent implements OnInit {

  Titles = ['News', 'Event'];
  selectedTitle: any;
  // News List
  news: NewsModel[] = [];

  // Event List
  event: EventModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.selectedTitle = this.Titles[0];
    
    this.news = [
      {Id: 1, ImgPath: 'assets/images/card-image.png',ImgAlt: 'card-image', Title: 'Test title', Content: 'Incidunt deleniti modi nobis ipsum nesciunt harum iusto aspernatur ipsam? ',Date: '13 July 2021'},
      {Id: 2, ImgPath: 'assets/images/card-image.png',ImgAlt: 'card-image', Title: 'Test title', Content: 'Incidunt deleniti modi nobis ipsum nesciunt harum iusto aspernatur ipsam? ',Date: '13 July 2021'},
      {Id: 3, ImgPath: 'assets/images/card-image.png',ImgAlt: 'card-image', Title: 'Test title', Content: 'Incidunt deleniti modi nobis ipsum nesciunt harum iusto aspernatur ipsam? ',Date: '13 July 2021'},
      {Id: 4, ImgPath: 'assets/images/card-image.png',ImgAlt: 'card-image', Title: 'Test title', Content: 'Incidunt deleniti modi nobis ipsum nesciunt harum iusto aspernatur ipsam? ',Date: '13 July 2021'},
      {Id: 5, ImgPath: 'assets/images/card-image.png',ImgAlt: 'card-image', Title: 'Test title', Content: 'Incidunt deleniti modi nobis ipsum nesciunt harum iusto aspernatur ipsam? ',Date: '13 July 2021'},
      {Id: 6, ImgPath: 'assets/images/card-image.png',ImgAlt: 'card-image', Title: 'Test title', Content: 'Incidunt deleniti modi nobis ipsum nesciunt harum iusto aspernatur ipsam? ',Date: '13 July 2021'},
    ];

    this.event = [
      {Id: 1, ImgPath: 'assets/images/card-image.jpg',ImgAlt: 'card-image', Title: 'Test title', Content: 'Incidunt deleniti modi nobis ipsum nesciunt harum iusto aspernatur ipsam? ',Date: '13 July 2021'},
      {Id: 2, ImgPath: 'assets/images/card-image.jpg',ImgAlt: 'card-image', Title: 'Test title', Content: 'Incidunt deleniti modi nobis ipsum nesciunt harum iusto aspernatur ipsam? ',Date: '13 July 2021'},
      {Id: 3, ImgPath: 'assets/images/card-image.jpg',ImgAlt: 'card-image', Title: 'Test title', Content: 'Incidunt deleniti modi nobis ipsum nesciunt harum iusto aspernatur ipsam? ',Date: '13 July 2021'},
      {Id: 4, ImgPath: 'assets/images/card-image.jpg',ImgAlt: 'card-image', Title: 'Test title', Content: 'Incidunt deleniti modi nobis ipsum nesciunt harum iusto aspernatur ipsam? ',Date: '13 July 2021'},
      {Id: 5, ImgPath: 'assets/images/card-image.jpg',ImgAlt: 'card-image', Title: 'Test title', Content: 'Incidunt deleniti modi nobis ipsum nesciunt harum iusto aspernatur ipsam? ',Date: '13 July 2021'},
      {Id: 6, ImgPath: 'assets/images/card-image.jpg',ImgAlt: 'card-image', Title: 'Test title', Content: 'Incidunt deleniti modi nobis ipsum nesciunt harum iusto aspernatur ipsam? ',Date: '13 July 2021'},
    ]

    
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
  public openContent(title: any) {
    this.selectedTitle = title;
  }


}
