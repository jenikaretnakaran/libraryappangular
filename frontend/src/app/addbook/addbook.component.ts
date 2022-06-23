import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  form:FormGroup;

  constructor(private booksservice:BooksService,private router:Router) { }

  ngOnInit(): void 
  {
    this.form=new FormGroup
    (
      {
      image: new FormControl(),
      bookName:new FormControl(),
      authorName: new FormControl(),
      description: new FormControl()
      }
    );
  };

  getBooks(data){
    return this.booksservice.addBooks(data)
    .subscribe(res=>{
      console.log(data);
      this.router.navigate(['/books/content']);
    })
  }
}
