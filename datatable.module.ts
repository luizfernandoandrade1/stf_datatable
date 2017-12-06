import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionColumnComponent } from './action-column/action-column.component';
import { DataTableComponent } from './data-table/table.component';
import { DataTableUtil } from './data-table/data-table.util';
import { DataColumnComponent } from './data-column/data-column.component';

@NgModule({
      declarations: [
          DataColumnComponent,
          DataTableComponent,
          ActionColumnComponent  
      ],
      imports: [
        CommonModule
      ],
      exports: [
        DataTableComponent,
        DataColumnComponent,
        ActionColumnComponent
      ],
      providers: [
          DataTableUtil
      ],
      bootstrap: [
        DataTableComponent,
        ActionColumnComponent
      ]
})
export class DataTableModule { }