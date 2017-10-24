import { Injectable } from "@angular/core";
import { DataColumnComponent } from "../data-column/data-column.component";


@Injectable()
export class DataTableUtil {
    columns: DataColumnComponent[] = [];
    datatable: any[] = [];
    homeData: any[] = [];

    addColumnByEvent(column: any){
        this.columns.push(column);
    }    

    buildDataTableProperties(dataList: any[]) {  
        this.clearDataTable();
        let fullColumn = {header: "", sortable: false, columnType: "", isVisible: true, columnIcon: "", values: []};
        
        this.columns.forEach(column => { 
          fullColumn.header = column.columnHeader;
          fullColumn.columnType = column.columnType;
          fullColumn.sortable = column.sortable
          fullColumn.isVisible = column.isVisible;
          fullColumn.columnIcon = column.columnIcon
          dataList.forEach(data => {
            fullColumn.values.push(data[column.columnField]);
          });
          this.datatable.push(fullColumn);
          fullColumn = {header: "", sortable: false, columnType: "", isVisible: true, columnIcon: "", values: []};
        });
        
        return this.datatable;
    }

    clearDataTable(){
        this.datatable = [];
    }
}