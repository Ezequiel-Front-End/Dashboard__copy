import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }

  getApi(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos');
  }

  getUsers(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  getAll(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos');
  }
  
  getAllPost(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}
