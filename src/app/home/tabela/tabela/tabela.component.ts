import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/service/model.service';


//material design
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CadastroCliente } from 'src/app/interface/cadastro-cliente';
import { DataSource } from '@angular/cdk/collections';



@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})

export class TabelaComponent implements OnInit {





  displayedColumns = ['nomeCompleto', 'email', 'telefone']
  dataSource!: MatTableDataSource<any>;
  // list:  CadastroCliente[] = [];
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;


  constructor(private _service: ModelService) { }

  ngOnInit(): void {

      this._service.cadastroCliente().then((value)=>{
      this.dataSource = new MatTableDataSource(value)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matSort;
    
    });

  }

  Filterchange(data: Event){
    const inputValue = (data.target as HTMLInputElement).value
    console.log(inputValue)
    this.dataSource.filter = inputValue
  }
  // On input focus: setup filterPredicate to only filter by input column

    
    // filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // this.dataSource.filter = filterValue;
  }


  