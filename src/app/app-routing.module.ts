import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ScategorieComponent } from './scategorie/scategorie.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlecardComponent } from './articlecard/articlecard.component';
import { ArticlesdatatableComponent } from './articlesdatatable/articlesdatatable.component';

const routes: Routes = [
{path:'lcategorie', component : CategoriesComponent},
{path:'lScategorie', component : ScategorieComponent},
{path:'lArticles', component : ArticlesComponent},
{path:'lArticlecard ', component : ArticlecardComponent},
{path:'lArticledata', component :ArticlesdatatableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
