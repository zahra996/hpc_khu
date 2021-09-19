import { Component, OnInit } from '@angular/core';
import { PricingModel } from 'src/app/shared/models/pricing-model';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  constructor() { }
  infos : PricingModel[] = [];
  ngOnInit(): void {
    this.infos=[
      {Row:'1',	Ram:'1',	Nodes:'1'	,Memory:'1',	Core:'1',	Price:'1000$'},
      {Row:'2',	Ram:'2',	Nodes:'2'	,Memory:'2',	Core:'3',	Price:'2000$'},
      {Row:'3',	Ram:'4',	Nodes:'3'	,Memory:'3',	Core:'5',	Price:'3000$'},
      {Row:'4',	Ram:'6',	Nodes:'4'	,Memory:'4',	Core:'7',	Price:'4000$'},
      {Row:'5',	Ram:'8',	Nodes:'5'	,Memory:'5',	Core:'9',	Price:'5000$'},

    ]
  }

}
