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
  template: '<ng-content></ng-content>',
  styleUrls: ['./data-column.component.css']
})
export class DataColumnComponent implements AfterContentInit {

  @Input() public columnField: string;

  @Input() public columnIcon: string;

  @Input() public columnHeader: string;

  @Input() public columnType: string;

  @Input() public sortable: boolean;

  @Input() public isVisible: boolean; 

  @Output() public addColumn = new EventEmitter();

  constructor() { }

  public ngAfterContentInit(): void {
      this.addColumn.emit({header: this.columnHeader,
                           sortable: this.sortable,
                           field: this.columnField, 
                           columnType: this.columnType,
                           isVisible: this.isVisible,
                           columnIcon: this.columnIcon});
  }

}
