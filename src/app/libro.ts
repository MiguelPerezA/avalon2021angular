export class Libro {

    /*isbn:string="";
    titulo:string="";
    autor:string="";

    constructor(isbn:string,titulo:string,autor:string){
        this.isbn=isbn;
        this.titulo=titulo;
        this.autor=autor;
    }*/

    constructor(public isbn:string,public titulo?:string,public autor?:string){
        
    }
}