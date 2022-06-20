import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BooksComponent } from './books/books.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"signup",component: SignupComponent },
  {path:"login",component: LoginComponent},
  {path:"books",component:BodyComponent, 
    children:[{
              path:"addbook",component:AddbookComponent 
             },
             {
              path:"content",component:BooksComponent
             }
            ]
          }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
