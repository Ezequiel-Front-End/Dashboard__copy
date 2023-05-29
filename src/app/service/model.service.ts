import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Dados } from '../model/dados';
import { CadastroAAI } from '../interface/cadastro-aai';
import { CadastroCliente } from '../interface/cadastro-cliente';
import { CadastroSetor } from '../interface/cadastro-setor';
import { CadastroTicker } from '../interface/cadastro-ticker';
import { ProcessoRendaVariavel } from '../interface/processo-renda-variavel';



@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }


  getApi() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos');
  }

  getUsers() {
    return this.http.get<Dados[]>('https://jsonplaceholder.typicode.com/users');
  }

  getAll() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos');
  }

  getAllPost() {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }


  /*********** REQUISIÇÃO - TOKEN ***********/
  gerarToken() {

    let myheaders = new Headers();
    myheaders.append("Authorization", "Basic d2ViQGphcnZpcy4yMDIxOkpjTko0ZkVT")

    let body = new URLSearchParams();
    body.append("username", "DEV-ZKR4:mab.admin");
    body.append("password", "m7e852e990");
    body.append("grant_type", "password");

    let requestOptions: any = {
      method: "POST",
      headers: myheaders,
      body: body,
      redirect: 'follow'
    }

    return fetch("http://qas-abctech.ddns.net:8080/jarvis/oauth/token", requestOptions)
      .then(resp => resp.json())
      .then(resultado => localStorage.setItem("token", resultado.access_token))
      .catch(Error => console.log(Error))
  }


  /*********** REQUISIÇÃO - CADASTRO AAI ***********/
  cadastroAAI() {

    let token = localStorage.getItem("token")
    let myheaders = new Headers();
    myheaders.append("Authorization", `Bearer ${token}`);
    let url = new URLSearchParams();
    myheaders.append("X-stuff-code", "c-fin-asses-01");
    myheaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "filters": []
    });

    var requestOptions: any = {
      method: "POST",
      headers: myheaders,
      body: raw,
      redirect: 'follow'
    }

    return fetch("http://qas-abctech.ddns.net:8080/jarvis/api/stuff/data/filter-entities", requestOptions)
      .then(resp => resp.json())
      .then(x => this.ICadastroAAI(x))
      .catch(error => console.log(error))
  }


  ICadastroAAI(cadastro: any) {
    cadastro.forEach((item: any) => {
      let i = new CadastroAAI();
      i.data = {
        nomeCompleto: item.data["ipt_00002"],
        codigoCorretora: item.data["ipt_00004"],
        dataRegistro: item.data["slt_00001"],
      };

      //console.log(i.data);
    });
  }


  /*********** REQUISIÇÃO - CADASTRO CLIENTE ***********/
  cadastroCliente() {

    let token = localStorage.getItem("token")
    let myheaders = new Headers();
    myheaders.append("Authorization", `Bearer ${token}`);
    let url = new URLSearchParams();
    myheaders.append("X-stuff-code", "c-cli-finan-01");
    myheaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "filters": []
    });

    var requestOptions: any = {
      method: "POST",
      headers: myheaders,
      body: raw,
      redirect: 'follow'
    }

    return fetch("http://qas-abctech.ddns.net:8080/jarvis/api/stuff/data/filter-entities", requestOptions)
      .then(resp => resp.json())
      .then(x => this.ICadastroCliente(x))
      .catch(error => console.log(error))
  }


  ICadastroCliente(cadastro: any) {
    cadastro.forEach((item: any) => {
      let i = new CadastroCliente();
      i.data = {
        dataRegistro: item.data["slt_00001"],
        nomeCompleto: item.data["ipt_00002"],
        telefone: item.data["ipt_00003"],
        email: item.data["ipt_00004"],
        codigoCorretora: item.data["ipt_00005"]
      };

      //console.log(i.data);
    });
  }


  /*********** REQUISIÇÃO - CADASTRO SETOR ***********/
  cadastroSetor() {

    let token = localStorage.getItem("token")
    let myheaders = new Headers();
    myheaders.append("Authorization", `Bearer ${token}`);
    let url = new URLSearchParams();
    myheaders.append("X-stuff-code", "c-set-finan-01");
    myheaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "filters": []
    });

    var requestOptions: any = {
      method: "POST",
      headers: myheaders,
      body: raw,
      redirect: 'follow'
    }

    return fetch("http://qas-abctech.ddns.net:8080/jarvis/api/stuff/data/filter-entities", requestOptions)
      .then(resp => resp.json())
      .then(x => this.ICadastroSetor(x))
      .catch(error => console.log(error))
  }


  ICadastroSetor(cadastro: any) {
    cadastro.forEach((item: any) => {
      let i = new CadastroSetor();
      i.data = {
        dataRegistro: item.data["slt_00001"],
        nomeSetor: item.data["ipt_00002"]
      };

      // console.log(i.data);
    });
  }


  /*********** REQUISIÇÃO - CADASTRO TICKER ***********/
  cadastroTicker() {

    let token = localStorage.getItem("token")
    let myheaders = new Headers();
    myheaders.append("Authorization", `Bearer ${token}`);
    let url = new URLSearchParams();
    myheaders.append("X-stuff-code", "c-tic-finan-01");
    myheaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "filters": []
    });

    var requestOptions: any = {
      method: "POST",
      headers: myheaders,
      body: raw,
      redirect: 'follow'
    }

    return fetch("http://qas-abctech.ddns.net:8080/jarvis/api/stuff/data/filter-entities", requestOptions)
      .then(resp => resp.json())
      .then(x => this.ICadastroTicker(x))
      .catch(error => console.log(error))
  }


  ICadastroTicker(cadastro: any) {
    cadastro.forEach((item: any) => {
      let i = new CadastroTicker();
      i.data = {
        setor: {
          value: item.data.slt_00002.value,
          label: item.data.slt_00002.label
        },
        tipo: {
          value: item.data.slt_00003.value,
          label: item.data.slt_00003.label
        },
        empresa: item.data.ipt_00003,
        ticker: item.data.ipt_00002
      };
      // console.log(i.data);
    });
  }


  /*********** REQUISIÇÃO - PROCESSO RENDA VARIÁVEL ***********/
  processoRendaVariavel() {

    let token = localStorage.getItem("token")
    let myheaders = new Headers();
    myheaders.append("Authorization", `Bearer ${token}`);
    let url = new URLSearchParams();
    myheaders.append("X-stuff-code", "p-fin-renva-01");
    myheaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "filters": []
    });

    var requestOptions: any = {
      method: "POST",
      headers: myheaders,
      body: raw,
      redirect: 'follow'
    }

    return fetch("http://qas-abctech.ddns.net:8080/jarvis/api/stuff/data/filter-entities", requestOptions)
      .then(resp => resp.json())
      .then(x => this.IProcessoRendaVariavel(x))
      .catch(error => console.log(error))
  }


  IProcessoRendaVariavel(cadastro: any) {
    cadastro.forEach((item: any) => {
      let i = new CadastroTicker();
      i.data = {
    // ctn_07
    i.dataTemplate: {

      template: [

          {
              ticker: {
                  value: string;
                  label: string;
              };


              quantidade: number;
              financeiroCompra: number;
              financeiroAtual: number;
              financeiro: number;

              // observação
              percentualInativo: string;
              percentualAtivo: string;

              encerrado: {

                  value: string;
                  label: string;

              };

              dataEncerramento: null;
              j_id: string;

          }


      ];
  } | undefined;


  // ctn_10
  i.data.dataTemplateOpcao: {


      templateOpcao: [

          {
              ticker: {
                  value: string;
                  label: string;
              };


              quantidade: number;
              financeiroCompra: number;
              financeiroAtual: number;
              strikeOpcao: number;


              encerrado: {
                  value: string;
                  label: string;
              };


              dataEncerramento: null;
              financeiro: number;
              percentualInativo: string;
              percentual: string;


              j_id: string;
          }


      ];

      encerrado: {
          value: string;
          label: string;
      };

      financeiroCompra: number;
      ticker: string;

  } | undefined
      console.log(i.data);
    });
  }

}







