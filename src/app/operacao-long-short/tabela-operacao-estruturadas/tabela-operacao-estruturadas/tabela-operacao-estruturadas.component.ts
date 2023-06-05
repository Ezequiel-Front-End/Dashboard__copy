import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CadastroCliente } from 'src/app/interface/cadastro-cliente';
import { ModelService } from 'src/app/service/model.service';

@Component({
  selector: 'app-tabela-operacao-estruturadas',
  templateUrl: './tabela-operacao-estruturadas.component.html',
  styleUrls: ['./tabela-operacao-estruturadas.component.scss']
})
export class TabelaOperacaoEstruturadasComponent implements OnInit{

  API: any

  displayedColumns = ['Nome Completo', 'E-mail', 'Telefone']
  dataSource!: MatTableDataSource<any>; 


  
  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;
  
  constructor(private api: ModelService) {}
  ngOnInit(): void {
    this.api.cadastroCliente().then((value)=>{
      this.API = value

      this.dataSource = new MatTableDataSource(this.API);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matSort;

      this.dataSource.filterPredicate = function(data: CadastroCliente, filter: string){
        return data.data?.nomeCompleto.toLocaleLowerCase().indexOf(filter) != -1
      }
      
    })
  }


  filterData(value: Event){
    const filterValue = (value.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase()
  }

}
