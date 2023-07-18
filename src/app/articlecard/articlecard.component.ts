import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-articlecard',
  templateUrl: './articlecard.component.html',
  styleUrls: ['./articlecard.component.css']
})
export class ArticlecardComponent implements OnInit {
  articles: any;

  constructor(private artserv: ArticlesService) {}

  ngOnInit(): void {
    this.listarticlecard();
  }

  listarticlecard(): void {
    this.artserv.fetcharticles().subscribe(
      (data) => {
        this.articles = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
