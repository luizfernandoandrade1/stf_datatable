import {
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';

@Component({
  selector: 'data-column',
  templateUrl: './data-column.component.html',
  styleUrls: ['./data-column.component.css']
})
export class DataColumnComponent implements AfterContentInit {

  @Input() columnField: string;

  @Input() columnHeader: string;

  @Input() columnType: string;

  @Input() sortable: boolean;

  @Input() isVisible: boolean; 

  @Output() addColumn = new EventEmitter();

  constructor() { }

  public ngAfterContentInit(): void {
      this.addColumn.emit({header: this.columnHeader,
                           sortable: this.sortable,
                           field: this.columnField, 
                           columnType: this.columnType,
                           isVisible: this.isVisible});
  }

}
