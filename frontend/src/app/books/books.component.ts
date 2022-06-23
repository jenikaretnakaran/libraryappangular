import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

 
export class BooksComponent implements OnInit {

  constructor(private booksservice:BooksService,private router:Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
   
  form: FormGroup;
  imagewidth:number=100;
  imagemargin:number=2;

  ngOnInit(): void 
  {
  
     this.booksservice.getBooks().subscribe((data)=>
     {
      this.form=JSON.parse(JSON.stringify(data));
      console.log(this.form)
     })
  }

  updateBook(book)
  {
    localStorage.setItem("updateBookId",book._id.toString());
    this.router.navigate(["/books/update"])
  }

  deleteBook(book)
  {
    this.booksservice.deleteBook(book._id)  
    .subscribe(()=>{
      location.reload()
    })
  }

}
