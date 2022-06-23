import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

   public form = new FormGroup
   ({
    image: new FormControl(),
    bookName:new FormControl(),
    authorName: new FormControl(),
    description:new FormControl(),
    id:new FormControl()
   })

   initform:any;

   constructor(private booksservice:BooksService,private router:Router) {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }
 
   ngOnInit(): void 
   {
     let bookId= localStorage.getItem('updateBookId');
     this.booksservice.getBook(bookId).subscribe((data)=>
     {
       this.initform=(JSON.parse(JSON.stringify(data)));
      //  console.log(this.initform)

       this.form.setValue({
         image:this.initform.image,
         bookName:this.initform.bookName,
         authorName:this.initform.authorName,
         description:this.initform.description,
         id:this.initform._id
       })

      //  console.log(this.form.value)
     })
    };
 
    updateBooks(data)
    {
      console.log(data);
      return this.booksservice.updateBook(data).subscribe(res=>
        {
        this.form=JSON.parse(JSON.stringify(data));
        localStorage.removeItem('updateBookId');
        this.router.navigate(["/books/content"]);
       
      })
      }
       
    }
 
     




      
      
   

