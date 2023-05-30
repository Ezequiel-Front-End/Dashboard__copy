import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModelService } from 'src/app/service/model.service';

@Component({
  selector: 'app-tabela-carteira',
  templateUrl: './tabela-carteira.component.html',
  styleUrls: ['./tabela-carteira.component.scss']
})
export class TabelaCarteiraComponent implements OnInit{

  displayedColumns = ['Nome Completo', 'E-mail', 'Telefone'];
  dataSource!: MatTableDataSource<any>; 

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private api: ModelService) {}
  ngOnInit(): void {
    this.api.cadastroCliente().then((value)=>{
      this.dataSource = new MatTableDataSource(value);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matSort;

    })

  }

  filterData(pesquisa: any){
    this.dataSource.filter = pesquisa.target.value
  }
}
