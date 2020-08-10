import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  detailes: any;
  foodstatus = 'none';
  constructor() { }
  taggglefoodlist(foodstatus) {
    if (foodstatus === 'none') {
      this.foodstatus = 'line-through';
    }else{
      this.foodstatus = 'none';

    }
  }
  ngOnInit(): void {
    this.detailes = [
      { foodname: 'Dietary.' },
      { foodname: 'Minerals.' },
      { foodname: 'Proteins.' },
      { foodname: 'Vitamins.' },
    ];
  }
}
