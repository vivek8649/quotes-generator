import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhatAboutYouComponent } from './what-about-you/what-about-you.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { AuthorsComponent } from './authors/authors.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'wbu', component: WhatAboutYouComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'feel/:id', component: QuoteListComponent },
  { path: 'authors/:id', component: QuoteListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
