import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServiceModel } from 'src/app/shared/models/service-model';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
  
})
export class ServicesComponent implements OnInit {
    constructor() { }

    apps : ServiceModel[] = [];

    customOptions: OwlOptions = {
      autoplay: true,
      autoplaySpeed: 3000,
      autoplayTimeout: 5000,
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 700,
    navText: ['<span><</span>', '<span>></span>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      }
    },
    nav: false
  }
  
  ngOnInit(): void {
    this.apps=[
      {
        Id:1,
        ImgAlt:'java',
        ImgPath:'../assets/icons/services-icons/java.svg',

      },
      {
        Id:2,
        ImgAlt:'python',
        ImgPath:'../assets/icons/services-icons/python.svg',

      },
      {
        Id:3,
        ImgAlt:'matlab',
        ImgPath:'../assets/icons/services-icons/Matlab.svg',

      },
      {
        Id:4,
        ImgAlt:'c++',
        ImgPath:'../assets/icons/services-icons/c++.svg',

      },
      {
        Id:5,
        ImgAlt:'c#',
        ImgPath:'../assets/icons/services-icons/c-sharp.svg',

      },
      {
        Id:6,
        ImgAlt:'ruby',
        ImgPath:'../assets/icons/services-icons/ruby.svg',

      },
      
        ]
  }

}
