import { DataColumnComponent } from '../data-column/data-column.component';
import { Component, Input, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit, ViewChild, Renderer, ContentChildren, AfterViewChecked, } from '@angular/core';
import { DataTableUtil } from 'app/data-table/data-table.util';

@Component({
  selector: 'data-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class DataTableComponent implements AfterViewChecked {

  @Input() data: any;
  
  dataTableProperties: any[] = [];

  @ContentChildren(DataColumnComponent)
  columns: QueryList<DataColumnComponent>;

  constructor(private dataTableUtil: DataTableUtil) { 
    
  }

  ngAfterViewChecked() { 

    this.columns.toArray().forEach(column => {
      this.dataTableUtil.addColumnByEvent(column);
    });

    this.dataTableProperties = this.dataTableUtil.buildDataTableProperties(this.data);
  }

}
