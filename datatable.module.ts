import { DataTableUtil } from './data-table/data-table.util';
import { DataTemplateComponent } from './data-template/data-template.component';
import { DataColumnComponent } from './data-column/data-column.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [
        CommonModule
      ],
      declarations: [
        DataColumnComponent,
        DataTemplateComponent,
        DataTableUtil
      ],
      exports: [
        DataColumnComponent,
        DataTemplateComponent,
        DataTableUtil
      ]
})
export class DataTableModule { }