export class DataTableUtil {
    columns: any[] = [];
    datatable: any[] = [];
    homeData: any[] = [];

    addColumnByEvent(column: any){
        this.columns.push(column);
    }
    

    buildDataTableProperties(dataList: any[], columns: any[]) {  
        
        let fullColumn = {header: "", sortable: false, columnType: "", isVisible: true, values: []};
    
        columns.forEach(column => { 
          fullColumn.header = column.header;
          fullColumn.columnType = column.columnType;
          fullColumn.sortable = column.sortable
          fullColumn.isVisible = column.isVisible;
          dataList.forEach(data => {
            fullColumn.values.push(data[column.field]);
          });
          this.datatable.push(fullColumn);
          fullColumn = {header: "", sortable: false, columnType: "", isVisible: true, values: []};
        });

        console.log(columns);
    }
}