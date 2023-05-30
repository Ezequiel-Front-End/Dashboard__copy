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
      console.log(i.data);
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
      let i = new ProcessoRendaVariavel();
      i.data = {
        dataTemplate: {
          template: [
            {

              ticker: {
                value: item.data.slt_00001?.value || '',
                label: item.data.slt_00001?.label || ''
              },

              quantidade: item.data.ipt_00001,
              financeiroCompra: item.data.ipt_00002,
              financeiroAtual: item.dataipt_00003,
              financeiro: item.data.ipt_00004,
              percentualInativo: item.data.ipt_00006,
              percentualAtivo: item.data.ipt_00007,

              encerrado: {
                value: item.data.slt_00002?.value || '',
                label: item.data.slt_00002?.label || ''
              },

              dataEncerramento: item.data.slt_00003,

            }
          ]
        },
        dataTemplateOpcao: {
          templateOpcao: [
            {

              ticker: {
                value: item.data.slt_00001?.value || '',
                label: item.data.slt_00001?.label || ''
              },

              quantidade: item.data.ipt_00001,
              financeiroCompra: item.data.ipt_00002,
              financeiroAtual: item.data.ipt_00003,
              strikeOpcao: item.data.ipt_00006,

              encerrado: {
                value: item.data.slt_00002?.value || '',
                label: item.data.slt_00002?.label || ''
              },

              dataEncerramento: item.data.slt_00003,
              financeiro: item.data.ipt_00004,
              percentualInativo: item.data.ipt_00005,
              percentual: item.data.ipt_00009,
            }
          ],

          encerrado: {
            value: item.data.slt_00002?.value || '',
            label: item.data.slt_00002?.label || ''
          },

          financeiroCompra: item.data.ipt_00002,
          ticker: item.data.slt_00001?.value || ''

        }

      };
      console.log(i.data);
    });
   //console.log(cadastro[1]);

  }

}






