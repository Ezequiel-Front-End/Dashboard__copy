import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/service/model.service';


//material design
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { CadastroCliente } from 'src/app/interface/cadastro-cliente';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})

export class TabelaComponent implements OnInit {
     

  API: any
  

  displayedColumns = [ 'nomeCompleto', 'email', 'telefone']
  dataSource!: MatTableDataSource<CadastroCliente>
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  

  constructor(private _service: ModelService) { }

  ngOnInit(): void { 


      this._service.cadastroCliente().then((value)=>{
      this.API = value
      this.dataSource = new MatTableDataSource(this.API)      
      this.dataSource.sort = this.matSort;
      this.dataSource.paginator = this.paginator
      this.dataSource.filterPredicate = function(data: CadastroCliente, filter: string){
    
      return data.data?.nomeCompleto.toLocaleLowerCase().indexOf(filter) != -1;
    }       
});
 

}



  // primeira parte do filtro concluida com sucesso 

   doFilter = (value: Event) => {
    const filterValue = (value.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();    
}


// setupFilter(nomeCompleto: string){
//   this.dataSource.filterPredicate = (data: CadastroCliente, filter: string) => {
//     const textToSearch = data[nomeCompleto] && data[nomeCompleto].toLowerCase() || '';
//     return textToSearch.indexOf(filter) !== -1;
//   };
// }
    
   
}
  // On input focus: setup filterPredicate to only filter by input column

    
    // filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // this.dataSource.filter = filterValue;
  


    // this.dataSource.filterPredicate = (data: CadastroCliente, filter: string)=>{
    //   return true
    // };