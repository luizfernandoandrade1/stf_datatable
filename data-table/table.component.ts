import { DataColumnComponent } from '../data-column/data-column.component';
import { Component, ContentChild, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class DataTableComponent implements OnInit {

  headerTitle = [];
  @Input() data: any[];

  @Input() dataTableProperties: any;

  constructor() { 
  }

  ngOnInit() { }

}
