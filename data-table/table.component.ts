import {
    AfterContentInit,
    Component,
    ContentChildren,
    Input,
    QueryList
} from '@angular/core';

import { DataColumnComponent } from '../data-column/data-column.component';
import { DataTableUtil } from './data-table.util';

@Component({
  selector: 'data-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class DataTableComponent implements AfterContentInit {

  @Input() data: any;

  @Input() tableClasses: string;
  
  dataTableProperties: any[] = [];

  @ContentChildren(DataColumnComponent)
  columns: QueryList<DataColumnComponent>;

  constructor(private dataTableUtil: DataTableUtil) { 
    
  }

  ngAfterContentInit() {
    this.dataTableUtil.columns = [];
    this.columns.toArray().forEach(column => {
      this.dataTableUtil.addColumn(column);
    });

    this.dataTableProperties = this.dataTableUtil.buildDataTableProperties(this.data);
  }


}
