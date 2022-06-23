import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(public http:HttpClient) { }

  addBooks(data)
  {
    return this.http.post('http://localhost:3000/api/addbook',data);
  }

  getBook(id)
  {
    return this.http.get("http://localhost:3000/api/getbook/"+id)
  }

  updateBook(data){
    return this.http.put("http://localhost:3000/api/update",data)
  }

  getBooks(){
    return this.http.get('http://localhost:3000/api/books');
  }

  deleteBook(id){
    return this.http.delete("http://localhost:3000/api/remove/"+id)
  }
  
}
