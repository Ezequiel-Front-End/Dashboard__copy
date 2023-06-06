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

      .then(resp => {
        if (!resp.ok) {
          throw new Error("Erro na solicitação: " + resp.status);

        }
        return resp.json();

      })
      .then(resultado => {

        localStorage.setItem("token", resultado.access_token);
        // Outras ações com o resultado
      })
      .catch(error => {
        console.log("Erro durante a solicitação:", error);
        // Lidar com o erro de forma apropriada
      });

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
    cadastro.forEach((item: any) => { // realizando um loop sobre cada item do array cadastro
      let i = new CadastroAAI(); // criando uma nova instancia da classe e a armazena na variavel i 
      i.data = { // são atribuidos valores as propriedades do objeto i.data com base nos valores do objeto item
        nomeCompleto: item.data["ipt_00002"],
        codigoCorretora: item.data["ipt_00004"],
        dataRegistro: item.data["slt_00001"],
      };

      //console.log(i.data);
    });
  }



  async cadastroCliente() {

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

    // return fetch("http://qas-abctech.ddns.net:8080/jarvis/api/stuff/data/filter-entities", requestOptions)
    // .then(resp=> resp.json())
    // .then(x => this.ICadastroCliente(x))
    // .catch(error => console.log(error))

    let api = await fetch("http://qas-abctech.ddns.net:8080/jarvis/api/stuff/data/filter-entities", requestOptions);
    let dados = await api.json();
    let get = await dados
    let a = this.ICadastroCliente(get);
    return a;


  }

  ICadastroCliente(cadastro: any) {


    let lista = [];

    for (let index = 0; index < cadastro.length; index++) {

      let i = new CadastroCliente();
      i.data = {
        dataRegistro: cadastro[index]['data']["slt_00001"],
        nomeCompleto: cadastro[index]['data']["ipt_00002"],
        telefone: cadastro[index]['data']["ipt_00003"],
        email: cadastro[index]['data']["ipt_00004"],
        codigoCorretora: cadastro[index]['data']["ipt_00005"],
      };

      lista.push(i)

    }
    // console.log(lista);
    return lista;
  }

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

      //console.log(i.data);
    });
  }


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
      //console.log(i.data);
    });
  }


  async processoRendaVariavel() {
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

    // return fetch("http://qas-abctech.ddns.net:8080/jarvis/api/stuff/data/filter-entities", requestOptions)
    //   .then(resp => resp.json())
    //   .then(x => this.IProcessoRendaVariavel(x))
    //   .catch(error => console.log(error))

    let api = await fetch("http://qas-abctech.ddns.net:8080/jarvis/api/stuff/data/filter-entities", requestOptions)
    let dados = await api.json();
    let get = await dados
    let a = this.IProcessoRendaVariavel(get);
    return a;
  }

  IProcessoRendaVariavel(cadastro: any) {
    let lista = []

    for (let index = 0; index < cadastro.length; index++) {
      let i = new ProcessoRendaVariavel();

      i.data = { template: [], templateOpcao: [] } // inicializando os template (ctn_00007) e o template opção (ctn_00010)

      // Percorre o array ctn_00007
      for (let j = 0; j < cadastro[index].data.ctn_00007.length; j++) {

        i.data.template.push({

          ticker: {
            value: cadastro[index].data.ctn_00007[j].slt_00001?.value || '',
            label: cadastro[index].data.ctn_00007[j].slt_00001?.label || ''
          },

          quantidade: cadastro[index].data.ctn_00007[j].ipt_00001,
          financeiroCompra: cadastro[index].data.ctn_00007[j].ipt_00002,
          financeiroAtual: cadastro[index].data.ctn_00007[j].ipt_00003,
          financeiro: cadastro[index].data.ctn_00007[j].ipt_00004,
          percentualInativo: cadastro[index].data.ctn_00007[j].ipt_00006,
          percentualAtivo: cadastro[index].data.ctn_00007[j].ipt_00007,

          encerrado: {
            value: cadastro[index].data.ctn_00007[j].slt_00002?.value || '',
            label: cadastro[index].data.ctn_00007[j].slt_00002?.label || ''
          },

          dataEncerramento: cadastro[index].data.ctn_00007[j].slt_00003,

        });
      }


      // Percorre o array ctn_00010
      for (let k = 0; k < cadastro[index].data.ctn_00010.length; k++) {

        i.data.templateOpcao.push({

          ticker: {
            value: cadastro[index].data.ctn_00010[k].slt_00001?.value || '',
            label: cadastro[index].data.ctn_00010[k].slt_00001?.label || ''
          },

          quantidade: cadastro[index].data.ctn_00010[k].ipt_00001,
          financeiroCompra: cadastro[index].data.ctn_00010[k].ipt_00002,
          financeiroAtual: cadastro[index].data.ctn_00010[k].ipt_00003,
          strikeOpcao: cadastro[index].data.ctn_00010[k].ipt_00006,

          encerrado: {
            value: cadastro[index].data.ctn_00010[k].slt_00002?.value || '',
            label: cadastro[index].data.ctn_00010[k].slt_00002?.label || ''
          },

          dataEncerramento: cadastro[index].data.ctn_00010[k].slt_00003,
          financeiro: cadastro[index].data.ctn_00010[k].ipt_00004,
          percentualInativo: cadastro[index].data.ctn_00010[k].ipt_00005,
          percentual: cadastro[index].data.ctn_00010[k].ipt_00009,
        });
      }

      i.data.encerrado = {
        value: cadastro[index].data.slt_00002?.value || '',
        label: cadastro[index].data.slt_00002?.label || ''
      },

        i.data.encerrado.financeiroCompra = cadastro[index].data.ipt_00002,
        i.data.encerrado.ticker = cadastro[index].data.slt_00001?.value || ''

      // return i.data
      lista.push(i)

    };

    console.log(lista);
    return lista

    //return console.log(lista[0].template[0].quantidade);

  }

}


// reduce, some, map, filter, forEach 
