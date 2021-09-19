import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMenuCollapsed = true;
  constructor() { }

  ngOnInit(): void {}

public goToHome(){
  document.getElementById('home')?.scrollIntoView({behavior: "smooth"});
}
public goToNews(){
  document.getElementById('news')?.scrollIntoView({behavior: "smooth"});
}
public goToServices(){
  document.getElementById('service')?.scrollIntoView({behavior: "smooth"});
}
public goToEducation(){
  document.getElementById('education')?.scrollIntoView({behavior: "smooth"});
}
public goToContact(){
  document.getElementById('contact')?.scrollIntoView({behavior: "smooth"});
}

}


