import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosRestService {

  constructor(public http:HttpClient) { }

  buscarTodos():Promise<Libro[]>{
    return this.http.get<Libro[]>("http://localhost:8084/libros").toPromise();
  }
}
