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
    OnInit,
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
  
  dataTableProperties: any[] = [];

  @ContentChildren(DataColumnComponent)
  columns: QueryList<DataColumnComponent>;

  constructor(private dataTableUtil: DataTableUtil) { 
    
  }

  ngAfterContentChecked() {
    this.dataTableUtil.columns = [];
    this.columns.toArray().forEach(column => {
      this.dataTableUtil.addColumnByEvent(column);
    });

    this.dataTableProperties = this.dataTableUtil.buildDataTableProperties(this.data);
  }


}
