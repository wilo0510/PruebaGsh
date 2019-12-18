import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import {Post} from './Post'

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private httpClient:HttpClient  ) { 
  }
  obtenerDatos(){
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
