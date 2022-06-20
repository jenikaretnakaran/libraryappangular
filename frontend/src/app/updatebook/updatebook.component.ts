import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  form:FormGroup;

  constructor(private booksservice:BooksService,private router:Router) { }

  ngOnInit(): void 
  {
  
  };

  updateBooks(data){
    
}
}