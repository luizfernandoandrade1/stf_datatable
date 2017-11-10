import { DataColumnComponent } from '../data-column/data-column.component';
import {
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    Input,
    OnChanges,
    QueryList,
    Renderer,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import { DataTableUtil } from './data-table.util';

@Component({
  selector: 'data-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class DataTableComponent implements AfterContentChecked {

  @Input() data: any;

  @Input() tableClasses: string;
  
  dataTableProperties: any[] = [];

  @ContentChildren(DataColumnComponent)
  columns: QueryList<DataColumnComponent>;

  constructor(private dataTableUtil: DataTableUtil) { 
    
  }

  ngAfterContentChecked() {
    this.dataTableUtil.columns = [];
    this.columns.toArray().forEach(column => {
      this.dataTableUtil.addColumn(column);
    });

    this.dataTableProperties = this.dataTableUtil.buildDataTableProperties(this.data);
  }


}
