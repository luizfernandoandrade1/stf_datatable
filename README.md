# stf_datatable node module

This is a simple DataTableModule that you can add to your application easily. 
In this version we only show data from JSON passed by parameter to the component and you 
can select what propertie of JSON will be yours columns on Grid.

You can see a [DEMO](https://github.com/luizfernandoandrade1/STF-DataTable-Demo) to understand the implementation.  


Este é um DataTableModule que você pode adicionar facilmente em sua aplicação.
Nesta versão nós apenas exibimos dados de JSON passados via parâmetro para o componente e você também 
pode selecionar qual propriedade do JSON seram suas colunas no Grid 

Você pode ver um [DEMO](https://github.com/luizfernandoandrade1/STF-DataTable-Demo) para entender a implementação.

## Example

app.ts

```typescript
import { AfterViewInit, Component } from '@angular/core';

let data = [{id: 1, registro: "556325/66", data: "25/06/2015", vara: "Cívil", status: "Aguardando Análise", icon:"fa fa-bug"},
{id: 2, registro: "556441/77", data: "26/06/2025", vara: "Crime", status:"Pendente", icon:"fa fa-bug"},
{id: 3, registro: "559836/77", data: "27/06/2025", vara: "Cívil", status:"Analisado", icon:"fa fa-heartbeat"},
{id: 4, registro: "563565/77", data: "28/06/2025", vara: "Crime", status:"Analisado", icon:"fa fa-motorcycle"},
{id: 5, registro: "554169/77", data: "29/06/2025", vara: "Crime", status:"Analisado", icon:"fa fa-bug"},
{id: 6, registro: "556321/77", data: "21/06/2025", vara: "Família", status:"Analisado", icon:"fa fa-bug"},
{id: 7, registro: "556465/77", data: "22/06/2025", vara: "Família", status:"Recusado", icon:"fa fa-heartbeat"},
{id: 8, registro: "556465/77", data: "22/06/2025", vara: "Família", status:"Recusado", icon:"fa fa-bug"},
{id: 9, registro: "556658/77", data: "23/06/2025", vara: "Família", status:"Recusado", icon:"fa fa-motorcycle"}];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  dataTest: any[] = [];
  fullData: any[] = [];

  constructor(){
    this.dataTest = data;
  }

  public ngAfterViewInit(): void {
    this.dataTest = this.dataTest;
  }
   
}

```

app.html

```html

<div style="text-align:center">
  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
    
      <data-table [data]="dataTest">
          <data-column [columnIcon]="'fa fa-code'" [columnHeader]="'ID'" [iconField]="'icon'"  [columnField]="'id'"></data-column>
          <data-column [columnHeader]="'Registro'" [columnField]="'registro'"></data-column>
          <data-column [columnHeader]="'Data'" [columnField]="'data'" ></data-column>
          <data-column [columnHeader]="'Vara'" [columnField]="'vara'"></data-column>
          <data-column [columnHeader]="'Status'" [columnField]="'status'"></data-column>
      </data-table>
  
  </div>
</div>

```