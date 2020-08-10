import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  detailes: any;
  constructor() { }

  ngOnInit(): void {
    this.detailes = [
      { name: 'siva', type: 'VEG', age: 23 },
      { name: 'ramu', type: 'NONVEG', age: 10 },
      { name: 'ravi', type: 'VEG', age: 20 },
      { name: 'ragu', type: 'NONVEG', age: 30 },
    ];
  }

}
