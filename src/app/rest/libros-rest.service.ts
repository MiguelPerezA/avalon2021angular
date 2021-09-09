import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Libro } from '../libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosRestService {

  constructor(public http:HttpClient) { }

  /*buscarTodos():Promise<Libro[]>{
    return this.http.get<Libro[]>("http://localhost:8084/webapi/libros").toPromise();
  }

  borrarLibro(libro:Libro):Promise<Libro>{

    return this.http.delete<Libro>(`http://localhost:8084/webapi/libros/${libro.isbn}`).toPromise();
  }*/

  //Ahora uso de Observables
  buscarTodos():Observable<Libro[]>{
    //return this.http.get<Libro[]>("http://localhost:8084/webapi/libros");
    //Con Variable de entorno
    return this.http.get<Libro[]>(`${environment.APIEndpoint}/libros`);
  }

  buscarPorTitulo(titulo:string):Observable<Libro[]>{
    let parametros = new HttpParams().set('titulo',titulo);
    return this.http.get<Libro[]>(`${environment.APIEndpoint}/libros`,{params:parametros});
  }

  borrarLibro(libro:Libro):Observable<Libro>{

    return this.http.delete<Libro>(`${environment.APIEndpoint}/libros/${libro.isbn}`);
  }

  insertarLibro(libro:Libro):Observable<Libro>{

    return this.http.post<Libro>(`${environment.APIEndpoint}/libros`,libro);
  }

  detalleLibro(libro:Libro):Observable<Libro>{

    return this.http.get<Libro>(`${environment.APIEndpoint}/libros/${libro.isbn}`);
  }

  detalleMiLibro(isbn:string):Observable<Libro>{

    return this.http.get<Libro>(`${environment.APIEndpoint}/libros/${isbn}`);
  }

  editarLibro(libro:Libro):Observable<Libro>{

    return this.http.put<Libro>(`${environment.APIEndpoint}/libros/${libro.isbn}`,libro);
  }

}
