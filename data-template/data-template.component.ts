import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-template',
  template: '<ng-content></ng-content>',
  styleUrls: ['./data-template.component.css']
})
export class DataTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
