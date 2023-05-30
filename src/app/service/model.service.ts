import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Dados } from '../model/dados';
import { tap } from 'rxjs';

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


  gerarToken() {

    let myheaders = new Headers();
    myheaders.append("Authorization", "Basic d2ViQGphcnZpcy4yMDIxOkpjTko0ZkVT");

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
      .then(resultado=> localStorage.setItem("token", resultado.access_token))
      .catch(Error => console.log(Error))
  }

  recebetoken() {

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
      .catch(error => console.log(error))
  }

  tratamento(){
    this.recebetoken().then(e=>{
      let obj = e
      for (let y of obj) {
          console.log(y);      
      }
    })
  }


}







