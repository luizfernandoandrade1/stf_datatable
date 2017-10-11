import { DataTableComponent } from './data-table/table.component';
import { DataTableUtil } from './data-table/data-table.util';
import { DataTemplateComponent } from './data-template/data-template.component';
import { DataColumnComponent } from './data-column/data-column.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
      declarations: [
          DataColumnComponent  
      ],
      imports: [
        CommonModule
      ],
      exports: [
        DataTemplateComponent,
        DataTableComponent
      ],
      providers: [
          DataTableUtil
      ],
      bootstrap: [
        DataTableComponent
      ]
})
export class DataTableModule { }