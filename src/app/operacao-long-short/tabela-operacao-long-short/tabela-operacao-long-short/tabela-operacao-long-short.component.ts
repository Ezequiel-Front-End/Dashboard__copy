import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';
import { CadastroCliente } from 'src/app/interface/cadastro-cliente';
import { ModelService } from 'src/app/service/model.service';

@Component({
  selector: 'app-tabela-operacao-long-short',
  templateUrl: './tabela-operacao-long-short.component.html',
  styleUrls: ['./tabela-operacao-long-short.component.scss']
})
export class TabelaOperacaoLongShortComponent implements OnInit{

  API: any
  
  displayedColumns = ['Nome Completo', 'E-mail', 'Telefone']
  dataSource!: MatTableDataSource<any>; 

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor (private api: ModelService){}
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
    const filtervalue = (value.target as HTMLInputElement).value
    this.dataSource.filter = filtervalue.trim().toLocaleLowerCase()
      
}
}
