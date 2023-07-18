import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-articlesdatatable',
  templateUrl: './articlesdatatable.component.html',
  styleUrls: ['./articlesdatatable.component.css']
})
export class ArticlesdatatableComponent implements OnInit {
  articles: any;

  constructor(private artserv: ArticlesService) {}

  ngOnInit(): void {
    this.listarticles();
  }

  listarticles() {
    this.artserv.fetcharticles().subscribe(
      (data) => {
        this.articles = data;
      }
    );
  }

  deleteArticle(id: string) {
    this.artserv.deletearticles(id).subscribe(
      (res) => {
        this.listarticles();
      }
    );
  }

  editArticle(article: any) {
    // Logique pour la modification de l'article
    // ...
  }
}
