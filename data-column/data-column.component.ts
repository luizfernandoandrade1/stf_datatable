import {
    Component,
    EventEmitter,
    Input,
    OnInit,
} from '@angular/core';

@Component({
  selector: 'data-column',
  template: '<ng-content></ng-content>',
  styleUrls: ['./data-column.component.css']
})
export class DataColumnComponent {

  @Input() public columnField: string;

  @Input() public columnIcon: string;

  @Input() public iconField: string;

  @Input() public columnHeader: string;

  @Input() public columnType: string;

  @Input() public sortable: boolean;

  @Input() public isVisible: boolean; 

  constructor() { }

}
