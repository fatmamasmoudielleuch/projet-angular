import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScategorieComponent } from './scategorie/scategorie.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlecardComponent } from './articlecard/articlecard.component';
import { ArticlesdatatableComponent } from './articlesdatatable/articlesdatatable.component';
import { DataTablesModule } from 'angular-datatables';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ScategorieComponent,
    ArticlesComponent,
    ArticlecardComponent,
    ArticlesdatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
