import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {
  detailes: any;
  constructor() { }

  ngOnInit(): void {
    this.detailes = [
      { name: 'siva', age: 23 },
      { name: 'ramu', age: 10 },
      { name: 'ravi', age: 20 },
      { name: 'ragu', age: 30 },
    ];
  }

}
