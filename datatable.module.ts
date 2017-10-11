import { DataTableComponent } from './data-table/table.component';
import { DataTableUtil } from './data-table/data-table.util';
import { DataColumnComponent } from './data-column/data-column.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
      declarations: [
          DataColumnComponent,
          DataTableComponent  
      ],
      imports: [
        CommonModule
      ],
      exports: [
        DataTableComponent,
        DataColumnComponent
      ],
      providers: [
          DataTableUtil
      ],
      bootstrap: [
        DataTableComponent
      ]
})
export class DataTableModule { }